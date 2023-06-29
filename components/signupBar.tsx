import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Roll} from '../assets/imageAssets';

const SignupBar = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <View>
          <Text style={styles.loginstyle}>Sign up</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>or </Text>
            <TouchableOpacity>
              <Text style={styles.textstyle}>create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.imagestyle} source={Roll} />
      </View>
      <TextInput placeholder="Phone number" style={styles.textinputstyle} />
      <TextInput placeholder="Name" style={styles.textinputstyle1} />
      <TextInput placeholder="Email" style={styles.textinputstyle1} />
      <TextInput placeholder="Password" style={styles.textinputstyle1} />
      <Text style={{marginTop:20}}>Have a referral code?</Text>
      <TouchableOpacity style={styles.signupview}>
        <Text>Continue</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20}}>
        By clicking on Login,I accept the Terms & Conditions & Privacy Policy
      </Text>
    </View>
  );
};

export default SignupBar;

const styles = StyleSheet.create({
  loginstyle: {
    fontSize: 30,
    color: 'black',
  },
  textstyle: {
    color: '#fc8019',
  },
  imagestyle: {
    width: 100,
    height: 100,
  },
  textinputstyle: {
    height: 80,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginTop: 20,
  },
  textinputstyle1: {
    height: 80,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  signupview: {
    backgroundColor: '#fc8019',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
