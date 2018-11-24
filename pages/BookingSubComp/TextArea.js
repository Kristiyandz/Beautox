import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default (props) => (
    <TextInput
        style={styles.textArea}
        multiline={true}
        numberOfLines={4}
        placeholder="Enter message..."
        onChangeText={props.onChange}
        // value={this.state.message}
    />
  );

  const styles = StyleSheet.create({
      textArea: {
        height: 150,
        justifyContent: 'center',
        width: 300,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
      }
  });