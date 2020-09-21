import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-paper';

class TodoScreen extends React.Component {
  render() {
    return (
      //<Text style = {styles.appTitle}>Todo!</Text>
      <View style = {styles.card}>
        <TextInput style={styles.input} placeholder = "Add an item.." />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff8e7',
  },
  appTitle: {
    color: '#73a837',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: '#3143e8',
  },
});

export default TodoScreen;