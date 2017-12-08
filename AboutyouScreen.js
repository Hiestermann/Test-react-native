import React from 'react';
import {View, Text, Button} from 'react-native';
import firebase from 'react-native-firebase';

class AboutyouScreen extends React.Component {
    static navigationOptions = {
        headerRight: <Button 
        title="Next"
        disabled={false}
        onPress={() => {navigate('Interests')}}/>,
        title: "Descripe yourself",
    }

    render(){
        return(
            <View>
            </View>
        )
    }
}

export default AboutyouScreen;