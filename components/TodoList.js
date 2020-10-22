// 추가된 아이템을 스크롤 뷰를 통해 보여줌

import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem'

//map()으로 todos에 담긴 아이템을 하나씩 TodoListItem 컴포넌트로 전달.
//각각 아이템에 textValue, id, checked 키와 밸류가 담김
const TodoList = ({todos}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;