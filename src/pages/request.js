import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import RequestForm from "../components/Forms/RequestForm";
import config from "../../content/meta/config";

const styles = theme => ({});

const Request = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Request" />
        <Content>
          Feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        </Content>
        <RequestForm />
      </Article>
    </Main>
  );
};

Request.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Request);
