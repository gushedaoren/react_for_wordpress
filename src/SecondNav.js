'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SecondTab = require('./SecondTab.js');


var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
  Navigator,
  NavigatorIOS,
} = ReactNative;


var SecondNav = React.createClass({

  render: function() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          component: SecondTab,
          title: '图片',
          passProps: { myProp: 'foo' },
        }}
      />
    );
  },
});
var styles = StyleSheet.create({
  container: {
    flex:1,


  },



});


module.exports = SecondNav;
