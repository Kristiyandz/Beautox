import React, { Component } from 'react';
import { Image, 
StyleSheet,
 Text, 
 View, 
 TouchableHighlight, 
 TouchableOpacity,
 FlatList,
 Platform } from 'react-native';
import { bookIcon, calendarIcon, questionIcon, externalLinkIcon } from '../icons/AboutPageIcons.js';
import LinearGradient from 'react-native-linear-gradient';



class AboutMe extends Component {

    state = {
      avatarLayout: {
        width: 0,
        height: 0,
        borderRadius: 0,
        backgroundColor: '#712084'
      },
      innerCircleLayout: {
        width: 0,
        height: 0,
        borderRadius: 0,
        backgroundColor: 'green',
        position: 'absolute'
      }
    }

    getAvatarBoxDimensions(layout){
      const { x, y, width, height } = layout;
       this.setState({
         avatarLayout: {
          width: height,
          height: height,
          borderRadius: height / 2,
          backgroundColor: '#712084'
         }
        
      });
    }
    setInnerCircleDimensions(layout){
      const { height } = layout;
      this.setState({
        innerCircleLayout: {
          width: height - 20,
          height: height - 20,
          borderRadius: (height - 20) / 2,
          backgroundColor: 'green',
          position: 'absolute'
        }
      });
    }
    static navigationOptions = {
      title: "About Me",
      headerStyle: { backgroundColor: '#712084'}
    }
    render() {
      if(Platform.OS === 'android'){

      }
      return (
        <LinearGradient colors={['#712084', '#4050B2', '#0073CC', '#0091D3', '#00ABC9']} style={styles.container}>
          <View style={styles.container}>
            <View style={styles.topBox} onLayout={(event)=>this.getAvatarBoxDimensions(event.nativeEvent.layout)}>
            <View style={this.state.avatarLayout} onLayout={(event)=>this.setInnerCircleDimensions(event.nativeEvent.layout)} />
              <View style={this.state.innerCircleLayout} />
              
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
                        <TouchableOpacity 
                          style={styles.buttonsStyle} 
                          onPress={() => this.props.navigation.navigate(`${item.page}`)}
                        >
                          {item.icon}
                        <Text style={styles.mappedTextStyle}>{item.key}</Text>
                      </TouchableOpacity>
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
      alignItems: 'center',
      borderWidth: 1
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
  //   circle: {
  //     width: 160,
  //     height: 160,
  //     borderRadius: 160/2,
  //     backgroundColor: 'green',
  //     position: 'absolute'
  // },
  //   circleOuter: {
  //     width: 180,
  //     height: 180,
  //     borderRadius: 180/2,
  //     backgroundColor: '#712084'
  // },
    listItem: {
      flex:1,
      justifyContent: 'center'
    },
    text: {
      fontSize: 20,
    },
    buttonsStyle:{
      alignItems: 'center',
      flexDirection:'row',
      marginTop: 5, 
    },
    mappedTextStyle: {
      fontSize: 18,
      color: 'black'
    },
  
  });
  

  export default AboutMe;