import React from 'react';
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import config from "../../content/meta/config";

const styles = theme => ({});



const Blog = () => {

  return (
    <Main>
      <Article>
        <PageHeader title="Blog" />
        <Content>

        </Content>
      </Article>
    </Main>
  );
};

Request.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Blog);