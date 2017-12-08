import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';
import 'react-navigation';

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            mail: 'Useless Placeholder',
            password: "123445", 
            loading: true,
            user: null
        };
      }
//"tes2t@gmail.com"
    login = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.mail, this.state.password)
        .then(() => {
            this.props.navigation.navigate('Main')
        });
        
    }

    signUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.mainView}>
                <TextInput 
                style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, paddingBottom: 10}}
                onChangeText={(mail) => this.setState({mail})}
                value={this.state.text} />
                <TextInput 
                style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.text} />
                <Button 
                onPress={this.login} 
                title="Login"/>
                <Button 
                onPress={this.signUp} 
                title="Sign Up"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    }
})

export default LoginScreen;