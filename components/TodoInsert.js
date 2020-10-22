//텍스트 입력창, 추가버튼이 들어갈 부분

import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    //사용자가 입력한 텍스트값의 변화를 실시간으로 관리하는 핸들러 함수
    //newTodoItem에 텍스트 값의 최신 상태가 담겨감.
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

    //onAddTodo : 사용자가 입력한 텍스트 값을 전달받아 목록에 추가
    //setNewTodoItem : 입력창을 공백으로 초기화
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };


    return (
        <View style = {styles.inputContainer}>
            <TextInput
                style = {styles.input}
                placeholder = "Add an item!"
                placeholderTextColor = {'#999'}
                onChangeText = {todoInputHandler}
                value = {newTodoItem}
                autoCorrect = {false}
            />

            <View style = {styles.button}>
                <Button title = {'Add'} color = '#7ebc82' onPress={addTodoHandler} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        //padding: 10,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 20,
        marginLeft: 20,
      },
      button: {
        marginRight: 10,
      },
});

export default TodoInsert;