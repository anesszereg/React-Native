import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
// import { Colors } from 'react-native/Libraries/NewAppScreen'




const Pages = () => {

  const [Counter, setCounter] = useState('1')
  return (
    <View>
      <Text style={styles.pages}> {Counter}/10</Text>
    </View>
  )
}

export default Pages

const styles = StyleSheet.create({
    pages: {
        fontSize: 24,
        // backgroundColor:'#000',
        color:'red',
        padding: 10
    }
})