import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight } from 'react-native';
import ChatPartner from './ChatPartner';
import firebase from 'react-native-firebase';
import Row from './Row';

class Chat extends React.Component {

  static navigationOptions = ({ navigation }) =>  {
    return{
      headerRight: (
        <Button
            title="New Chat"
            onPress={() => {navigation.navigate('NewChat')}}
        />
      )
    }; 
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { 
      title: 'current User',
      dataSource: ds.cloneWithRows(''),
    };
  }

  componentDidMount() {
    var newDs = []
    
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.setState({}, ()=> user === null ? this.props.navigation.navigate('Login'): console.log(user));
      if (user !== null) {
        uid = firebase.auth().currentUser.uid
      firebase.database().ref().child('user').child(uid).child('chats').once().then((snapshot) => {
        snapshot._childKeys.map((key) => {
          firebase.database().ref().child('chats').child(key).once().then((snapshot) => {
            if (snapshot._value.messages !== undefined) {
              console.log(Object.keys(snapshot._value.chatName.users));
              
              Object.keys(snapshot._value.chatName.users).map((_key) =>{
                if(_key !== uid){
                  firebase.database().ref().child('user').child(_key).once().then((snapshot) => {
                    userdata = snapshot._value.userdata;
                    chat = {userdata: userdata, key: key};
                    newDs.push(chat);
                    this.setState({dataSource: this.state.dataSource.cloneWithRows(newDs)},() => console.log(this.state));                    
                  })
                }
              })
            }
            
          })
        }
      )
    });
  }
    })
 }

 openChat = (data) => {
  this.props.navigation.dispatch({
    type: 'ReplaceCurrentScreen',
    routeName: 'Detail',
    key: 'Detail',
    params: data
});
}

  render() {
    return (
      <View style={{paddingTop: 20}}>
        <ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(data) => <View style={{height: 100}}><TouchableHighlight onPress={() => this.openChat(data)}><Text>{data.userdata.username}</Text></TouchableHighlight></View>}
        />
        <Row/>
        <Row/>
        <Button
        onPress={() => this.props.navigation.navigate('Detail', {name: 'Lucy'})}
        title="Go to Lucy's profile"
        />
        <View>

        </View>
      </View>
    );
  }
}

export default Chat;