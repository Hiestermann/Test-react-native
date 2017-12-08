import React from 'react';
import {View, Text, Image} from 'react-native';

export default class Row extends React.Component {
    render(){
        return(
            <View style={{height: 80, justifyContent: 'space-between', paddingLeft: 10}}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                    <Image style={{backgroundColor: 'green', height: 50, width: 50, borderRadius: 25, paddingLeft: 10}}/>   
                    <View style={{flex:1}}>
                        <Text style={{paddingLeft: 10, paddingTop: 10, backgroundColor: 'red', fontSize: 18}}>Username</Text>
                        <Text style={{paddingLeft: 10, paddingTop: 10, fontSize: 14}}>Hier wird die Vorschau eines textes stehen, das ganze ist max 3 Zeilen groß</Text>
                    </View>
                    </View>   
                <View style={{height: 1, backgroundColor: 'green', bottom: 0}}></View>
            </View>
            
        )
    }

}
