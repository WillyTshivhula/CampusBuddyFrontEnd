import React,{useState} from 'react'
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native'


const ConfirmEmailScreen = () => {
  const [code, setCode]= useState('');


  const navigation =useNavigation()


  const onConfirmPressed= () => { 
    console.warn("you confirmed")
    navigation.navigate('Home')
  }

  const onSignInPressed = () => { 
    console.warn("Signin")
    navigation.navigate('SignIn')
  }

  const onResendressed=()=>{
    console.warn("resent")
  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.root}>
 
        <Text style={styles.title}>Confirm your email</Text>
         <CustomInput 
            placeholder="Enter Code found in your emails" 
            value={code} 
            setValue={setCode}/>



           <CustomButton text="Confirm" onPress={onConfirmPressed}/>



          <CustomButton text="Resend Code" onPress={onResendressed} type="SECONDARY"/>
          <CustomButton text="Back to signin" onPress={onSignInPressed} type="TERTIARY"/>
     </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  
  },

   title: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#051C60',
     margin: 10,
   },
   text:{
    color : 'gray',
    marginVertical:10,
  
   },
   link:{
     color: '#FDB075'
   }
   

});

export default ConfirmEmailScreen