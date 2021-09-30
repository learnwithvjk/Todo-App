import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, SafeAreaView, TextInput, Button }  from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function ToDoList({toDos,deleteToDo} :any ) {
  
  const Item = ({ item } : any) => (
    <View style={styles.toDoWrapper}>
      <Text style={styles.toDoText}>{item.name}</Text>
      <TouchableOpacity onPress={() => deleteToDo(item.key)}>
        <MaterialIcons name="delete"  style={styles.delete}/>
        {/* <Text style={styles.delete}>x</Text> */}
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }:any) => (
    <Item item={item} />
  );

  return (

        <View style={styles.listToDoWrapper}>
          <FlatList 
            keyExtractor = { (item) => item.key }
            data = {toDos}
            renderItem={renderItem}
          />
        </View>
);
}

const styles = StyleSheet.create({
  listToDoWrapper: {
    width: (Dimensions.get('window').width),
    marginTop: 20,
    flex:1,
    backgroundColor: 'pink'
  },
  toDoWrapper: {
    backgroundColor: 'red',
    margin: 20,
    padding:20,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  toDoText: {
    color: 'white'
  },
  delete: {
    fontSize: 30,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

// then nadu => anna tower near entrance