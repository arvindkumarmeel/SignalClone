import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {Location, SwiggyLogo} from '../assets/imageAssets';
import {useNavigation} from '@react-navigation/native';
import {DRAWER_NAVIGATION} from '../navigation/routes';
import {setTypename} from '../slices/counterSlice';
import {useDispatch} from 'react-redux';

const HomeScreen = () => {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 1,
      first: 'Ahmedabad  ',
    },
    {
      id: 2,
      first: 'Banglore  ',
    },
    {
      id: 3,
      first: 'Chennai  ',
    },
    {
      id: 4,
      first: 'Delhi  ',
    },
    {
      id: 5,
      first: 'Gurgaon  ',
    },
  ];
  let dispatch = useDispatch();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image style={styles.logostyle} source={SwiggyLogo} />
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => {
            navigation.openDrawer();

            dispatch(setTypename('login'));
          }}>
          <Text style={styles.logintext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupview}
          onPress={() => {
            navigation.openDrawer();

            dispatch(setTypename('signup'));
          }}>
          <Text style={styles.signuptext}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Text style={styles.textstyle}>
          Order food from favourite restaurants near you.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TextInput
            placeholder="Enter your delivery location"
            style={styles.textinputstyle}></TextInput>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              backgroundColor: 'white',
              top: 15,
              left: 100,
              width: '50%',
            }}>
            <Image style={{width: 20, height: 20}} source={Location} />
            <Text>Locate Me</Text>
          </View>
          <TouchableOpacity style={styles.findview}>
            <Text style={styles.textstyle1}>FIND FOOD</Text>
          </TouchableOpacity>
        </View>
        <Text style={{marginTop: 30, fontSize: 20, color: '#d3d3d3'}}>
          POPULAR CITIES IN INDIA
        </Text>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          {DATA.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.textstyle2(index)}>{item.first}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logostyle: {
    width: 150,
    height: 45,
  },
  header: {
    marginTop: 40,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logintext: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  },
  signuptext: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
  },
  signupview: {
    backgroundColor: 'black',
    width: 100,
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: 22,
    color: '#706e6e',
    marginTop: 50,
  },
  findview: {
    backgroundColor: '#fc8019',
    height: 50,
    width: 138,
    justifyContent: 'center',
  },
  textstyle1: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
  textinputstyle: {
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },

  textstyle2: index => ({
    color: index % 2 === 0 ? '#5e5757' : 'grey',
  }),
});
