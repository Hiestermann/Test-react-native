import React from 'react';
import { StackNavigator } from 'react-navigation';
import ChatPartner from './ChatPartner';
import Chat from './Chat';

const ChatStackNav = StackNavigator({
    Main:{
        screen: Chat,
    },
    Detail: {
        screen: ChatPartner,
    },
})

export default ChatStackNav;