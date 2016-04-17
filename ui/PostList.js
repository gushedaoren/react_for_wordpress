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
  NavigatorIOS,
} from 'react-native';
var PostDetail = require('./PostDetail.js');
var REQUEST_URL = 'http://nixuchen.com/wp-json/wp/v2/posts';


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }



  fetchData() {
    fetch(REQUEST_URL)
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

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
           加载中...
        </Text>
      </View>
    );
  }

  _pressRow(){
    console.log('pressRow');
    this.props.navigator.push({
        title: 'PostDetail',
        component: PostDetail
    })
  }

  renderPost(post) {
    var title=post.title.rendered;
    var time=post.date;
    return (
       <TouchableHighlight onPress={() => this._pressRow()}>
      <View style={styles.container}>

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
module.exports = PostList;
