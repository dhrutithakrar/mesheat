import React, { useState } from "react";
import Base from "../core/Base";
import { Redirect } from "react-router-dom";

import { signin, authenticate, isAuthenticated } from "../Auth/helper";
import { Form, Row, Col, Button } from "react-bootstrap";

const Signin = () => {

    const [values, setValues] = useState({
        email: "dhrutithakrar2001@gmail.com",
        password: "123456789",
        error: "",
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values;
    const { user } = isAuthenticated()

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.values })
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                } else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("Sign in Request Failed"))
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2> Loading....</h2>
                </div>
            )
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                        className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const performRedirect = () => {
        if (didRedirect) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />
            } else {
                return <Redirect to='/user/dashboard' />
            }
        }

        if (isAuthenticated()) {
            return <Redirect to='/'></Redirect>
        }
    }

    const signInForm = () => {
        return (
            <Row className="justify-content-between d-flex">
                <Col md="6" xs={{ offset: 3 }} >
                    <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={handleChange("email")} value={email} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={handleChange("email")} value={password} placeholder="Password" />
                        </Form.Group>
                        <Button variant="success" type="submit" className="mt-4" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        )
    }

    return (
        <Base title="Sign In Page" description="A page for User to Sign In">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
        </Base>
    )
}

export default Signin