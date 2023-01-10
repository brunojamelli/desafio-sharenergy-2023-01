import styled from 'styled-components'
import React, { useState, useEffect } from 'react';

const LoginText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Login: React.FunctionComponent = () => {
    return (
        <LoginText>Login</LoginText>
    )
}

export default Login
