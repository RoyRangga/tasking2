import { View, 
        Text,
        StatusBar, 
        FlatList} from "react-native";
import React, {useState} from "react";
import {TaskInput, Task, ModalEditTask} from "../component/Index";

export default function Home(){
    // interface Task {
    //     title: string;
    //     done: boolean;
    //     id: number | null;
    // }
    
    const [modalVisible, setModalVisible] = useState(false)
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')
    const [editedTask, setEditedTask] = useState({
        title:'',
        done:false,
        id:null
    })

    function createTask() {
        setTasks((tasks) => {
            return [{title: newTask, id: tasks.length +1, done: false}, ...tasks]
        });
        setNewTask('');
    }

    function deleteTask(id){
        setTasks((tasks)=> {
            return tasks.filter(task => task.id != id);
        })
    }

    function editTask(){
        setTasks(tasks=>{
            return tasks.map(tasks => tasks.id === editedTask.id ? {...tasks, title:editedTask.title} : tasks);
        });
        setModalVisible(false);
    };

    function checkTask(selectedId){
        setTasks(tasks =>{
            return tasks.map( tasks => tasks.id == selectedId ? {...tasks, done: !tasks.done} : tasks);
        });
    };
    return(
        <View style={{flex:1}}>
        <StatusBar backgroundColor={'#370074'}/>

            {/* Header */}
            {/* <Header/> */}
            

            {/* Input Tasks */}
            <TaskInput
            onChangeText={setNewTask}
            value={newTask}
            onPress={createTask}
            disabled={newTask == ''}
            />

            {/* Render tugas */}
            <FlatList
            data = {tasks}
            ListEmptyComponent={<Text style={{textAlign:'center'}}>Tidak ada tugas</Text>}
            renderItem={({item:tasks})=>{
                return <Task
                        tasks={tasks}
                        onPressCheckbox={()=> checkTask(tasks.id)}
                        onPressEdit={()=>{
                            setModalVisible(true);
                            setEditedTask(tasks);
                        }}
                        onPressDelete={()=>deleteTask(tasks.id)}
                        />
            }}/>

            {/* Modal render tugas */}
            <ModalEditTask
            modalVisible={modalVisible}
            modalOnRequestClose={()=> setModalVisible(false)}
            onPressPressable={()=> setModalVisible(false)}
            onpressClose={()=> setModalVisible(false)}
            valueTextInputTitle={editedTask.title}
            textInputOnChangeText={(taskTitle)=>setEditedTask({...editedTask, title:taskTitle})}
            onpressEdit={editTask}
            />
        </View>
    )
};

