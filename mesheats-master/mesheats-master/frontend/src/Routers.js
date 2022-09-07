import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AllUsers from './Admin/AllUsers'
import AdminRoute from './Auth/helper/AdminRoute'
import PrivateRoute from './Auth/helper/PrivateRoute'
import Home from './core/Home'
import AdminDashboard from './user/AdminDashboard'
import Signin from './user/Signin'
import Signup from './user/Signup'
import UserDashboard from './user/UserDashboard'
import Dishes from './Admin/AllDishes';

const Routers = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' component={Signin} />
                <Route path='/signup' exact component={Signup} />
                <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/admin/users' exact component={AllUsers} />
                <AdminRoute path='/admin/allDishes' exact component={Dishes} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;