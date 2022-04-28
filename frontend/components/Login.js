import { useLinkProps } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../store/actions/login';

const Login = (props) => {

    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        const loggedInUser = users.find(user=>user.email === userName && user.password === password)
        if(loggedInUser){
            console.log(loggedInUser);
            dispatch(userLogin({
                name: loggedInUser.name,
                id: loggedInUser.uid
            }));
            props.navigation.navigate('Home');
        }else{
            console.log('Invalid user credentials...');
        }
    }

    return (
        <View style={styles.screen} >
            <View style={styles.screen}>
                <TextInput
                    style={styles.input}
                    label="User name"
                    value={userName}
                    mode="outlined"
                    onChangeText={(text)=>{setUserName(text)}}
                />
                <TextInput
                    style={styles.input}
                    label="Password"
                    value={password}
                    mode='outlined'
                    onChangeText={(text)=>{setPassword(text)}}
                />
                <Button 
                    style = {styles.input} 
                    title="Login"
                    icon="pencil"
                    mode="contained"
                    onPress={()=>{loginHandler()}}
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