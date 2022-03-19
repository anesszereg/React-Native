import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Questions from "../../questions.json";
import { useNavigation } from "@react-navigation/native";

const Option = ({ text, qnIndex, optionIdx ,navigation }) => {
  // const navigation = useNavigation();

  let correctAnswer = Questions.questions[0].correctIndex;
  const [prassed, setprassed] = useState(false);
  return (
    <View style={styles.Option}>
      <Pressable
        style={styles.insideOption}
        // style={prassed? styles.prassed : }
        onPress={() => {
          console.log("prassed");
          setprassed(true);
          // optionIdx === correctAnswer? updateScore(1) : updateScore(0)
          if (qnIndex + 1 >= Questions.questions.length) {
            console.log("End of Quiz");
            navigation.navigate("CongrateScreen");
          } else {
            navigation.navigate("QuizScreen", { index: qnIndex + 1 });
          }
        }}
      >
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  insideOption: {
    marginTop: 40,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "#000",
    height: 80,

    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  Option: {
    height: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'#000',
    // height:'100%'
  },
});
