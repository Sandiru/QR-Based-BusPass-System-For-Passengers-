import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, getDoc } from 'firebase/firestore';
import { db3 } from '../../firebase/firebaseinitPassengers';

const NavigationBar = (a: any) => {
  const stack = a.stack;

  function GoToHome(){
    stack.navigate('Home');
  }

  function GoToReloadByCard(){
    stack.navigate('Reload');
  }

  async function GoToProfile(){
    const storedSelectedId = await AsyncStorage.getItem('selectedId');
      if (storedSelectedId) {
        const getAmount = await getDoc(doc(db3, 'Users', storedSelectedId));
        const userAmount = getAmount.data()?.amount ?? '0';
        stack.navigate('MyDetails',{userId:storedSelectedId, userAmount:userAmount});
      }
      else{
        Alert.alert("Error","You not a registered member!")
      }
  }

  function GoToCalculation(){
    stack.navigate('FairCalculation');
  }

  return (
    <View
      style={styles.container}>
      {a.routeName == 'Home' ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToHome}>
            <Icon name="home" size={25} color="#a297a6" style={{textAlign:'center'}}/>
            <Text style={{color: '#a297a6', fontSize: 14}}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToHome}>
            <Icon name="home" size={25} color="#b449de" style={{textAlign:'center'}}/>
            <Text style={{color: '#b449de', fontSize: 14}}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {a.routeName == 'Reload' ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToReloadByCard}>
            <Icon name="card" size={25} color="#a297a6" style={{textAlign:'center'}}/>
            <Text style={{color: '#a297a6', fontSize: 14}}>
              Reload
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToReloadByCard}>
            <Icon name="card" size={25} color="#b449de" style={{textAlign:'center'}}/>
            <Text style={{color: '#b449de', fontSize: 14}}>
              Reload
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {a.routeName == 'FairCalculation' ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToCalculation}>
            <Icon name="subway" size={25} color="#a297a6" style={{textAlign:'center'}}/>
            <Text style={{color: '#a297a6', fontSize: 14}}>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToCalculation}>
            <Icon name="subway" size={25} color="#b449de" style={{textAlign:'center'}}/>
            <Text style={{color: '#b449de', fontSize: 14}}>
              Upcoming
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {a.routeName == 'MyDetails' ? (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToProfile}>
            <Icon name="person" size={25} color="#a297a6" style={{textAlign:'center'}}/>
            <Text style={{color: '#a297a6', fontSize: 14}}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{flex: 1, alignItems: 'center'}}>
          <TouchableOpacity onPress={GoToProfile}>
            <Icon name="person" size={25} color="#b449de" style={{textAlign:'center'}}/>
            <Text style={{color: '#b449de', fontSize: 14}}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height: 85,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default NavigationBar;
