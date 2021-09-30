import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, TouchableOpacity, SafeAreaView, TextInput, Button }  from 'react-native';

export default function ToDoHeader() {

  return (
    <View >
      <StatusBar backgroundColor={'orange'}/>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}> My Todos</Text>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  bodyContent: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: '#fff'
  },
  titleWrapper: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  }
});

// then nadu => anna tower near entrance