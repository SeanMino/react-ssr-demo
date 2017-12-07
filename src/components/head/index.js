import React from "react";
import Head from "../../../lib/head";

export default class Header extends React.Component {
  render() {
    return <Head>
      {this.props.children}
    </Head>
  }
}