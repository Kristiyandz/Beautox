import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { phoneIcon, emailIcon, whatsAppIcon} from '../../icons/BookingPage.js';


const TitleInfoMsg = () => {
    const { infoBox,
            listItem,
            textItem,
            listTitleMain,
            listTitle,
            horizontalLine } = styles;
    return (
        <View style={infoBox}>
            <Text style={listTitleMain}>Don't want to fill the form?{'\n'}Or just have a question?</Text>
            <Text style={listTitle}>You can find me on:</Text>
                <View style={horizontalLine}/>
            {/* <Text style={textItem}>Via one of the following:</Text> */}
            <FlatList
                contentContainerStyle={listItem}
                data={[
                  {key: ' +44 744 123 123', icon: phoneIcon},
                  {key: ' nelroseashton@gmail.com', icon: emailIcon},
                  {key: ' +44 744 123 123', icon: whatsAppIcon}
                ]}
                renderItem={({item}) => {
                    return (
                        <Text style={textItem}>{item.icon}{item.key}</Text>
                    )
                }}
              />
              {/* <Text style={listTitle}>Follow-up consultation: </Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    infoBox: {
        height: 170,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,
        paddingTop: 10,
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    listTitleMain: {
        fontSize: 20,
        color: 'whitesmoke'
    },
    listTitle: {
        fontSize: 15,
        color: 'whitesmoke'
    },
    listItem: {
        flex:1,
        justifyContent: 'center'
    },
    textItem: {
        color: 'whitesmoke',
    },
    horizontalLine: {
        borderBottomColor: 'rgba(255,255,255,0.3)',
        borderBottomWidth: 1,
        paddingTop: 5,
        width: 140
    }
});

export default TitleInfoMsg;