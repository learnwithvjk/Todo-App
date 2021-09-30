import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert }  from 'react-native';

export default function AddToDoList ( {addToDo} :any ) {

  const [newToDo, setToDo] = useState('')

  const onTypingNewToDo = (newToDo:string) => {
    setToDo( newToDo )
  }

  function onAddNewToDO() {
    if(newToDo.length <= 3) {
      Alert.alert( "Oops!!", "there mst be atleast 3 chars", [
        { text: "Understood", onPress: () => console.log('alert closed')  }
      ] )
    } else {

    addToDo(newToDo)
    onTypingNewToDo('')
    }
  }

  return (
   
        <View style={styles.addToDoWrapper}>
          <TextInput
            ref={textInput => { textInput = textInput }}
            value={newToDo}
            style={styles.textInput}
            placeholder="my todo is..."
            onChangeText={ (newValue) => onTypingNewToDo(newValue) }
          />
          <View 
            style={styles.button}>
               <Button
            title="Add todo"
            onPress={ onAddNewToDO }
          />
            </View>
         
        </View>

);
}

const styles = StyleSheet.create({

  addToDoWrapper: {
    marginTop: 20,
  },
 
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'blue',
    marginTop:20,
    marginHorizontal: 30,
    fontSize: 24
  },
  button: {
    margin: 20
  }
});

// then nadu => anna tower near entrance