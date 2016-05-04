/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var Home = require('./src/home.js');

var SecondTab = require('./src/SecondTab.js');
class react_for_wordpress extends Component {

  constructor(props) {
    super(props);
    this.state = {

        selectedTab: 'firstTab',
    };
  }


  render() {
    return (
      <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'firstTab'}
    title="首页"
    renderIcon={() => <Image source={require('./imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('./imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'firstTab' })}>
    <Home/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'secondTab'}
    title="相册"
    renderIcon={() => <Image source={require('./imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('./imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'secondTab' })}>
    <SecondTab/>
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'thirdTab'}
    title="更多"
    renderIcon={() => <Image source={require('./imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('./imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'thirdTab' })}>
    <Home/>
  </TabNavigator.Item>
</TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_for_wordpress', () => react_for_wordpress);
