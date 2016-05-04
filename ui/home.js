'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PostList = require('./PostList.js');
var PostDetail = require('./PostDetail.js');
var NavigationBar = require('react-native-navbar');

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

var titleConfig = {
  title: '首页',
};
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

    //
    //    <Navigator
    //  initialRoute={{name: 'Home', index: 0}}
    //  renderScene={this.renderScene}
    //
    //   />

 <View style={{ flex: 1, }}>
    <NavigationBar
        title={titleConfig}
      />

      <PostList/>

  </View>


     );
   }


}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },


});


module.exports = Home;
