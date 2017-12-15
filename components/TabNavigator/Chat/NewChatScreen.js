import React from 'react';
import {View, Text, ListView, TouchableHighlight} from 'react-native';
import firebase from 'react-native-firebase';

class NewChatScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(''),
        };
      }

    componentDidMount(){
        var newDs = [];
        //newDs = this.state.ds
        firebase.database().ref().child("user").once().then((snapshot)=>{
            Object.keys(snapshot._value).forEach((k) => {
                var user = snapshot._value[k]
                console.log(user)
                user.userdata.uid= k
                console.log(user);
                newDs.push(snapshot._value[k])
                this.setState({dataSource: this.state.dataSource.cloneWithRows(newDs)})
            })
        }
        )

    }
    
    
    _renderRow(rowData) {
        return (
          <TouchableHighlight onPress={() => {
            console.log('Hello')
          }}/>
        )
    }

    openScreen = (data) => {
        var newPostKey = firebase.database().ref().child('chats').push({chatName: data, users: { data: data}}).key;
        firebase.database().ref().child('user').child(firebase.auth().currentUser.uid).child('chats').update({[newPostKey]:1})
        console.log(data.userdata.uid)
        firebase.database().ref().child('user').child(data.userdata.uid).child('chats').update({[newPostKey]:1})
        this.props.navigation.dispatch({
            type: 'ReplaceCurrentScreen',
            routeName: 'Detail',
            key: 'Detail',
            params: newPostKey
        });
    }

    render(){
        return(<View>
            <ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(data) => <View style={{height: 100}}><TouchableHighlight onPress={() =>this.openScreen(data)}><Text>{data.userdata.username}</Text></TouchableHighlight></View>}
            />
            </View>
        )
    }
}

export default NewChatScreen;