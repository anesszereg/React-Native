import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pages from '../components/Pages'
import Question from '../components/Question'
import Option from '../components/Option'
import Questions from '../../questions.json'
import { useNavigation } from '@react-navigation/native'

const QuizScreen = ({route,navigation}) => {
  const {index}=route.params
  // const navigation= useNavigation()
  return (
    <View >
      <Pages/>
      <Question text1={Questions.questions[0].question}/>
     
         {Questions.questions[index].answers.map(
            ( answer,i)=>  <Option
                        key={i}
                        text={answer}
                        navigation = {navigation}
                        qnIndex={index}
                        />
                    
                )
            }
        
      
      {/* <Option/>
      <Option/> */}
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({

})