// 추가된 아이템을 스크롤 뷰를 통해 보여줌

import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <TodoListItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;