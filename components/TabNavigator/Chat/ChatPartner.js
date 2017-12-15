import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import firebase from 'react-native-firebase';

class ChatPartner extends React.Component {
  static navigationOptions = {
    
    tabBarVisible: false,
    
  }

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [],
    });
  }

  componentDidMount(){
    console.log(this.props)
    firebase.database().ref().child('chats').child(this.props.navigation.state.params.key).child('messages').on('child_added', (snapshot) => {
      addMessage = snapshot._value.message
      this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, addMessage),
      }));
    })
  }

  onSend(messages=[]) {
    message = messages[0]
    console.log(this.props.navigation.state.params)
    firebase.database().ref().child('chats').child(this.props.navigation.state.params.key).child('messages').push({message})
   
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default ChatPartner;