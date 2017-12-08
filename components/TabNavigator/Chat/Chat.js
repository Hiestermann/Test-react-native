import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChatPartner from './ChatPartner';
import firebase from 'react-native-firebase';
import Row from './Row';

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      title: 'current User',
    };
  }
  
  static navigationOptions = {
    title: '',
    tabBarVisible: true,
    header: null,
    headerStyle: { paddingRight: 40, paddingLeft: 10 }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({}, ()=> user === null ? this.props.navigation.navigate('Login'): console.log(user));
    });
    console.log(this.props)
 }
  render() {
    return (
      <View style={{paddingTop: 20}}>
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