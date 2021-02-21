import React from 'react'
import styled from 'styled-components'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

function Chat() {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong># Room - Name</strong></h4>
                    <StarBorderOutlinedIcon/>
                </HeaderLeft>

                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </HeaderRight>
            </Header>
        </ChatContainer>
    )
}

export default Chat


const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;

`

const HeaderLeft = styled.div``


const HeaderRight = styled.div``