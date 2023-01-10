import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

interface User {
    name: {
        title: string;
        first: string;
        last: string;
    }
    picture: { medium: any };
    email: string;
    login: { username: string };
    dob: { age: number }
};

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
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                setUsers(res.data.results)
            })
    }, [])
    return (
        <div>
            {
                users.map((user, i) => {
                    return (
                        <div key={i}>
                            <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
                            <p>Email: {user.email}</p>
                            <p>Username: {user.login.username}</p>
                            <p>Age: {user.dob.age}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RandomUsers
