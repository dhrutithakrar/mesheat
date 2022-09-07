import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Auth/helper";
import Base from "../core/Base";
import { Badge } from 'react-bootstrap'
import User from '../res/user.webp'
import Order from '../res/order.png'
import Mesh from '../res/mesh.png'
import Location from '../res/location.png'
import Dish from '../res/Dish.webp'
import AdminLink from "../components/AdminLink";


const AdminDashboard = () => {

    const { user: { name, email, role } } = isAuthenticated()

    

    return (
        <Base title='Welcome to Admin Panel' className='container p-4' description='Manage all of your products and orders.'>
            <div className="my-8 ml-2 p-2 shadow-lg rounded-xl shadow-slate-500 box">
                <div className="my-8 ml-2  p-2 px-5 shadow-lg rounded-xl shadow-slate-500 box1">

                    <AdminLink imgSrc={User} text="Manage Users"/>
                    <AdminLink imgSrc={Order} text="Manage Orders"/>
                    <AdminLink imgSrc={Mesh} text="Manage Mesh"/>
                    <AdminLink imgSrc={Location} text="Manage User address"/>
                    <AdminLink imgSrc={Dish} text="Manage Dish"/>
                    
                </div>    
            </div>
        </Base>
    )
}

export default AdminDashboard;