import React,{useState} from 'react'
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native'


const SignUpScreen = () => {
  const [username, setUsername]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [passwordRepeat, setPasswordRepeat]= useState('');

  
  const navigation =useNavigation()

  const onRegisterPressed= () => { 
    console.warn("sign in")
    navigation.navigate('ConfirmEmail')
  
    
  }

  const onSignInPressed = () => { 
    console.warn("Signin")
    navigation.navigate('SignIn')
  }

  const onTermsOfUsePressed=()=>{
    console.warn("you pressed onterms")
 
  }
  const onPrivacyPressed=()=>{
    console.warn("you pressed on privacy ")

  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.root}>
 
        <Text style={styles.title}>Create an account</Text>
         <CustomInput 
            placeholder="Name" 
            value={username} 
            setValue={setUsername}/>

         <CustomInput 
            placeholder="Surname" 
            value={email} 
            setValue={setEmail}/>

         <CustomInput 
            placeholder="Username" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

         <CustomInput 
            placeholder="Course" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}/>

          <CustomInput 
            placeholder="Student number" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}/>
          <CustomInput 
            placeholder="Email" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}/>

          <CustomInput 
            placeholder="Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}/>

          <CustomInput 
            placeholder="Renter Password" 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}
            secureTextEntry={true}/>

           <CustomButton text="Register" onPress={onRegisterPressed}/>

           <Text style={styles.text}>
             By registering, you confirm that you accept out 
           <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and
           <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy </Text> </Text>

           {/* <SocialSignInButton/> */}


          <CustomButton text="Have an Account ? Signin" onPress={onSignInPressed} type="TERTIARY"/>
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

export default SignUpScreen