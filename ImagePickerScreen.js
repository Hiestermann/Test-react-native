import React from 'react';
import {View,Image, StyleSheet, ListView, Text, TouchableHighlight, Button} from 'react-native';

class ImagePickerScreen extends React.Component {

  static navigationOptions = {
    headerRight: <Button 
    title="Next"
    disabled={false}
    onPress={() => {navigate('Interests')}}/>,
    title: "",
}

  showInterestsScree = () => {
    this.props.navigation.navigate('Interests');
  }
    state = {
        ds: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        }),
        showSelectedPhoto: false,
        uri: ''
      }

      renderRow(rowData) {
        const { uri } = rowData.node.image;
        return (
          <TouchableHighlight
            onPress={()=> this.navigateSignUpScreen(uri)}>
            <Image
              source={{ uri: rowData.node.image.uri }}
              style={styles.image} />
          </TouchableHighlight>
        )
      }

      navigateSignUpScreen = (uri) => {
          this.setState({uri: uri})
        this.props.navigation.navigate('Interests', {uri: this.state.uri});
        

      }

    render(){
        return(
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick A Photo </Text>
                </View>
                <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.ds.cloneWithRows(this.props.navigation.state.params.imageArray)}
                renderRow={(rowData) => this.renderRow(rowData)}
                enableEmptySections={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
  
    image: {
      width: 110,
      height: 120,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#979797'
    }
  })

export default ImagePickerScreen;