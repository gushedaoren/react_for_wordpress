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
        <ItemLine title="朋友圈" imgSource={require('../imgs/more_circlefriends.png')}/>
        <ItemLine title="扫一扫" imgSource={require('../imgs/more_chat.png')}/>
        <ItemLine title="摇一摇" imgSource={require('../imgs/more_icon_qq.png')}/>
      </View>

      <View style={styles.container2}>
            <ItemLine title="附近的人" imgSource={require('../imgs/more_icon_zhifubao.png')}/>
            <ItemLine title="关于" imgSource={require('../imgs/more_weimicircle.png')}/>

          </View>


          </View>


     );
   }




}

var styles = StyleSheet.create({

  container: {


    marginTop:64,



  },
  container1: {






  },
  container2: {


    marginTop:45,
    borderTopWidth: 1,
    borderColor: '#ccc',


  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },


});


module.exports = ThirdTab;
