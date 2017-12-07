import React, { Component } from 'react'
import { Link } from 'react-router'
import { Ajax, getInitState }from "../../utils/index";
import Head from "../../components/head";

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  // 渲染html
  renderHtml(html) {
    return (
      <div dangerouslySetInnerHTML={{ __html: html }}/>
    )
  }

  render() {
    const { body = {} } = this.props;
    const data = body.content || {};
    const title = data.title;

    return (<div id="main">
        <Head>
          <title>{title}</title>
        </Head>
        <article className="post detail">
          <div className="meta">
            <div className="date">{data.createdAt}</div>
          </div>
          <h1 className="title">
            {data.title}
          </h1>
          <div className="entry-content">
            <div id="toc" className="toc">{this.renderHtml(data.toc) }</div>
            {this.renderHtml(data.content)}
          </div>
        </article>
      </div>
    )
  }
}

Article.getInitialProps = async function (rootProps) {
  const params = rootProps.params;
  let url = `/api/article/${params.pathName}`;
  return await Ajax({
    url: url
  }).then((resp) => {
    return { body: resp };
  });
};