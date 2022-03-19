import { StyleSheet, Text, View,TextInput, Pressable  } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const SPCText = () => {
    const navigation = useNavigation()
    const [TextVlaue, setTextVlaue] = useState("")

  return (
    <View>
      <Text style={styles.text1}>Welcome to Quiz app</Text>
      <Text style={styles.text1}>
          Enter your name to proceed ...
      </Text>
      <TextInput
      style={styles.textInput}
      value={TextVlaue}
      placeholder="Enter your name"/>
      <Pressable
      style={styles.Pressable}
      onPress={()=>{
         console.log(TextVlaue)
        //  setTextVlaue("")   
         navigation.navigate("QuizScreen")}}
      >
          <Text style={styles.Text2}>
              start
          </Text>
      </Pressable>
    </View>
  )
}

export default SPCText

const styles = StyleSheet.create({
    text1:{
        // flex:1,
        textAlign: 'center',
        fontSize:20,
        marginBottom:20,
    },

    textInput:{
        // textAlign: 'center',
        borderBottomColor: '#7673c0',
        borderBottomWidth: 1,
        fontSize :18,
        // marginLeft :30,
        // marginRight:30,
        padding:10
        
    },
    Pressable:{
        backgroundColor:'#7673c9',
        height:50,
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:20

        // width:100
    },
    // Text2:{
    //     textAlign: 'center',

    // }
    
})