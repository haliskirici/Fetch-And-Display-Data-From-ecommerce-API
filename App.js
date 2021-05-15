import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
  
type Props = {};  
export default class App extends Component<Props> {  
  render() {  
    return (  
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.textStyle}>PRODUCTS</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.textStyle}>CATEGORIES</Text>
        </View>
        <View style={styles.box3}>
          <Text style={styles.textStyle}>ORDERS</Text>
        </View>
      </View>
    );  
  }  
}  

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1, 
    flexDirection: 'row',   
  },
  box1: {
    width: 75,
    height: 75,
    
    
    backgroundColor: 'steelblue'
  },
  box2: {
    width: 75,
    height: 75,
    
    
    backgroundColor: 'red'
  },
  box3: {
    width: 75,
    height: 75, 
  
    
    backgroundColor: 'orange'
  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    margin: 25,
  }
});
