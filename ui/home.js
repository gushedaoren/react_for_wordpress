'use strict';

var React = require('react');
var ReactNative = require('react-native');
var PostList = require('./PostList.js');

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
} = ReactNative;


class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = Home;
