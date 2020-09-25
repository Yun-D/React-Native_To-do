import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-paper';

class TodoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Todo!</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="Add an item!" />
        </View>
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
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: { //아이템 추가
    backgroundColor: '#fff',
    //padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 20,
  },
});

export default TodoScreen;