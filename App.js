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
      console.log("Percent: " + percent)
      console.log("Handling change: " + totalAmountInput);
      console.log("Total Amount: " + this.state.totalAmount);
      console.log(totalAmountInput * 1.15)
      this.setState({totalAmount: totalAmountInput});
      
      this.setState({tipAmount15: parseFloat(totalAmountInput*(percent/100)).toFixed(2)})
      
      this.setState({postTipAmount15: parseFloat(totalAmountInput * (1+(percent/100))).toFixed(2)})

    }
    
  }

  // _setTipAmount = () => {
  //   this.setState(tipAmount15: 'bbbbb');
  // }
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

class TotalAmount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Calculator: null,
      //percent: '',
      totalAmount: '',
      //tipAmount15:'',
      //postTipAmount15:''
    }
  }

  handleTotalAmount = (totalAmountInput) => {
    this.setState({
      totalAmount: totalAmountInput
    })
    //var percent = this.props.percent;
    //console.log("Percent: " + percent)
    //console.log("Handling change: " + totalAmountInput);
    //this.setState({totalAmount: totalAmountInput});
    //console.log("Total Amount: " + this.state.totalAmount);
    //this.setState({tipAmount15: parseFloat(totalAmountInput*(percent/100)).toFixed(2)})
    //console.log(totalAmountInput * 1.15)
    //this.setState({postTipAmount15: parseFloat(totalAmountInput * (1+(percent/100))).toFixed(2)})

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
            //keyboardType='number-pad'
            //returnKeyType='done'
            onChangeText={this.handleTotalAmount}
            onSubmitEditing={this.handleTotalAmount}
            />
            
      </View>
      <TipAmount15 
        percent={15}
        totalAmount={this.state.totalAmount}/>
              <TipAmount15 
        percent={18}
        totalAmount={this.state.totalAmount}/>
        {/* <TipAmount15 
        percent={18}
        tipAmount15={this.state.tipAmount15}
        postTipAmount15={this.state.postTipAmount15}/> */}
      {/* <View style={styles.tipCalculatorContainer}>
        
            <Text>{this.props.percent}%</Text>
            <Text>Tip Amount: {this.state.tipAmount15}</Text>
            <Text>Total Amount: {this.state.postTipAmount15}</Text>
        </View> */}
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
    height:'25%'
  },
  
});
