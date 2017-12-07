import request from "axios";
import React from 'react';
const config = require("../../server/config/index");

/**
 * @param  {Object} options
 * @return {Object}         Return Promise
 */
export function Ajax(options) {
  const defaults = {
    url: "",
    method: 'get',
    data: {}
  };

  options = Object.assign({}, defaults, options);

  let url = options.url;

  if (typeof window === "undefined") {
    url = `http://localhost:${config.frontPort}${url}`;
  }

  if (options.method === "get") {
    url = url + toString(options.data);
  }

  let promise = request[options.method](url);
  return new Promise(resolve => {
    promise.then(resp => {
      if (resp.status === 200) {
        resolve(resp.data)
      }
    }).catch(err => {
      console.log(err)
    })
  });
}

function toString(data) {
  let string = [];
  for (let name in data) {
    string.push(`${name}=${encodeURI(data[name])}`)
  }
  if (string.length) {
    return "?" + string.join("&")
  }
  return '';
}

/**
 * @return {Object} Return url params
 */
export function getURLParams() {
  const search = location.search.slice(1),
    rParam = /([^&]*)=([^&]*)/g;
  let ret = {},
    param;

  while (param = rParam.exec(search)) {
    ret[param[1]] = param[2]
  }

  return ret
}