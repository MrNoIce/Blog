import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Button from "@material-ui/core/Button";
import { navigateTo } from "gatsby-link";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const styles = theme => ({
  submit: {
    margin: "3em 0"
    //width: "100%"
  },
  multilineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em"
  },
  singleLineInput: {
    lineHeight: 1.4,
    fontSize: "1.2em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "47%",
      marginLeft: "3%",
      "&:first-child": {
        marginRight: "3%",
        marginLeft: 0
      }
    }
  },
  submitError: {
    background: "red",
    color: "white"
  }
});

class RequestForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    concerns: "",
    help: "",
    submitError: ""
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleNetworkError = e => {
    this.setState({ submitError: "There was a network error." });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Request", ...this.state })
    })
      .then(() => {
        console.log("Form submission success");
        navigateTo("/success");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        this.handleNetworkError();
      });

    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    const { email, name, phone, vehicle, concerns, help, submitError } = this.state;

    return (
      <ValidatorForm
        onSubmit={this.handleSubmit}
        onError={errors => console.log(errors)}
        name="Request"
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {submitError && <p className={classes.submitError}>{submitError}</p>}
        <TextValidator
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="email"
          name="email"
          label="E-mail"
          value={email}
          onChange={this.handleChange}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="phone"
          name="phone"
          label="Phone"
          value={phone}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="vehicle"
          name="vehicle"
          label="Vehicle Year, Make, Model"
          value={vehicle}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          fullWidth
          margin="normal"
          className={classes.singleLineInput}
        />
        <TextValidator
          id="concerns"
          name="concerns"
          label="Concerns/Details"
          value={concerns}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          multiline
          fullWidth
          margin="normal"
          className={classes.multilineInput}
        />
        <TextValidator
          id="help"
          name="help"
          label="How can I help?"
          value={help}
          onChange={this.handleChange}
          validators={["required"]}
          errorMessages={["this field is required"]}
          multiline
          fullWidth
          margin="normal"
          className={classes.multilineInput}
        />
        <input name="bot-field" style={{ display: "none" }} />
        <Button
          variant="raised"
          color="primary"
          size="large"
          type="submit"
          className={classes.submit}
        >
          Send Request
        </Button>
      </ValidatorForm>
    );
  }
}

RequestForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(RequestForm);
