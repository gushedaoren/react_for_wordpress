'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Home = require('./home.js');


var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,

} = ReactNative;


var HomeNav = React.createClass({

  render: function() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          component: Home,
          title: '文章列表',
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


module.exports = HomeNav;
