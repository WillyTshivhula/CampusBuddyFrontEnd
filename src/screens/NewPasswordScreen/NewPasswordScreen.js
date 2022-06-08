import React,{useState} from 'react'
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native'


const NewPasswordScreen = () => {
  const [code, setCode]= useState('');
  const [newPassword, setNewPassword]= useState('');
  const navigation =useNavigation()


  const onSubmitPressed= () => { 
    console.warn("Home")
    navigation.navigate('Home')
  }

  const onSignInPressed = () => { 
    console.warn("Signin")
    navigation.navigate('SignIn')
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.root}>
 
        <Text style={styles.title}>New Password</Text>
         <CustomInput 
            placeholder="code" 
            value={code} 
            setValue={setCode}/>

        <CustomInput 
            placeholder="Enter New Password" 
            value={newPassword} 
            setValue={setNewPassword}/>

          <CustomButton text="Submit" onPress={onSubmitPressed}/>

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

export default NewPasswordScreen