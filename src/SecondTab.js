'use strict';

var React = require('react');
var ReactNative = require('react-native');
var GridView = require('react-native-grid-view');
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


class SecondTab extends BaseComponent {




  componentDidMount() {
    this.fetchData();
  }


  fetchData() {
    fetch(API.getMedias())
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        var posts = responseData;
        this.setState({


          datas: posts,
          loaded: true,
        });
      })
      .done();
  }







renderItem(item) {
   console.log(item.source_url);
   return <Image style={{width: 120, height: 90}} key={item.id} source={{uri: item.source_url}} />
 }


  render() {

    if (!this.state.loaded) {
      return this.renderLoadingView();
    }



     return (

  <View style={styles.container}>
       <GridView
        items={this.state.datas}
        itemsPerRow={3}
        renderItem={this.renderItem}
        style={styles.listView}
      />

  </View>


     );
   }




}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop:45,



  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },


});


module.exports = SecondTab;
