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
    renderIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_1_normal.png')} />}
    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_1_pressed.png')} />}

    onPress={() => this.setState({ selectedTab: 'firstTab' })}>
    <Home/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'secondTab'}
    title="相册"
    renderIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_2_normal.png')} />}
    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_2_pressed.png')} />}

    onPress={() => this.setState({ selectedTab: 'secondTab' })}>
    <SecondNav/>
  </TabNavigator.Item>

  <TabNavigator.Item
    selected={this.state.selectedTab === 'thirdTab'}
    title="更多"
    renderIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_3_normal.png')} />}
    renderSelectedIcon={() => <Image style={styles.tab_icon} source={require('../imgs/tab_bar_3_pressed.png')} />}

    onPress={() => this.setState({ selectedTab: 'thirdTab' })}>
    <ThirdNav/>
  </TabNavigator.Item>
</TabNavigator>
    );
  }
}

var styles = StyleSheet.create({
  tab_icon: {
    width: 30,
    height: 30,
  },

});


module.exports = Tabbar;
