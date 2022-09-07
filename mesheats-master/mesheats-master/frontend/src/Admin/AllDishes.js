import React, { useState, useEffect } from 'react';
import Base from '../core/Base'
import { getAllDishes } from './helper/adminapicall';
import { Table } from 'react-bootstrap';
import { isAuthenticated } from '../Auth/helper';

const AllUsers = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const { token } = isAuthenticated();


    const loadAllUsers = () => {
        getAllDishes(token).then(data => {
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
            <h2>All Dishes </h2>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Mobile </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        users.map((dish, _id) => {

                            return (
                                <tr key={_id}>
                                    <th>{dish.name}</th>
                                    <th>{dish.email}</th>
                                    <th>{dish.mobile}</th>
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