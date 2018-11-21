import React , { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class BookingConfirmPage extends Component {
    render(){
        return(
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text>This is the booking  conformation page</Text>
            </LinearGradient>
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

  export default BookingConfirmPage;

  // not yet routed