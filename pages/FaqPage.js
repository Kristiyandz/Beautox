import React , { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

class FaQ extends Component {
    static navigationOptions = {
        title: 'FAQ',
        headerStyle: { backgroundColor: '#12c2e9'}
    }
    render(){
        return(
            <LinearGradient colors={['#12c2e9', '#c471ed', '#f64f59']} style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
                >
                    <Text style={styles.faqTitle}>FAQ</Text>
                        <Text style={styles.questionTitle}>Does Botox Prevent Wrinkles?</Text>
                    <View>
                        <Text style={styles.questionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    </View>
                        <Text style={styles.questionTitleInner}>Will Botox Make Me Numb And Look Frozen?</Text>
                    <View>
                        <Text style={styles.questionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    </View>
                    <Text style={styles.questionTitleInner}>Does Botox Hurt?</Text>
                    <View>
                        <Text style={styles.questionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    </View>
                    <Text style={styles.questionTitleInner}>How Long Does Botox Last?</Text>
                    <View>
                        <Text style={styles.questionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    </View>
                    <Text style={styles.questionTitleInner}>Have a question?I will be happy to answer!</Text>
                    <View>
                        <Text style={styles.questionText}>Simply click here and decide how to contact me.</Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        );
    };
};


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    questionContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    faqTitle: {
        fontSize:60,
        margin:20,
        color: '#12c2e9',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    questionTitle: {
        fontSize:25,
        color: 'whitesmoke',
        marginLeft: 10
    },
    questionTitleInner: {
        fontSize:25,
        color: 'whitesmoke',
        marginLeft: 10,
        marginTop: 20
    },
    questionText: {
        marginLeft: 10,
        color: 'white'
    }
  });

  export default FaQ;

  // not yet routed