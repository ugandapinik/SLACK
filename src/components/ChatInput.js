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


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input { 
        position: fixed;
        bottom: 30px;
        width: 60%;
        padding: 20px;
        border-radius: 3px;
        outline: none;
        border: 1px solid gray;
    }

    > form > button {
        display: none;
    }
`