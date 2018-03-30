/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TextInput, Alert
} from 'react-native';


export default class App extends Component {
   
  onTotalAmountEntry() {
    Alert.alert='onTotalAmount'
  }

  render() {
    var totalAmount=0
    return (

      <View style={styles.background}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Tip Calculator</Text>

        </View>
        <View style={styles.totalAmountContainer}>
          <Text>Total Amount: </Text>
            <TextInput
            style={styles.textInputContainer}
            placeholder='Enter Total Amount'
            placeholderTextColor='black'
            keyboardType='number-pad'
            returnKeyType='done'
            onSubmitEditing={this.onTotalAmountEntry}
            />
        </View>
        <View style={styles.tipCalculatorContainer}>
          <Text>15%</Text>
        </View>
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
  playground: {
    backgroundColor: '#00FF12'
  },
  background: {
    backgroundColor: 'white'
  },
  titleContainer: {
    backgroundColor: '#AABBCC',
    height:'15%',
    marginTop: '10%'
  },
  titleText: {
    textAlign: 'center',
    fontSize: 40
  },
  totalAmountContainer: {
    backgroundColor:'#CCBBAA',
    height:'25%',
    flexDirection:'row'
  },
  tipCalculatorContainer: {
    backgroundColor:'#EEFFAA',
    height:'70%'
  },
  textInputContainer: {
    borderColor: 'black',
    borderWidth: 1,

    height: '10%',
    width: '50%'


  }
});
