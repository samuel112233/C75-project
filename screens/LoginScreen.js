import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Alert, TextInput} from 'react-native';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state={
            email:' ',
            password:' '
        }
    }
    render(){
        return(
            <View style = {StyleSheet.container}>
                <TextInput 
                style = {styles.textInput}
                placeholder = {'Enter Email Id'}
                onChangeText={(text)=>{
                    this.setState({
                        email: text 
                    })
                }}
                value = {this.state.email}
                />
                <TextInput 
                style = {styles.textInput}
                placeholder = {'Enter Password'}
                secureTextEntry = {true}
                onChangeText={(text)=>{
                    this.setState({
                        password: text 
                    })
                }}
                value = {this.state.password}
                />
                <View>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        var email = this.state.email
                        var password = this.state.password
                        firebase.auth().signInWithEmailAndPassword(email,password)
                        .then(()=>{
                                this.props.navigation.navigate('WriteStory')
                        })
                        .catch(error=>{
                          var errorCode = error.code
                          var errorMessage = error.message
                          return Alert.alert("Sign in correctly")
                          
                        })
                    }}
                    >

                    </TouchableOpacity>
                </View>
                  
            </View>
        )
    }
}
