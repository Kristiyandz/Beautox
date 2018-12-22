import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
 
export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
    date: ''
  };
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {

    let strDate = date.toString();

    console.log('A date has been picked: ', date);
    
    this.setState({date: `Time chosen: ${strDate}`})
    this._hideDateTimePicker();
    this.props._setDate(strDate)
  };
 
  render () {
    return (
      <View style={styles.dateTimePickerWarpper}>
        <TouchableOpacity onPress={this._showDateTimePicker} >
          <Text style={styles.choseDateText}>Chose date and time...</Text>
        </TouchableOpacity>
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <Text style={styles.timeChosenText}>{this.state.date}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
    dateTimePickerWarpper: {
        flex: 1,
        marginTop: 20
    },
    choseDateText: {
        color: 'whitesmoke',
        fontSize: 20
    },
    timeChosenText: {
        color: 'whitesmoke'
    }
});