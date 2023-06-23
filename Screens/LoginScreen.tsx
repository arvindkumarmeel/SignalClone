import { StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import React,{useState}from 'react'

const LoginScreen = ({navigation}) => {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    console.log(email);

    const Login=()=>{
        
    }
    
    const Register=()=>{ 
        navigation.navigate("RegisterScreen")
    }
  return (
    <KeyboardAvoidingView style={{alignItems:"center",flex:1,justifyContent:"center",backgroundColor:"white"}}>
      <Image style={{height:150,width:150,alignSelf:"center",borderRadius:10}} source={require('../assets/image/signalLogo1.png')}/>
      <View style={{marginTop:20,width:"100%"}}>
      <TextInput value={email} onChangeText={setEmail} style={{borderBottomWidth:1,borderBottomColor:"gray",marginHorizontal:30,}} placeholder='Email'/>
      <TextInput value={password} onChangeText={setPassword} style={{borderBottomWidth:1,borderBottomColor:"gray",marginHorizontal:30}} placeholder='Password'/>
      </View>
      <View style={{width:"100%",marginTop:20}}>
      <TouchableOpacity onPress={Login} style={{height:30,backgroundColor:"#00bfff",marginHorizontal:80}}>
      <Text style={{textAlign:"center",textAlignVertical:"center",flex:1,color:"white"}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Register} style={{height:30,borderWidth:1,borderColor:"gray",marginHorizontal:80,marginTop:20 }}>
        <Text style={{textAlign:"center",textAlignVertical:"center",flex:1}}>Register</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})