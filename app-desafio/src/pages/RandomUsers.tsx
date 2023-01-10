import React from 'react'
import styled from 'styled-components'

const RandomText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const RandomUsers: React.FunctionComponent = () => {
    return (
        <RandomText>Random Users</RandomText>
    )
}

export default RandomUsers
