import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const home = () => {
    const [x , setX] = useState(0)
    return (
        <View style={styles.containers}>

            <View style={styles.container1}>

                {/* <Text style={styles.Text1}>مربع أ</Text> */}
                {/* <Text style={styles.text2}>مربع ب  </Text> */}
            </View>
            <View style={styles.container2}></View>
            <View style={styles.container3}></View>





        </View>
    )
}

export default home

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    // Text1: {
    //     color: 'black',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     fontSize: 30,
    //     borderWidth: 5,
    //     padding: 10,
    //     margin:10,
    // },
    // text2: {
    //     color: 'black',
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     justifyContent: 'center',
    //     fontSize: 30,
    //     borderWidth: 5,
    //     padding: 10,
    //     margin:10,
    // },
    container1: {

        width: 110,
        height: 110,
        borderColor: 'blue',
        borderWidth: 5,
        borderRadius: 70,
        margin: 10,


    },
    container2: {

        width: 110,
        height: 110,
        borderColor: 'blue',
        borderWidth: 5,
        borderRadius: 70,
        margin: 10,


    },
    container3: {

        width: 110,
        height: 110,
        borderColor: 'blue',
        borderWidth: 5,
        borderRadius: 70,
        margin: 10,



    }
})