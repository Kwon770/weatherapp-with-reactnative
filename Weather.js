import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

// View = div / Text = span, h1, h2, p
export default function Weather({ temp, condition }) {
  return (
    <View style={styles.container}>
      <Text>{temp}</Text>
    </View>
  );
}

Weather.prototype = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
};

// Web default flex-diretion : row
// ReactNative default flex-diretion : column

// flex : 화면상에서 차지하는 비율
// 1개 일경우 => 화면 꽉채울 / 2개 일경우 flex: 1 - flex:1 => 1:1 로 절반씩 채움
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
