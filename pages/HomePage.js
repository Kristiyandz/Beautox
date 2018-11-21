import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: { backgroundColor: 'blue' }
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Home Page</Text>
      //   <Button onPress={() => this.props.navigation.navigate('About')} title="All about me" />
      // </View>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
        <Text>
          Sign in with Facebook
        </Text>
        <Button title="About" onPress={() => this.props.navigation.navigate('About')}
        />
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default Home;