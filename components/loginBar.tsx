import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Roll} from '../assets/imageAssets';
import {useSelector} from 'react-redux';
import SignupBar from './signupBar';

const LoginBar = props => {
  const typename = useSelector((state: RootState) => {
    return state.counter.typename;
  });
  console.log(typename, 'priyanka');
  return (
    <View style={{marginHorizontal: 20}}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Text style={{fontSize: 30, color: '#565353'}}>X</Text>
      </TouchableOpacity>
      {typename === 'login' ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View>
              <Text style={styles.loginstyle}>Login</Text>
              <View style={{flexDirection: 'row',marginTop:20}}>
                <Text>or </Text>
                <TouchableOpacity>
                  <Text style={styles.textstyle}>create an account</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image style={styles.imagestyle} source={Roll} />
          </View>
          <TextInput style={styles.textinputstyle} placeholder="Phone number" />
          <TouchableOpacity style={styles.loginview}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 20}}>
            By clicking on Login,I accept the Terms & Conditions & Privacy
            Policy
          </Text>
        </>
      ) : (
        <>
          <SignupBar />
        </>
      )}
    </View>
  );
};

export default LoginBar;

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
    height: 60,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    marginTop: 20,
  },
  loginview: {
    backgroundColor: '#fc8019',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
