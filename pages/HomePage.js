import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {locationIcon, linkedInIcon, instagramIcon, facebookIcon} from '../icons/HomePageIcons.js';




class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: { backgroundColor: 'purple' }
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Home Page</Text>
      //   <Button onPress={() => this.props.navigation.navigate('About')} title="All about me" />
      // </View>
      <LinearGradient colors={['#081e4b', '#1f2d71', '#3e3a97', '#6445bc', '#8f4ddf']} style={styles.container}>
        <View style={styles.boxOne}>

        </View>
        <View style={styles.boxTwo}>
          <View style={styles.boxTwoInnerLeft}>
            
            <Text>{locationIcon}Hattersley</Text>
          </View>
          <View style={styles.boxTwoInnerRight}>
            {linkedInIcon}{instagramIcon}{facebookIcon}
          </View>
        </View>
        <View style={styles.boxThree}>
          <View style={styles.buttonBox}>
              <Button onPress={() => this.props.navigation.navigate('About')} title="All about me" />
            </View>
        </View>
      </LinearGradient>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    boxOne: {
      flex: 5,
      backgroundColor: 'transparent',
      justifyContent: 'center'
    },
    boxTwo: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      justifyContent: 'center'
    },
    boxThree: {
      flex: 3,
      backgroundColor: 'transparent',
      justifyContent: 'center'
    },
    boxTwoInnerLeft: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      // justifyContent: '',
      flexDirection:'row'
    },
    boxTwoInnerRight: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    buttonBox: {
      justifyContent: 'center'
    }
  });
  
export default Home;