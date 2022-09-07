import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { isAuthenticated, signup } from "../Auth/helper";
import { Col, Form, Row, Button } from "react-bootstrap";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        mobile: ""
    })

    const { name, email, password, error, success, mobile } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const performRedirect = () => {
        alert('Account Created Redirecting to Login Page')

        if (success === true) {
            return <Redirect to='/signin' />
        }

        if (isAuthenticated()) {
            return <Redirect to='/'></Redirect>
        }
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })

        signup({ name, email, password, mobile })
            .then(data => {
                console.log(data);
                if (data.error) {
                    setValues({
                        ...values, error: data.error, success: false
                    })
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        error: "",
                        password: "",
                        mobile: "",
                        success: true
                    })
                    if (success === true) {
                        return <Redirect to='/signin' />
                    }
                    performRedirect();
                }
            })
            .catch(console.log("Error In Signup"))
    }

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}
                    >
                        New Account Created Successfully!! Please <Link to='/signin'>Login</Link>
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>

                    <div className='alert alert-danger'
                        style={{ display: error ? "" : "none" }}
                    >
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    const signUpForm = () => {
        return (
            <Row>
                <Col md="6" xs={{ offset: 3 }}>
                    <Form>
                        <Form.Group className="mb-2">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={handleChange("name")} value={name} placeholder='Enter Name ' />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" onChange={handleChange("email")} value={email} placeholder='Enter MailId ' />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={handleChange("password")} value={password} placeholder='Enter Password ' />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="tel" onChange={handleChange("mobile")} value={mobile} placeholder='Enter Mobile No ' />
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
        <Base title="Sign Up Page" description="A Page for user to Signup">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>

    )
}


export default Signup;