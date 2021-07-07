import { Component } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";

import "../Body.scss";
import "./SignupLogin.scss";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isEmailInvalid: false,
    isPasswordInvalid: false,
    errorMessage: '',
  };


  message = '';
  constructor(prope) {
    super(prope);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valivate = this.valivate.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // var submitedEmail = this.state.email;
    // var submitedPassword = this.state.password;

    // if (!this.state.email || this.state.password.length < 3) return;

    this.setState({ isValidPassword: false });
    console.log("Submitted: ", this.state);
  }


  valivate(atr) {
    const name = atr.target.name;
    const value = atr.target.value;

    if (name === 'email') {
      if (value === "") {
        this.message = 'Email is required.';
        this.setState({ isEmailInvalid: true });
        return true;
      }
      if (!value.includes("@") || !value.includes(".") || value.length < 6) {
        this.message = 'Enter a valid email address.';
        this.setState({ isEmailInvalid: true });
        return true;
      }
      this.setState({ isEmailInvalid: false });
    }

    if (name === 'password') {
      if (value === "") {
        this.message = 'Password is required.';
        this.setState({ isPasswordInvalid: true });
        return true;
      }
      if (value.length < 6) {
        this.message = 'Password should be atleast 6 chraracters.';
        this.setState({ isPasswordInvalid: true });
        return true;
      }
      this.setState({ isPasswordInvalid: false });
    }

    return false;
  }


  render() {
    return (
      <Container>
        <div className="form-content">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Row>
                <Form.Label column="lg" lg={3}>
                  Email
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="email"
                    // required
                    placeholder="example@domain.com"
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.valivate}
                    style={{ borderColor: this.state.isEmailInvalid ? 'red' : 'lightgray' }}
                  />
                  <p style={{ display: this.state.isEmailInvalid ? 'block' : 'none' }} className="l-error">{this.message}</p>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Form.Label column="lg" lg={3}>
                  Password
                </Form.Label>
                <Col>
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                    onBlur={this.valivate}
                    min='8'
                    style={{ borderColor: this.state.isPasswordInvalid ? 'red' : 'lightgray' }}
                  />
                  <p style={{ display: this.state.isPasswordInvalid ? 'block' : 'none' }} className="l-error">{this.message}</p>
                </Col>
              </Form.Row>
            </Form.Group>
            <div className="btn-primary">
              <Form.Group>
                <Button type="submit" name="login" disabled={(this.state.email === '' && this.state.isEmailInvalid) || this.state.password.length < 6 }>
                  Login
                </Button>
              </Form.Group>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;
