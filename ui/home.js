'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PostList = require('./PostList.js');
var PostDetail = require('./PostDetail.js');

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
  Navigator,
} = ReactNative;


class Home extends Component {

  render() {


     return (
       <PostList/>

  
     );
   }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


});


module.exports = Home;
