import React from 'react'
import styled from 'styled-components'

function LoginScreen() {
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png" 
                    alt="" />
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default LoginScreen


const LoginContainer = styled.div``

const LoginInnerContainer = styled.div`
    
    > img {
        object-fit: contain;
        height: 100px;
    }
`