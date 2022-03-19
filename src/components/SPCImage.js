import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SSCImage = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../../assets/splash.png')}/>
    </View>
  )
}

export default SSCImage

const styles = StyleSheet.create({
  logo:{
    display: 'flex',
    // alignItems: 'center',
    // textAlign:'center',
    // justifyContent: 'center',
    alignItems: 'center',
    height:200,
    width:200,
    // marginStart:80,
    // marginTop:100,
    marginBottom:20

  }
})