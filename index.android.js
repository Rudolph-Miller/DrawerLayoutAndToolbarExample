/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;

var DrawerLayoutAndToolbarExample = React.createClass({
  render: function() {
    return (
      <View>
        <Text>sample</Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('DrawerLayoutAndToolbarExample', () => DrawerLayoutAndToolbarExample);
