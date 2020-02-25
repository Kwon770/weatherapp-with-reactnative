import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "062aa5e38df65a32830c83c7940b0e0f";

// View = div / Text = span, h1, h2, p
export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading: false, temp: data.main.temp});
    console.log(data);
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords : {latitude , longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    }
    catch (error) {
      Alert.alert("Can't find you", "So sad")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)}/>;
  }
}

// Web default flex-diretion : row
// ReactNative default flex-diretion : column

// flex : 화면상에서 차지하는 비율
// 1개 일경우 => 화면 꽉채울 / 2개 일경우 flex: 1 - flex:1 => 1:1 로 절반씩 채움
