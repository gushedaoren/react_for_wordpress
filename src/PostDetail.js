'use strict';

var React = require('react');
var ReactNative = require('react-native');
var BaseComponent = require('./BaseComponent.js');

var {
  StyleSheet,
  ListView,
  Component,
  Text,
  Image,
  View,
  WebView,
} = ReactNative;

var API=require('./Api.js');



var post;

var WEBVIEW_REF = 'webview';

const HTML = `
<!DOCTYPE html>\n
<html>
  <head>
    <title>Hello Static World</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=320, user-scalable=no">
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font: 62.5% arial, sans-serif;
        background: #ccc;
      }
      h1 {
        padding: 45px;
        margin: 0;
        text-align: center;
        color: #33f;
      }
    </style>
  </head>
  <body>
    <h1>Hello Static World</h1>
  </body>
</html>
`;
class PostDetail extends BaseComponent {


 constructor(props) {
    super(props);
    this.state = {
      post: post,

    };
  }


  componentDidMount() {
    this.fetchData(this.props.postid);
  }


  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (

      <WebView
          style={styles.webView}
          source={{
             html:this.state.post.content.rendered
                   }}
          scalesPageToFit={true}
        />


    );
  }






  fetchData(postid) {
    fetch(API.getPostDetail(postid))
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        post = responseData;
        this.setState({


          post: post,
          loaded: true,
        });


      })
      .done();
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },


  webView:{
    marginTop: 45,

    flex: 1,
    height:500,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  }

});
module.exports = PostDetail;
