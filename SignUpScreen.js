import React from 'react';
import {Text, Button, View, StyleSheet, TextInput, CameraRoll, Image} from 'react-native';
import firebase from 'react-native-firebase';


class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            mail: 'Useless Placeholder',
            password: "123445" ,
            username: '',
            imageArray: [],
            uri: '',
        };
      }
    signUp = () => {
        try{
            let mail = this.state.mail;
            let username = this.state.username; 
        } catch(error) {
            return
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
        .then(() => {
            let uid = firebase.auth().currentUser.uid;
            firebase.database().ref().child("user").child(uid).child("userdata").set({username: this.state.username});
            this.choseProfileImage();
        });
        
    }

    login = () => {
        this.props.navigation.navigate('Login')
    }


    choseProfileImage = () => {
        CameraRoll.getPhotos({first: 1000}).then((res) => {
            console.log(res.edges[0].node.image.uri, "image data");
            let imageArray = res.edges
            this.setState({imageArray: imageArray})
            this.props.navigation.navigate('ProfileImagePicker', {imageArray: imageArray})
        })
    }

   componentWillReceiveProps(nextProps) {
        console.log(nextProps.navigation.params.uid);
   }

   componentDidUpdate(){
       console.log(this.props.navigation)
   }


    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style={styles.mainView}>
                <TextInput 
                style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, paddingBottom: 10}}
                onChangeText={(mail) => this.setState({mail})}
                placeholder="Mail" />
                <TextInput 
                style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(username) => this.setState({username})} 
                placeholder="Username"/>
                <TextInput 
                style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})} 
                placeholder="Password"/>
                <Button 
                onPress={this.signUp} 
                title="Sign Up"/>
                <View style={{height: 200}}>
                </View>
                <Button 
                onPress={this.login} 
                title="Login"/>
                <Button
                onPress={()=> this.choseProfileImage()}
                title="Chose Profile Image"/>
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

export default SignUpScreen;