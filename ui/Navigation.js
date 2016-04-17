'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PostList = require('./PostList.js');

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
} = ReactNative;

class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute=\{\{id: 'Home'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} title="Home"/>);
      case 'PostDetail':
        return (<PostDetail navigator={navigator} title="PostDetail" />);
    }
  }
}
module.exports = Navigation;
