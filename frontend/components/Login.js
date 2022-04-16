import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.screen} >
            <View style={styles.screen}>
                <TextInput
                    style={styles.input}
                    label="User name"
                    value={userName}
                    mode="outlined"
                    onChangeText={(text)=>{setTitle(text)}}
                />
                <TextInput
                    style={styles.input}
                    label="Password"
                    value={password}
                    mode='outlined'
                    onChangeText={(text)=>{setBody(text)}}
                />
                <Button 
                    style = {styles.input} 
                    title="Login"
                    icon="pencil"
                    mode="contained"
                    onPress={()=>{}}
                >Submit</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10
    },
    input: {
        margin: 10
    }
});

export default Login;