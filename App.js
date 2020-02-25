import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";

// View = div / Text = span, h1, h2, p
export default class extends React.Component {
  getLocation = async() => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}

// Web default flex-diretion : row
// ReactNative default flex-diretion : column

// flex : 화면상에서 차지하는 비율
// 1개 일경우 => 화면 꽉채울 / 2개 일경우 flex: 1 - flex:1 => 1:1 로 절반씩 채움
