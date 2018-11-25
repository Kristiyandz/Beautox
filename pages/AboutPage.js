import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, FlatList} from 'react-native';
import { bookIcon, calendarIcon, questionIcon, externalLinkIcon } from '../icons/AboutPageIcons.js';
import LinearGradient from 'react-native-linear-gradient';



class AboutMe extends Component {
    static navigationOptions = {
      title: "About Me",
      headerStyle: { backgroundColor: '#712084'}
    }
    render() {
      return (
        <LinearGradient colors={['#712084', '#4050B2', '#0073CC', '#0091D3', '#00ABC9']} style={styles.container}>
          <View style={styles.container}>
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
                  {key: 'Book a free apointment', page:'Book', icon: bookIcon},
                  {key: 'Availability', page:'Availability', icon:calendarIcon},
                  {key: 'FAQ', page:'Faq', icon: questionIcon},
                  {key: 'Useful Links', page: 'Links', icon: externalLinkIcon},
                ]}
                onPress={() => this.props.navigation.navigate('Book')}
                renderItem={({item}) => {
                    return (
                      <TouchableHighlight onPress={() => this.props.navigation.navigate(`${item.page}`)}>
                        <Text >{item.icon}{item.key}</Text>
                      </TouchableHighlight>
                    )
                }}
              />
            </View>
          </View>
        </LinearGradient>

      );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    topBox: {
      flex:3,
      backgroundColor: 'transparent',
      justifyContent:'center',
      alignItems: 'center'
    },
    middleBox: {
      flex:1,
      backgroundColor: 'transparent'
    },
    bottomBox: {
      flex:4,
      backgroundColor: 'transparent',
      padding: 20
      
    },
    circle: {
      width: 190,
      height: 190,
      borderRadius: 190/2,
      backgroundColor: 'green',
      position: 'absolute'
  },
    circleOuter: {
      width: 220,
      height: 220,
      borderRadius: 220/2,
      backgroundColor: '#712084'
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