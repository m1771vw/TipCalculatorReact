/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View, TextInput, Alert
} from 'react-native';

import Calculator from './components/Calculator';

class TipAmount15 extends Component {
  constructor() {
    super();
    this.state = {
      totalAmount: '',
      tipAmount15: 'asdfasdf'
    }
  }

  componentWillReceiveProps (props) {
    console.log("Compoent received prop");
    var setTipAmount15 = 'bbb';
    this.tipAmount15 = this.setState(tipAmount15: setTipAmount15);
  }
  // _setTipAmount = () => {
  //   this.setState(tipAmount15: 'bbbbb');
  // }
  render() {
    return (
        <View style={styles.tipCalculatorContainer}>
        
            <Text>15%</Text>
            <Text>Tip Amount: {this.state.tipAmount15}</Text>
            <Text>Total Amount: </Text>
        </View>
        

    )
  }

}

class TotalAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: ''
    }
  }

  handleTotalAmount = (event) => {
    console.log("Handling change: " + event);
    this.setState({totalAmount: event});
    console.log("Total Amount: " + this.state.totalAmount);
  }
  render() {
    const totalAmount = this.state.totalAmount;
    return (
      
      <View style={styles.totalAmountContainer}>
          <Text>Total Amount: </Text>
            <TextInput
            style={styles.textInputContainer}
            placeholder='Enter Total Amount'
            placeholderTextColor='black'
            //keyboardType='number-pad'
            //returnKeyType='done'
            onChangeText={this.handleTotalAmount}
            />
            
      </View>
      

    )
  }
}

export default class App extends Component { 
   constructor(props) {
     super(props);
     this.state = {

     }
   }
  
  render() {
    return (

      <View style={styles.background}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Tip Calculator</Text>   
        </View>
        <TotalAmount/>
        <TipAmount15
        totalAmount={TotalAmount.totalAmount}
        />
        {/* <TipAmount15
          tipAmount15='ccc'/> */}
      </View>
    );
  }
}
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
