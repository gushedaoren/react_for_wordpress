

/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @flow
 */
'use strict';

var React = require('react');
var ReactNative = require('react-native');

var HomeNav = require('./homenav.ios');

var SecondTab = require('./SecondTab.js');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;


var MyTabbar = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'MyTabbar',

  getInitialState: function() {
    return {
      selectedTab: 'firstTab',
      notifCount: 0,
      presses: 0,
    };
  },

_renderContent: function(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="首页"
          icon={require('../imgs/flux.png')}
          selected={this.state.selectedTab === 'firstTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'firstTab',
            });
          }}>

          <HomeNav/>

        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="相册"
          icon={require('../imgs/flux.png')}
        
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'secondTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'secondTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          <SecondTab/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../imgs/flux.png')}
          title="更多"
          selected={this.state.selectedTab === 'thirdTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'thirdTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = MyTabbar;
