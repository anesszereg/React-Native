import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Questions from '../../questions.json'

const Question = ( {text1}) => {
  return (
    <View>
      <Text style={styles.question}>
          { text1}</Text>

    </View>
  )
}

export default Question

const styles = StyleSheet.create({
    question:{
        fontSize: 24,
        // borderBottomWidth: 1,
        borderBottomColor:'gray',
        padding: 40,
        fontWeight:'bold',
    },
    // question:
})