import React from 'react'
import styled from 'styled-components'

const LoginText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Login: React.FunctionComponent = () => {
    return (
        <LoginText>Team</LoginText>
    )
}

export default Login
