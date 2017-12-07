import React, { Component } from 'react'
import { Link } from 'react-router'
import Head from "../../components/head";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList(count) {
    for (let i = 0; i < count.length; i++) {

    }
  }


  render() {
    const { params = {} }  = this.props;
    const { count = 100 } = params;
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push(i)
    }

    return <div>
      <Head>
        <title>压测节点数 {count}</title>
      </Head>
      <div>
        <ul>
          {
            out.map((item, index) => {
              return <li key={index}>This is row {index + 1}</li>
            })
          }
        </ul>
      </div>
    </div>
  }
}
