import React from 'react';
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import HomeRequestForm from "../components/Forms/HomeRequestForm";
import config from "../../content/meta/config";

const styles = theme => ({});



const Request = () => {

  return (
    <Main>
      <Article>
        <PageHeader title="Home Handyman Services" />
        <Content>
          Feel free to contact me by email if you have any general questions: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        </Content>
        <HomeRequestForm />
      </Article>
    </Main>
  );
};

Request.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Request);