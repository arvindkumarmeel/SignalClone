import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.inputContainer}>
        <View style={{width:"100%"}}>
            <Text style={styles.createAccStyle}>Create a Account</Text>
            <View>
                <TextInput style={styles.FullName} placeholder='Full Name' />
                <TextInput style={styles.FullName} placeholder='Email' />
                <TextInput style={styles.FullName} placeholder='Password' />
                <TextInput style={styles.FullName} placeholder='Profile Picture URL (Optional) ' />

            </View>
            <TouchableOpacity  style={{height:30,marginTop:40,backgroundColor:"#00bfff",marginHorizontal:40 }}>
        <Text style={{textAlign:"center",textAlignVertical:"center",flex:1}}>Register</Text>
      </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    FullName:{
        borderBottomWidth:1,
        borderBottomColor:"gray",
        marginHorizontal:40
    },
    createAccStyle:{
    textAlign:"center",
    fontSize:18,
    fontWeight:"800",
    marginBottom:30
    },
    inputContainer:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        // backgroundColor:"red"
    }
})