import { Button, StyleSheet, Text, View } from 'react-native';
import React  ,{useEffect} from 'react';
import ScreenNames from '../routes/ScreenNames';

const Splash = props => {
    console.log('can go back? ', props.navigation.canGoBack());

    const navigateHome = () => {
        setTimeout(() => {
          props.navigation.replace(ScreenNames.home);
        }, 2 * 1000);
      };
    
      useEffect(() => {
        navigateHome();
      }, []);

    return (
        <View style={styles.conatiner}>
            <Text style={styles.txt}>welcome to my app</Text>
            <Button title="Home" onPress={navigateHome} />
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'white',
        flex: 1,
    },
    txt: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        margin: 20,

    },
});
