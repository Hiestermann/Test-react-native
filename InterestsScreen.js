import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import firebase from 'react-native-firebase';
import TagInput from 'react-native-tag-input';

const inputProps = {
    keyboardType: 'default',
    placeholder: 'Tags',
    autoFocus: true,
    style: {
      fontSize: 14,
      marginVertical: Platform.OS == 'ios' ? 10 : -2,
    },
  };
  
class InterestsScreen extends React.Component {
    
    static navigationOptions = ({ navigation }) => {

        uploadTagsToFirebase = () => {
          console.log(navigation)
            var array = navigation.state.params.tags;
            for  (let item of array){
                let uid = firebase.auth().currentUser.uid
                firebase.database().ref().child("user").child(uid).child("tags").update({[item]: 1});
            }
            navigation.navigate('Main')
            
        }
        return {
          headerRight: (
            <Button
                title="next"
                onPress={this.uploadTagsToFirebase}
            />
          ),
        };
      };
    
      constructor(props) {
        super(props);
    
        this.state = { 
            tags: [],
            text: "", 
        };
        
      }
  
    onChangeTags = (tags) => {
      this.setState({ tags });
      console.log(tags)
      
    }

    uploadTags = () => {
        var i = JSON.stringify(this.state.tags);
        console.log(i);
        this.props.navigation.setParams({tags: this.state.tags})
        
    }
  
    onChangeText = (text) => {
      this.setState({ text });
      console.log(text)
      const lastTyped = text.charAt(text.length - 1);
      const parseWhen = [',', ' ', ';', '\n'];
  
      if (parseWhen.indexOf(lastTyped) > -1) {
        this.setState({
          tags: [...this.state.tags, this.state.text],
          text: "",
        },
       () => this.props.navigation.setParams({tags: this.state.tags})
      );
        
      }
    }
  
    labelExtractor = (tag) => tag;
  
    render() {
      return (
        <View style={{ flex: 1, margin: 10, marginTop: 30 }}>
  
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray'}}>
            <TagInput
              value={this.state.tags}
              onChange={this.onChangeTags}
              labelExtractor={this.labelExtractor}
              text={this.state.text}
              onChangeText={this.onChangeText}
              tagColor="blue"
              tagTextColor="white"
              inputProps={inputProps}
              maxHeight={200}
            />
          </View>
            <Button title={"Test"} onPress={this.uploadTags}/>
        </View>
      );
    }
  }

export default InterestsScreen;