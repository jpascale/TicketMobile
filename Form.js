import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      description: null,
      cost: null,
      kind: null,
      inputDesc: null
    };
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>
      //     hola{this.props.base64}
      //   </Text>
      // </View>
      <View style={styles.container}>
        <FormLabel>Description</FormLabel>
        <FormInput
          onChangeText={(text) => { this.setState({ description: text }) }}
        />

        <FormLabel>Costo</FormLabel>
        <FormInput
          onChangeText={(text) => { this.setState({ cost: text }) }}
        />

        <FormLabel>Rubro</FormLabel>
        <FormInput
          onChangeText={(text) => { this.setState({ kind: text }) }}
        />

        <Button
          onPress={() => {
            this.props.onSend({
              description: this.description,
              cost: this.cost,
              kind: this.kind
            })
          }}
          title="Enviar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
