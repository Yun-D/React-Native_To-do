// 추가된 아이템 하나를 나타내는 부분.
//해당 아이템이 완료 되었는지, 아닌지 여부를 나타내는 상태값을 가짐
//완료 체크 이벤트, 삭제 이벤트 기능 담당

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity onPressOut={onToggle(id)}>
          { checked ? ( //체크 되었다면(true라면) 체크 표시된 토글버튼 보여줌
            <View style={styles.completeCircle}>
              <Icon name="circledowno" size={25} color="#10bdef" />
            </View>
          ) : ( //false라면 체크 해제된 토글버튼
            <View style = {styles.circle} />
          )}
        </TouchableOpacity>

        <Text style={[
          styles.text, //checked 속성이 true면 취소선, 아니면 안취소선~
          checked ? styles.strikeText : styles.unstrikeText, ]}>
          {textValue} 
        </Text>

        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={onRemove(id)}>
                <Icon name="delete" size={25} color="#e33057" />
            </Text>
        </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 15,
    marginVertical: 20,
    width: 100,
  },

  //완료한 목록. 체크 된 토글 동그라미
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  //체크 안 된 토글 동그라미
  circle: { 
    width: 25,
    height: 25,
    borderRadius: 15,
    borderColor: '#10bdef',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;