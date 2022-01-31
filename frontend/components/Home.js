import React,{useState, useEffect} from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Card, FAB} from 'react-native-paper';
// test test test

const Home = (props) => {

    const [data, setData] = useState([]);
    const [loading, setIsLoading] = useState(true);

    const loadData = () => {
        fetch('http://192.168.8.170:3000/',{
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(article => {
            setData(article)
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        loadData()
    },[]); //empty array dependency , fetch data once


    const clickedItem = (data) => {
        props.navigation.navigate('Details', {data:data});
    }

    const renderData = (item) => {
        return(
            <Card style={styles.card} onPress={()=>{clickedItem(item)}} >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
            </Card>
        );
    }

    return (
        <View style={styles.screen}>
            <FlatList 
                data={data} 
                renderItem = {({item})=>{
                    return renderData(item)
                }}
                onRefresh={()=> loadData()}
                refreshing = {loading}
                keyExtractor={item=>`${item.id}`}
            />

            <FAB
                style = {styles.fab}
                small={false}
                icon="plus"
                theme={{ colors: {accent:"green"} }}
                onPress={()=>{props.navigation.navigate('Create')}}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        padding: 20
    },
    card : {
        marginVertical: 10,
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: 12
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
});

export default Home;