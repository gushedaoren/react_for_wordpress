/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';



var Tabbar = require('./src/Tabbar.js');


class react_for_wordpress extends Component {

  constructor(props) {
    super(props);
    this.state = {

        selectedTab: 'firstTab',
    };
  }


  render() {
    return (
        <Tabbar/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigator_style: {
    bottom:0,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_for_wordpress', () => react_for_wordpress);
