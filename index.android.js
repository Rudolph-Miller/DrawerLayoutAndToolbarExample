'use strict';

var React = require('react-native');
var {
  AppRegistry,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  ToolbarAndroid,
  TouchableHighlight,
  View
} = React;

var DrawerLayoutAndToolbarExample = React.createClass({
  getInitialState: function() {
    return {
      selected: 0
    };
  },

  texts: [
    'Main',
    'Content1',
    'Content2'
  ],

  _onPressDrawer: function(index) {
    this.setState({
      selected: index
    });
  },

  render: function() {
    var mainText = this.texts[this.state.selected];

    return (
      <DrawerLayout 
        selected={this.state.selected}
        texts={this.texts}
        onPress={this._onPressDrawer}>
        <Toolbar />
        <Text>{mainText}</Text>
      </DrawerLayout>
    );
  }
});

var DrawerLayout = React.createClass({
  propTypes: {
    selected: React.PropTypes.number.isRequired,
    texts: React.PropTypes.array.isRequired,
    onPress: React.PropTypes.func.isRequired
  },

  renderText: function(text, index) {
    var containerStyle = this.props.selected === index ?
      styles.selectedDrawerLayoutTextContainer : styles.drawerLayoutTextContainer;
    return (
      <TouchableHighlight onPress={function() { this.props.onPress(index); }.bind(this)}>
        <View style={containerStyle}>
          <Text style={styles.drawerLayoutText} >
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  },

  _renderNavigationView: function() {
    var textComponents = this.props.texts.map(function(text, index) {
      return this.renderText(text, index);
    }.bind(this));

    return (
      <View style={styles.drawerLayout} >
        {textComponents}
      </View>
    );
  },

  render: function() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this._renderNavigationView} >
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }
});

var Toolbar = React.createClass({
  _onIconClicked: function() {
  },

  render: function() {
    return (
      <ToolbarAndroid
        title="DrawerLayoutAndToolbarSample"
        navIcon={require('image!ic_drawer')}
        onIconClicked={this._onIconClicked}
        style={styles.toolbar}
      />
    );
  }
})

var styles = StyleSheet.create({
  drawerLayout: {
    backgroundColor: '#ffffff',
    height: 150
  },

  drawerLayoutTextContainer: {
    height: 50
  },

  selectedDrawerLayoutTextContainer: {
    backgroundColor: '#cccccc',
    height: 50
  },

  drawerLayoutText: {
    color: '#000000',
    textAlign: 'center'
  },

  toolbar: {
    backgroundColor: '#05A5D1',
    height: 56
  }
});
AppRegistry.registerComponent('DrawerLayoutAndToolbarExample', () => DrawerLayoutAndToolbarExample);
