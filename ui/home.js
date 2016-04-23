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
  NavigatorIOS,
} = ReactNative;


class Home extends Component {

  renderScene(router, navigator){
      var Component = null;
      switch(router.name){
        case "PostList":
          Component = PostList;
          break;
        case "PostDetail":
          Component = PostDetail;
          break;
        default: //default view
         Component = PostList;

      }

      return <Component  {...router.params} navigator={navigator} />
  }

  render() {


     return (


       <Navigator
     initialRoute={{name: 'Home', index: 0}}
     renderScene={this.renderScene}
  



  />



     );
   }


}

var styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },


});


module.exports = Home;
