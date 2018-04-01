import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Alert } from 'react-native';

import styles from '../Styles';
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: '',
      totalAmount: '',
      tipAmount15:'',
      postTipAmount15:''
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.totalAmount != this.props.totalAmount){
      var percent = this.props.percent;
      var totalAmountInput = newProps.totalAmount;
      this.setState({totalAmount: totalAmountInput});
      this.setState({tipAmount15: parseFloat(totalAmountInput*(percent/100)).toFixed(2)})
      this.setState({postTipAmount15: parseFloat(totalAmountInput * (1+(percent/100))).toFixed(2)})
    }
  }
  render() { 
    return (
      <View style={styles.tipCalculatorContainer}>     
            <Text>{this.props.percent}%</Text>
            <Text>Tip Amount: {this.state.tipAmount15}</Text>
            <Text>Total Amount: {this.state.postTipAmount15}</Text>
        </View>
    )
  }
}

