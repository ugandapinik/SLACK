import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import firebase from 'firebase'
import { auth, db } from '../fireabase'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatInput({ channelName, channelId, chatRef}) {

    const [user] = useAuthState(auth)
    const [input, setInput] = useState("")
    

    
    const sendMessage = (e) => {
        e.preventDefault()

        if(!channelId){
            return false;
        }

        db.collection("rooms")
        .doc(channelId)
        .collection("messages")
        .add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        })

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        })

        // clear the input field
        setInput('')

    }


    return (
        <ChatInputContainer>
            <form action="#">
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input} 
                    placeholder={`Mesage #${channelName}`} />
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