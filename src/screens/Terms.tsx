//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Terms = () => {
  return (
    <View style={styles.container}>
        <Text style={{color:'black',fontSize:24,marginHorizontal:30,textAlign:'center',fontWeight:'800',marginVertical:50}}>Terms And Conditions</Text>
      <Text style={{color:'black',fontSize:20,marginHorizontal:30,textAlign:'center',fontWeight:'800',marginTop:100}}>
        In order to use the QR-based bus pass system, users must maintain a
        minimum account balance of 30 LKR at all times. If your account balance
        falls below this threshold, you will not be able use the QR code for bus
        fare payments until your account is reloaded to meet the minimum balance
        requirement.{'\n\n    '} Failure to maintain the minimum account balance may result
        in the suspension of services. Services will resume once the account is
        reloaded to the minimum balance or higher.
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Terms;
