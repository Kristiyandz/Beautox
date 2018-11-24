import React ,{ Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput } from 'react-native-paper';

class BookingPage extends Component {
    state =  {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: ''
    }
    static navigationOptions = {
        title: 'Book'
    }
    render(){
        return(
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <View style={styles.innerView}>
                    <Text>This is the booking page</Text>
                    <TextInput
                        style={styles.input}
                        label='First Name'
                        mode="flat"
                        placeholder="Enter first name..."
                        value={this.state.text}
                        onChangeText={firstName => this.setState({ firstName })}
                    />
                    <TextInput
                        style={styles.input}
                        label='Last Name'
                        mode="flat"
                        placeholder="Enter last name..."
                        value={this.state.text}
                        onChangeText={lastName => this.setState({ lastName })}
                    />
                    <TextInput
                        style={styles.input}
                        label='Phone number'
                        mode="flat"
                        placeholder="Enter phone number..."
                        value={this.state.text}
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                    />
                    <TextInput
                        style={styles.input}
                        label='Email'
                        mode="flat"
                        placeholder="Enter email..."
                        value={this.state.text}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        label='Address'
                        mode="flat"
                        placeholder="Enter address..."
                        value={this.state.text}
                        onChangeText={address => this.setState({ address })}
                    />
                </View>
                
            </LinearGradient>
        );
    };
};

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    innerView: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    input: {
        backgroundColor: 'transparent',
        width: width * .8,
        marginTop: 20
    }
  });

  export default BookingPage;