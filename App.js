/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Photo from './Photo';
import Form from './Form';
import Confirmation from './Confirmation';
// const request = require('request');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// CONFIG

const ip = '192.168.1.9';
const port = 5354;
const token = 'Bearer fake-token-12345789-abcdefgh';
const url = `http://${ip}:${port}/orders`;
const employeeId = 17;


type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = { hasPhoto: false, base64: null, sent: false }
  }

  onPhoto = (base64) => {
    this.setState({ hasPhoto: true, base64 });
  }

  onSend = (data) => {
    console.log('______________________________________--');

    const body = {
      ...data,
      img: `data:image/jpeg;base64,${this.state.base64}`,
      employeeId,
    }
    console.log(body.employeeId);

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    }

    // request.post({
    //   headers: { 'content-type': 'application/x-www-form-urlencoded' },
    //   url: url,
    //   body: body
    // }, function (error, response, body) {
    //   this.setState({ sent: true })
    // });

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    }).then(res => {
      this.setState({ sent: true })
    });

  }

  render() {
    if (!this.state.hasPhoto) {
      return (
        <Photo
          onPhoto={this.onPhoto}
        />
      );
    } else {
      if (!this.state.sent) {
        return (
          <Form
            base64={this.state.base64}
            onSend={this.onSend} />
        );
      } else {
        return (
          <Confirmation />
        );
      }


    }
  }
}

