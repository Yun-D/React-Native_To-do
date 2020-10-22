import React, {useState} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  ScrollView, } from 'react-native';
import { TextInput } from 'react-native-paper';

//컴포넌트 임포트
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

//class TodoScreen extends React.Component {
  //hook은 함수형 프로그래밍에서만 구현 가능함.
  const TodoScreen = () => {
  //render() {
    //todos: {id: Number, textValue: string, checked: boolean }
    const [todos, setTodos] = useState([]);

    const addTodo = text => {
      setTodos([
        ...todos,
        {id: Math.random().toString(),
          textValue: text,
          checked: false},
      ]);
    };

    //각 아이템의 고유 id를 받아와, 해당 아이디를 가진 아이템 객체만 제외하고 새로운 배열을 만듦. (해당 아이디 것을 삭제해줌)
    const onRemove = id => e => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    //토글버튼을 누르면 체크 표시, 더 누르면 해제
    //아이템의 id를 받아와 해당 아이템의 checked 속성값을 반대로 변경
    const onToggle = id => e => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    };

    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Todo!</Text>

        <View style={styles.card}>
          <TodoInsert onAddTodo = {addTodo} />
          <TodoList todos = {todos} onRemove={onRemove} onToggle={onToggle} />

        </View>
      </View>
    );
  }
//}


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
    flex: 1, //화면 전체를 덮어줌
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