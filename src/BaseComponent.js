'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
  BackAndroid,

} = ReactNative;

import {Actions, Scene, Router} from 'react-native-router-flux';
class BaseComponent extends Component {

  constructor(props) {
     super(props);
     this.state = {

       loaded: false,
     };
   }
  navigatorPop(){
   Actions.pop();
   return true;
  }
 componentDidMount(){
   BackAndroid.addEventListener('hardwareBackPress', this.navigatorPop)
}

  renderLoadingView() {
    return (
      <View style={styles.loading_container}>
        <Text>
           加载中...
        </Text>
      </View>
    );
  }


}


var styles = StyleSheet.create({
  loading_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },


});

module.exports = BaseComponent;
