import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

// View = div / Text = span, h1, h2, p
export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude , longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
    }
    catch (error) {
      Alert.alert("Can't find you", "So sad")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}

// Web default flex-diretion : row
// ReactNative default flex-diretion : column

// flex : 화면상에서 차지하는 비율
// 1개 일경우 => 화면 꽉채울 / 2개 일경우 flex: 1 - flex:1 => 1:1 로 절반씩 채움
