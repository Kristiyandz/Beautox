import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EnterDetailsMsg = () => {
    const { detailMsg } = styles;
    return (
        <View style={styles.messageContainer}>
            <Text style={detailMsg}>To book a home visit, please enter your{'\n'}details bellow.</Text>
            <Text style={detailMsg}>We will contact you as soon as possible.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        marginTop: 20
    },
    detailMsg: {
        color: 'whitesmoke',
        padding: 10,
        // paddingTop: 40
    }
});

export default EnterDetailsMsg;