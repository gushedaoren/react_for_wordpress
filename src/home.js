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

} = ReactNative;
import {Actions, Scene, Router} from 'react-native-router-flux';
var titleConfig = {
  title: '首页',
};

const scenes = Actions.create(
            <Scene key="root" >
                <Scene key="PostList" component={PostList} title="文章列表"/>
                   <Scene key="PostDetail" component={PostDetail} title="文章内容"/>


            </Scene>
);
class Home extends Component {


  render() {
          return <Router scenes={scenes}/>
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
