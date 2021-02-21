import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, provider } from '../fireabase'

function LoginScreen() {
    
    const signIn = e => {
        e.preventDefault()
        
        // login with google 
        auth.signInWithPopup(provider)
        .catch(error => {
            alert(error.message)
        })
    }


    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" 
                    alt="" />

                <h1>Sign In to Slack Clone</h1>
                <p>Slack-clone.com</p>

                <Button 
                    onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default LoginScreen


const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    
    > img {
        object-fit: contain;
        height: 100px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`