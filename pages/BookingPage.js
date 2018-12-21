import React, { Component } from 'react';
import { StyleSheet ,Text, View, TouchableHighlight, ScrollView, Dimensions, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput, Checkbox} from 'react-native-paper';
// import { CheckBox } from 'react-native-elements';
import TextArea from './BookingSubComp/TextArea.js';
import Title from './BookingSubComp/Title.js';
import TitleInfoMsg from './BookingSubComp/TitleInfoMsg.js';
import EnterDeialsMsg from './BookingSubComp/EnterDetailsMsg.js';

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
        title: 'Book',
        headerStyle: { backgroundColor: '#AB5EC2'},
    }
    changeHandler = (message) => {
        this.setState({ message });
    }
    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor:'purple'}}>
            <LinearGradient colors={['#985EC2', '#4D73D5', '#0080D3','#0087BF','#008A9E','#00897A']} style={{flex:1}}>
                <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    >
                    <KeyboardAvoidingView styles={{flex: 1}} 
                        behavior = 'padding'  enabled>
                        <Title />
                        <TitleInfoMsg />
                        <EnterDeialsMsg />
                        <View style={styles.form}>
                           
                            <TextInput
                                style={styles.input}
                                label={<Text style={{color: 'white'}}>First name</Text>}
                                mode="flat"
                                placeholder="Enter first name..."
                                value={this.state.text}
                                underlineColor="rgba(255,255,255,0.3)"
                                onChangeText={firstName => this.setState({ firstName })}
                                theme={{colors:{ placeholder: 'rgba(255,255,255,0.3)'}}}
                            />
                            <TextInput
                                style={styles.input}
                                label={<Text style={{color: 'white'}}>Last name</Text>}
                                mode="flat"
                                placeholder="Enter last name..."
                                value={this.state.text}
                                underlineColor="rgba(255,255,255,0.3)"
                                onChangeText={lastName => this.setState({ lastName })}
                                theme={{colors:{ placeholder: 'rgba(255,255,255,0.3)'}}}
                            />
                            <TextInput
                                style={styles.input}
                                label={<Text style={{color: 'white'}}>Phone number</Text>}
                                mode="flat"
                                placeholder="Enter phone number..."
                                value={this.state.text}
                                underlineColor="rgba(255,255,255,0.3)"
                                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                                theme={{colors:{ placeholder: 'rgba(255,255,255,0.3)'}}}
                            />
                            <TextInput
                                style={styles.input}
                                label={<Text style={{color: 'white'}}>Email</Text>}
                                mode="flat"
                                placeholder="Enter email..."
                                value={this.state.text}
                                underlineColor="rgba(255,255,255,0.3)"
                                onChangeText={email => this.setState({ email })}
                                theme={{colors:{ placeholder: 'rgba(255,255,255,0.3)'}}}
                            />
                            <TextInput
                                style={styles.input}
                                label={<Text style={{color: 'white'}}>Address</Text>}
                                mode="flat"
                                placeholder="Enter address..."
                                value={this.state.text}
                                underlineColor="rgba(255,255,255,0.3)"
                                onChangeText={address => this.setState({ address })}
                                theme={{colors:{ placeholder: 'rgba(255,255,255,0.3)'}}}
                            />
                            {/* <View style={styles.textAreaContainer}>
                                {this.props.children}
                                <TextArea onChange={this.changeHandler} />
                            </View> */}

                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableHighlight 
                                style={styles.submitButton}
                                // onPress={()=> this.submitDetails()}
                                >
                                <Text>Submit</Text>
                            </TouchableHighlight>
                        </View>

                    </KeyboardAvoidingView>
                </ScrollView>
                </View>
            </LinearGradient>
            </SafeAreaView>
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
    title: {
        // flex: 4,
        borderWidth: 1,
        height: 60
    },
    appointmentInfo: {
        // flex: 1,
        borderWidth: 1,
        height: 100
    },
    siwtchVisit: {
        flex: 1,
        borderWidth: 1,
        height: 40
    },
    swicthSkype: {
        flex: 1,
        borderWidth: 1,
        height: 40
    },
    container: {
      flex: 1,
      alignItems: 'center'
    },
    viewContainer:{
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1
    },
    form: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    input: {
        backgroundColor: 'transparent',
        width: width * .8,
        marginTop: 20,
        color: 'red'
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
        height: 60
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