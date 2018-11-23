import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { bookIcon, calendarIcon, questionIcon, externalLinkIcon } from '../icons/AboutPageIcons.js';


class AboutMe extends Component {
    static navigationOptions = {
      title: "About Me",
    }
    render() {
      return (
        <View style={styles.container}>
          {/* <Text>Home Page</Text>
          <Button onPress={() => this.props.navigation.goBack()} title="<< Back" /> */}
          <View style={styles.topBox}>
          <View style={styles.circleOuter} />
            <View style={styles.circle} />
            
          </View>
          <View style={styles.middleBox}>

          </View>
          <View style={styles.bottomBox}>
            <FlatList
            contentContainerStyle={styles.listItem}
            data={[
              {key: 'Book a free apointment', icon: bookIcon},
              {key: 'Availability', icon:calendarIcon},
              {key: 'FAQ', icon: questionIcon},
              {key: 'Useful Links', icon: externalLinkIcon},
            ]}
            renderItem={({item}) => <Text style={styles.text}>{item.icon}{item.key}</Text>}
          />
          </View>
        </View>
      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topBox: {
      flex:2,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems: 'center'
    },
    middleBox: {
      flex:1,
      backgroundColor: 'yellow'
    },
    bottomBox: {
      flex:4,
      backgroundColor: 'orange',
      padding: 20
      
    },
    circle: {
      width: 160,
      height: 160,
      borderRadius: 160/2,
      backgroundColor: 'green',
      position: 'absolute'
  },
    circleOuter: {
      width: 180,
      height: 180,
      borderRadius: 180/2,
      backgroundColor: 'black'
  },
    listItem: {
      flex:1,
      justifyContent: 'center' 
    },
    text: {
      fontSize: 20,
    }
  
  });
  

  export default AboutMe;