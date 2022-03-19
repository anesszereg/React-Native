import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SPCImage from '../components/SPCImage'
import SPCText from '../components/SPCText'

const SplashScreen = () => {
  return (
    <View style={styles.splash}>
        <SPCImage/>
        <SPCText/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    splash: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'#000'
    }
})