import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { phoneIcon, emailIcon, skypeIcon} from '../../icons/BookingPage.js';


const TitleInfoMsg = () => {
    const { infoBox,
            listItem,
            textItem,
            listTitle } = styles;
    return (
        <View style={infoBox}>
            <Text style={listTitle}>Initial consultation: Free</Text>
            <Text style={textItem}>Via one of the following:</Text>
            <FlatList
                contentContainerStyle={listItem}
                data={[
                  {key: ' Phone', icon: phoneIcon},
                  {key: ' Email', icon: emailIcon},
                  {key: ' Skype (20 minute session)', icon: skypeIcon}
                ]}
                renderItem={({item}) => {
                    return (
                        <Text style={textItem}>{item.icon}{item.key}</Text>
                    )
                }}
              />
              <Text style={listTitle}>Follow-up consultation: £20</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    infoBox: {
        height: 170,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,
        paddingTop: 20,
        paddingLeft: 10,
        backgroundColor: 'rgba(255,255,255,0.1)'
    },
    listTitle: {
        fontSize: 20,
        color: 'whitesmoke'
    },
    listItem: {
        flex:1,
        justifyContent: 'center'
    },
    textItem: {
        color: 'whitesmoke',
    }
});

export default TitleInfoMsg;