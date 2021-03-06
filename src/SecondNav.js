'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SecondTab = require('./SecondTab.js');
import {Actions, Scene, Router} from 'react-native-router-flux';

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,

} = ReactNative;
const scenes = Actions.create(
            <Scene key="root" >
                <Scene key="SecondTab" component={SecondTab} title="相册"/>



            </Scene>
);
class SecondNav extends Component {


  render() {
          return <Router scenes={scenes}/>
      }

}



var styles = StyleSheet.create({
  container: {
    flex:1,
  },

});


module.exports = SecondNav;
