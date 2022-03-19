import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CongrateScreen = () => {
  return (
    <View style={styles.congrateScreen}>
      <Text style={styles.screen}>
          cangrate
      </Text>
    </View>
  )
}

export default CongrateScreen

const styles = StyleSheet.create({
    screen:{
        color:'#7673c0',
        fontSize:20,

    },
    congrateScreen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})