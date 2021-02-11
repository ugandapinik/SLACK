import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

function ChatInput({ channelName, channelId}) {

    
    const sendMessage = (e) => {
        e.preventDefault()
        
    }


    return (
        <ChatInputContainer>
            <form action="#">
                <input placeholder={`Mesage #ROOM`} />
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div``