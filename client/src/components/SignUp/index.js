import React from 'react';
import { Form, Button } from "react-bootstrap";
import API from "../../utils/api";

class SignUpForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();

        if (e.target[2].value === e.target[3].value) {
            const submitData = {
                username: e.target[1].value,
                password: e.target[2].value,
                email: e.target[0].value,
                public_key: "123456788999"
            }
            API.signUp(submitData);
        }else{
            alert('The passwords does not match');
        }
    }

    render() {
        return (
            <>
                <div className="sidebar-header">
                    <h3>Sign-up</h3>
                </div>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Pasword" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirm">
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>
                    <Button type="submit" value="Submit">Sign-Up</Button>
                </Form>

                <div>
                    <h3>--- Or ---</h3>
                </div>
                {/* Need to add a type for button */}
                <Button>Sign-up with Google</Button>
            </>
        )
    }
}

export default SignUpForm;