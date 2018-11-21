import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

class AboutMe extends Component {
    static navigationOptions = {
      title: "About Me",
    }
    render() {
      return (
        <View style={styles.container}>
          <Text>Home Page</Text>
          <Button onPress={() => this.props.navigation.goBack()} title="<< Back" />
        </View>
      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  

  export default AboutMe;