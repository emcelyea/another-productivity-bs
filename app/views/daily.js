import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import RNFS from 'react-native-fs';

const Task = ({remove, task}) => {

  return (<Text>{task.name}</Text>);
}
const Daily = () => {
  const [tasks, setTasks] = React.useState([]);
  const [showAddNew, setShowAddNew] = React.useState(false);
  const [newTaskName, setNewTaskName] = React.useState('');

  const setupTasks = async () => {
  }
  React.useEffect(() => {
    setupTasks();
  }, []);

  return (
    <ScrollView style={styles.dailyContent}>
      <Text style={styles.header}>Daily</Text>
      {tasks.filter(task => task.active).map(t => 
        <Task 
          key={t.name}
          remove={async () => {
            setupTask();
          }} 
          task={t}/>
         )}
      {showAddNew ? 
        <View style={styles.addDaily}>
          <Text style={styles.addText}>Add</Text>
          <TextInput onChangeText={setNewTaskName} style={styles.newTaskName} value={newTaskName}/>
          <Button title="Save" onPress={async () => {
            setupTasks();
          }}/>
          <Button title="X" onPress={() => {
            setShowAddNew(false);
            setNewTaskName('');
          }}/>
        </View>
        : 
        <Button title="Add New" onPress={() => setShowAddNew(true)}/>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addText: {
    fontSize: 18,
    marginHorizontal: 8
  },
  addDaily: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  dailyContent: {
  },
  header: {
    backgroundColor: '#eee',
    fontSize: 22,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  footer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  },
  newTaskName: {
    backgroundColor: '#dddddd',
    borderColor: '#aaa',
    color: 'black',
    height: 30,
    padding: 4,
    width: '60%'
  }
});

export default Daily;
