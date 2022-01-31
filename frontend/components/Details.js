import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Button} from 'react-native-paper';

const Details = (props) => {
    const data = props.route.params.data;
    return(
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.body}>{data.body}</Text>
                <Text style={styles.date}>{data.date}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        icon="pencil"
                        mode='contained'
                        onPress={()=>{console.log('pressed')}}
                    >
                        Edit
                    </Button>
                    <Button
                        style={styles.button}
                        icon="delete"
                        mode='contained'
                        onPress={()=>{console.log('pressed')}}
                    >
                        Delete
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 28,
        marginVertical: 20,
        fontWeight: 'bold'        
    },
    body: {
        fontSize: 18,
        marginBottom: 20        
    },
    date:{
        fontSize: 10
    },
    button: {
        marginTop: 10
    },
    buttonContainer: {
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default Details;
