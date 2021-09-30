import React, {useState} from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, StatusBar, Dimensions, SafeAreaView,Keyboard }  from 'react-native';
import ToDoHeader from './Header'
import ToDoList from './ToDoList.tsx'
import AddToDoList from './AddToDoList.tsx'

export default function App() {

  const initialData = ["one", "two"]
  const datWithIds = initialData.map( (item,index) => {return { name: item, key: index.toString() }}  )
  const [toDos, updateToDos] = useState(datWithIds)

  const addToDo = (newToDo:string) => {
    updateToDos( (preValue ) => { 
      return [{ name:newToDo, key:toDos.length.toString() }].concat(preValue)
    })
    Keyboard.dismiss()
  }

  const deleteToDo = (itemKey:string) => {
    updateToDos( (preValue ) => { 
      return preValue.filter( (toDo) => toDo.key != itemKey ) //[{ name:newToDo, key:toDos.length.toString() }].concat(preValue)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={
      () => {
        Keyboard.dismiss()
      }
    }>
    <View style={styles.container}>
                
      <ToDoHeader />
      
      <View 
style=
      {styles.bodyContent}>
        
      <AddToDoList addToDo = {addToDo} />

        <ToDoList toDos={toDos} deleteToDo = {deleteToDo} />
      </View>
      
    </View>
    </TouchableWithoutFeedback>
);
}

const styles = StyleSheet.create({
  bodyContent: {
    flex:1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff6'
  },
  container: {
    flex: 1
  }
});

// then nadu => anna tower near entrance