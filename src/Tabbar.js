import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,

} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
var Home = require('./home.js');
var SecondNav = require('./SecondNav.js');
var ThirdNav = require('./ThirdNav.js');
class Tabbar extends Component {

  constructor(props) {
    super(props);
    this.state = {

        selectedTab: 'firstTab',
    };
  }


  render() {
    return (
      <TabNavigator tabBarStyle={{ bottom:0 }} >
  <TabNavigator.Item
    selected={this.state.selectedTab === 'firstTab'}
    title="首页"
    renderIcon={() => <Image source={require('../imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('../imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'firstTab' })}>
    <Home/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'secondTab'}
    title="相册"
    renderIcon={() => <Image source={require('../imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('../imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'secondTab' })}>
    <SecondNav/>
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'thirdTab'}
    title="更多"
    renderIcon={() => <Image source={require('../imgs/flux.png')} />}
    renderSelectedIcon={() => <Image source={require('../imgs/flux.png')} />}

    onPress={() => this.setState({ selectedTab: 'thirdTab' })}>
    <ThirdNav/>
  </TabNavigator.Item>
</TabNavigator>
    );
  }
}

module.exports = Tabbar;
