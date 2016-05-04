'use strict';

var React = require('react');
var ReactNative = require('react-native');

var BaseComponent = require('./BaseComponent.js');

var API=require('./Api.js');
var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,

} = ReactNative;


class ThirdTab extends BaseComponent {





  render() {



     return (

  <View style={styles.container}>
      <Text>test</Text>

      </View>


     );
   }




}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop:45,



  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },


});


module.exports = ThirdTab;
