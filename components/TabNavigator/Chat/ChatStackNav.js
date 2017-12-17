import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChatPartner from './ChatPartner';
import Chat from './Chat';
import NewChatScreen from './NewChatScreen';

export default  ChatStackNav = StackNavigator({
    Main:{
        screen: Chat,
    },
    Detail: {
        screen: ChatPartner,
    },
    NewChat: {
        screen: NewChatScreen
    },
})

const prevGetStateForAction = ChatStackNav.router.getStateForAction;

ChatStackNav.router = {
    ...ChatStackNav.router,
    getStateForAction(action, state){
       if(state && action.type === 'ReplaceCurrentScreen'){
           console.log('Hello from the ChatStackNav')
           const routes = state.routes.slice(0, state.routes.length -1);
           routes.push(action);
           return {
               ...state,
               routes,
               index: routes.length - 1,
           };
       }
       return prevGetStateForAction(action, state);
    }
}