import React, { useState, useEffect } from 'react';
import Base from '../core/Base'
import { getAllUsers } from './helper/adminapicall';
import { Table } from 'react-bootstrap';
import { isAuthenticated } from '../Auth/helper';

const AllUsers = () => {

    var count = 0;
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const { user, token } = isAuthenticated();


    const loadAllUsers = () => {
        getAllUsers(user._id, token).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setUsers(data)
            }
        })
    }

    useEffect(() => {
        loadAllUsers();
    }, [])

    return (
        <Base>
            <h2>All Users </h2>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Mobile </th>
                        <th>Role </th>
                        <th>Change Role</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map((user, _id) => {
                            const role = user.role === 1 ? 'Admin' : 'User';
                            const changeRole = role === 'Admin' ? 'User' : 'Admin';



                            return (
                                <tr key={_id}>
                                    <th>{user.name}</th>
                                    <th>{user.email}</th>
                                    <th>{user.mobile}</th>
                                    <th>{role}</th>
                                    <th>Make {changeRole}</th>
                                    <th>Remove</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Base>
    )
}

export default AllUsers;