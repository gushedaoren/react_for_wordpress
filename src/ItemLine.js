'use strict';

var React = require('react');
var ReactNative = require('react-native');

var {
  StyleSheet,

  Component,
  Text,
  Image,
  View,


} = ReactNative;


class ItemLine extends Component {

  render()  {

    return (
      <View style={styles.Item}>

          <Image style={styles.icon} source={require('../imgs/icon.png')}></Image>

          <Text style={styles.item_text}>关于</Text>



      </View>
    );
  }


}


var styles = StyleSheet.create({
  Item: {


    
    flexDirection: 'row',
    height:40,

    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',




  },

  icon: {

    width: 30,
    height: 20,
  },

  item_text: {
    marginLeft:10,
    fontSize:16,




  },



});

module.exports = ItemLine;
