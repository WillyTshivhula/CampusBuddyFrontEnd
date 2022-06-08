import React,{useState} from 'react'
import {View,Text,Image,StyleSheet, useWindowDimensions,ScrollView} from 'react-native'
import Logo from '../../../assets/images/Logo_1.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native'



const SigninScreen = () => {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');




  const {height} =useWindowDimensions();
  const navigation =useNavigation()

  const onSignInPressed= () => { 
    console.warn("sign i")
    // This is a test push

    navigation.navigate('Home')
  }

  const onForgotPasswordPressed= () => { 
    console.warn("forgot password")
    navigation.navigate('ForgotPassword')
  }


  const onSignUpPressed = () => { 
    console.warn("Signup")
    navigation.navigate('SignUp')

  }




  return (
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.root}>
 
         <Image source={Logo} style={[styles.logo,{height:height*0.3}]} 
         resizeMode="contain"
         />
         <CustomInput 
            placeholder="Username" 
            value={username} 
            setValue={setUsername}/>

         <CustomInput 
            placeholder="Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />

           <CustomButton text="Sign In" onPress={onSignInPressed}/>

           <CustomButton text="Forgot password" onPress={onForgotPasswordPressed} type="TERTIARY"/>

           <SocialSignInButton/>

          <CustomButton text="Dont have an account create one" onPress={onSignUpPressed} type="TERTIARY"/>
     </View>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  
  },
   logo: {
     width:'70%',
     maxWidth: 300,
     maxHeight:100,
     marginVertical:10,
   },

});

export default SigninScreen