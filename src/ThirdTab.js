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


var ItemLine = require('./ItemLine.js');

class ThirdTab extends BaseComponent {





  render() {



     return (
<View style={styles.container}>
  <View style={styles.container1}>
        <ItemLine/>
        <ItemLine/>
        <ItemLine/>
      </View>

      <View style={styles.container2}>
            <ItemLine/>
            <ItemLine/>

          </View>


          </View>


     );
   }




}

var styles = StyleSheet.create({

  container: {
    

    marginTop:45,



  },
  container1: {






  },
  container2: {


    marginTop:45,



  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },


});


module.exports = ThirdTab;
