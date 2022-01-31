import React,{useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const Edit = (props) => {
    const data = props.route.params.data;

    const [updateTitle, setUpdateTitle] = useState(data.title);
    const [updateBody, setUpdateBody] = useState(data.body);

    const updateData = () => {
        fetch(`http://192.168.8.170:3000/update/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                title: updateTitle,
                body: updateBody
            })
        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate('Home',{data:data});
        })
        .catch(err=>console.log(err))
    }

    return(
        <View style={styles.screen}>
            <TextInput
                style={styles.input}
                label="Title"
                value={updateTitle}
                mode="outlined"
                onChangeText={(text)=>{setUpdateTitle(text)}}
            />
            <TextInput
                style={styles.input}
                label="Description"
                value={updateBody}
                mode='outlined'
                multiline
                numberOfLines={10}
                onChangeText={(text)=>{setUpdateBody(text)}}
            />
            <Button 
               style = {styles.input} 
               title="Submit"
               icon="pencil"
               mode="contained"
               onPress={()=>{updateData()}}
            >Update</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },
    input: {
        marginTop: 10
    }
});

export default Edit;

