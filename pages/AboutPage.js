import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';


import Icon from 'react-native-vector-icons/Entypo';
import SocialIcon from 'react-native-vector-icons/AntDesign';

const locationIcon = (<Icon name="location-pin" size={30} color="purple" />)
const linkedInIcon = (<SocialIcon name="linkedin-square" size={30} color="purple" />)
const instagramIcon = (<SocialIcon name="instagram" size={30} color="purple" />)
const facebookIcon = (<SocialIcon name="facebook-square" size={30} color="purple" />)

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
            data={[
              {key: `Book a Consultation`},
              {key: 'Availability'},
              {key: 'FAQ'},
              {key: 'Useful Links'}
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
      backgroundColor: 'orange'
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
  }
  });
  

  export default AboutMe;