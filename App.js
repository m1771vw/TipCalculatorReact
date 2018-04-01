/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TextInput, Alert
} from 'react-native';
import styles from './Styles';
import TotalAmount from './components/TotalAmount';

export default class App extends Component { 
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Tip Calculator</Text>   
        </View>
        <TotalAmount/>
      </View>
    );
  }
}
