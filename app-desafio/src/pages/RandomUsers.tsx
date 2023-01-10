import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

interface User {
    name: {
        first: string;
        last: string;
    };
}

const RandomText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const RandomUsers: React.FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios
            .get("https://randomuser.me/api/?results=10")
            .then(response => setUsers(response.data.results));
    }, []);
    return (
        <>
            <h1>Random Users</h1>
            {users.map(user => (
                <div key={user.name.first}>{user.name.first}</div>
            ))}
        </>

    )
}

export default RandomUsers
