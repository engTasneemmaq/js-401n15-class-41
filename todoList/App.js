import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, TouchableOpacity , TextInput, ScrollView } from 'react-native';
import Task from './components/Task';



export default function App() {
const [task, setTask]= useState();
const [taskItems, setTaskItems] = useState([]);



const handleAddTask =()=>{
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask =(idx) =>{
let itemsCopy = [...taskItems];
itemsCopy.splice(idx, 1);
setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
       <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, idx)=>{
              return (
                <TouchableOpacity key={idx}  onPress={() => completeTask(idx)}>
                  <Task text={item} /> 
                  
                </TouchableOpacity>
              )
            })
          }
      
        </View>
        </View>
        </ScrollView>

        <KeyboardAvoidingView>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
       
        <TouchableOpacity onPress={()=>handleAddTask()} >
          <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
<br></br>
        <Text style={styles.footer}>Tasneem ASAC@ 2022</Text>
         </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B008B',
   fontSize: 50,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFF8DC'
  },
  items: {
    marginTop: 30,
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    fontSize: 30,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    fontSize: 20,
  },
  addText: {
    fontSize: 20,
  },
  footer:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF8DC'
  }
});
