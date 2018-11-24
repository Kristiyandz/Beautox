import React ,{ Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput } from 'react-native-paper';

class BookingPage extends Component {
    state =  {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        message: ''
    }
    static navigationOptions = {
        title: 'Book'
    }
    render(){
        return(
           
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <ScrollView >
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
                        <View style={styles.textAreaContainer}>
                            <TextInput
                                style={styles.textArea}
                                multiline={true}
                                numberOfLines={4}
                                placeholder="Enter message..."
                                onChangeText={message => this.setState({ message })}
                                value={this.state.message}
                            />
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableHighlight 
                                style={styles.submitButton}
                                // onPress={()=> this.submitDetails()}
                                >
                                <Text>Submit</Text>
                            </TouchableHighlight>
                        </View>
                        
                    </View>
                </ScrollView>
            </LinearGradient>
            
        );
    };
    submitDetails() {

        const { firstName, lastName, phoneNumber, email, address, message} = this.state;
        const payload = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            address: address,
            message: message
        };
        const dataToSend = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'applciation/json',
            },
            body: JSON.stringify(payload)
        };

        fetch('some ednpoint', dataToSend)
            .then((answer) => answer.json())
            .then((data) => {
                if(data){
                    // open the confirm page
                } else {
                    // display error message
                };
            });
            /*
                The answer from the POST request will be used
                to see if the request was successfull or not.
            */
    }
};

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
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
    },
    textAreaContainer: {
        marginTop: 50
    },
    textArea: {
        height: 150,
        justifyContent: 'center',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    buttonContainer: {
        flex: 1,
        // borderWidth: 1,
        // borderColor: 'red',
        alignItems: 'center',
        marginTop: width * .05,
        height: 30
    },
    submitButton: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'white',
        borderWidth: 1,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: width * .4,
        height: 30,
        justifyContent: 'center'
    }
  });

  export default BookingPage;