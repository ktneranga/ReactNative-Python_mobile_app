import { useLinkProps } from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { useSelector } from 'react-redux';

const Create = (props) => {

    const loggedUser = useSelector(state=>state.users.loggedInUser);


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const insertData = () => {
        fetch('http://192.168.8.170:3000/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then(resp => resp.json())
        .then(data=>{
            props.navigation.goBack('Home')
        })
        .catch(error => console.log(error))
    }

    return(
        <View style={styles.screen}>
            <Text>{loggedUser.name}</Text>
            <TextInput
                style={styles.input}
                label="Title"
                value={title}
                mode="outlined"
                onChangeText={(text)=>{setTitle(text)}}
            />
            <TextInput
                style={styles.input}
                label="Description"
                value={body}
                mode='outlined'
                multiline
                numberOfLines={10}
                onChangeText={(text)=>{setBody(text)}}
            />
            <Button 
               style = {styles.input} 
               title="Submit"
               icon="pencil"
               mode="contained"
               onPress={()=>{insertData()}}
            >Submit</Button>
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

export default Create;