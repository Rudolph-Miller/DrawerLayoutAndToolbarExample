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
        <DrawerLayout />
        <Toolbar />
      </View>
    );
  }
});

var DrawerLayout = React.createClass({
  render: function() {
    return (
      <Text>DrawerLayout</Text>
    );
  }
});

var Toolbar = React.createClass({
  render: function() {
    return (
      <Text>Toolbar</Text>
    );
  }
})

AppRegistry.registerComponent('DrawerLayoutAndToolbarExample', () => DrawerLayoutAndToolbarExample);
