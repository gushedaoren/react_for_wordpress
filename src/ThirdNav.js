'use strict';

var React = require('react');
var ReactNative = require('react-native');
var ThirdTab = require('./ThirdTab.js');
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
                <Scene key="ThirdTab" component={ThirdTab} title="更多"/>



            </Scene>
);
class ThirdNav extends Component {


  render() {
          return <Router scenes={scenes}/>
      }

}



var styles = StyleSheet.create({
  container: {
    flex:1,
  },

});


module.exports = ThirdNav;
