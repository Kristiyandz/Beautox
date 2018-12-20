import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EnterDetailsMsg = () => {
    const { detailMsg } = styles;
    return (
        <View>
            <Text style={detailMsg}>To book a home visit, please enter your{'\n'}details bellow.</Text>
            <Text style={detailMsg}>We will contact you as soon as possible.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    detailMsg: {
        color: 'whitesmoke',
        // paddingTop: 40
    }
});

export default EnterDetailsMsg;