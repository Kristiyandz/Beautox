import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
    const { titleContainer, titleText } = styles;
    return (
        <View style={titleContainer}>
            <Text style={titleText}>Book a free consultation now</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    titleText: {
        fontSize: 23,
        fontFamily: 'Cochin',
        color: 'whitesmoke'
    }
   
});

export default Title;