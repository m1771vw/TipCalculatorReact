import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TextInput, Alert
} from 'react-native';

var baseTextHeight = 15;
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
    backgroundColor:'brown',
    height:'25%',
    flexDirection:'row',
    
  },
  textInputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    height: baseTextHeight + 30,
    width: '50%'
  },
  tipCalculatorContainer: {
    backgroundColor:'white',
    height:'70%'
  },
  
});

export {styles as default}