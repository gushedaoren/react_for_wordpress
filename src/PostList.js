/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,

} from 'react-native';
var PostDetail = require('./PostDetail.js');
var BaseComponent = require('./BaseComponent.js');

var API=require('./Api.js');


import {Actions} from 'react-native-router-flux';
class PostList extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),

    };
  }

  componentDidMount() {
    this.fetchData();
  }



  fetchData() {
    fetch(API.getPostList())
      .then((response) => response.json())
      .then((responseData) => {
        //console.log(responseData);
        var posts = responseData;
        this.setState({


          dataSource: this.state.dataSource.cloneWithRows(posts),
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View  style={styles.container}>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderPost.bind(this)}
        style={styles.listView}
      />


      </View>
    );
  }



  _pressRow(id){
    console.log('pressRow');
    Actions.PostDetail({postid:id});
  }

  renderPost(post) {
    var title=post.title.rendered;
    var time=post.date;
    var postid=post.id;
    return (
       <TouchableHighlight onPress={() => this._pressRow(postid)}>
      <View style={styles.list_content}>

        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.year}>{time}</Text>

        </View>
      </View>
      </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop:45,



  },

  list_content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',



  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,

    textAlign: 'center',
  },
  year: {
    paddingRight: 8,
    paddingBottom: 5,
    textAlign: 'right',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {


    backgroundColor: '#F5FCFF',
  },
});
module.exports = PostList;
