import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import styles from '../Styles';
import Calculator from '../components/Calculator'
export default class TotalAmount extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalAmount: '',
      }
    }
    handleTotalAmount = (totalAmountInput) => {
      this.setState({
        totalAmount: totalAmountInput
      })
    }
    render() {
      return (
        <View>
        <View style={styles.totalAmountContainer}>
            <Text>Total Amount: </Text>
              <TextInput
              style={styles.textInputContainer}
              placeholder='Enter Total Amount'
              placeholderTextColor='black'
            //   keyboardType='number-pad'
            //   returnKeyType='done'
              onChangeText={this.handleTotalAmount}
              />
        </View>
        <Calculator 
          percent={10}
          totalAmount={this.state.totalAmount}/>
        <Calculator 
          percent={15}
          totalAmount={this.state.totalAmount}/>
        <Calculator 
          percent={18}
          totalAmount={this.state.totalAmount}/>
        </View>
      )
    }
  }