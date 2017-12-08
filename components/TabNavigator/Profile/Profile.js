import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from 'react-native-firebase';

 class Profile extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = { 
        username:'',
        tags: [],
        loading: true,
        user: null,    
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ loading: false, user });
    }, ()=> user === null ? this.props.navigation.navigate('Login'): console.log(user));
    
 }

  logout = () => {
    firebase.auth().signOut().then(()=> this.props.navigation.navigate('Login'))
}

// componentWillMount(){
//   firebase.database().ref().child("user").child(firebase.auth().currentUser.uid).once().then((snapshot)=> {
//     let tags = Object.keys(snapshot._value.tags)
//     this.setState({tags})
    
//   })
// } 

  render() {
    return (
      <View>
        <View style={{height: 300}}/>
        <Text>{this.state.username}</Text>
      <Button 
        style={{
        backgroundColor: 'green',
        }}
        onPress={this.logout} 
        title="Logout"
        />
       <Text>Loged in</Text>
       </View>
    );
  }
}

export default Profile;
