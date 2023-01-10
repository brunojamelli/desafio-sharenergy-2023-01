import styled from 'styled-components'
import React, { useState, useEffect } from "react";
import { User } from '../interfaces/User';
import '../styles/random.css'

const Home: React.FunctionComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(
                `https://randomuser.me/api/?page=${page}&results=10`
            );
            const { results } = await res.json();
            setUsers(results);
            setLoading(false);
        }
        fetchData();
    }, [page]);
    return (
        <div>
            <h1 className="page-title">Random Users</h1>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <div className="userList">
                    {users.map((user) => {
                        return (
                            <div key={user.login.username} className="userCard">
                                <img src={user.picture.large} alt={user.name.first} />
                                <div>
                                    <h3>
                                        {user.name.title} {user.name.first} {user.name.last}
                                    </h3>
                                    <div>
                                        <p>{user.email}</p>
                                        <p>{user.login.username}</p>
                                        <p>{user.dob.age}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {users.length > 0 && (
                        <div className="pagination">
                            <button
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                Previous
                            </button>
                            <span>{page}</span>
                            <button
                                disabled={users.length < 10}
                                onClick={() => setPage(page + 1)}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Home
