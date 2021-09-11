import React from "react";
import Joi from "joi-browser";
import Input from "./input";
import { result } from "lodash";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        username: "",
        password: "",
        isSaved: false,
      },
      errors: {},
    };
  }
  //call Api
  //js object versus  json ==> key is string
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((result) => result.json())
      .then((data) => console.log(data));
  }

  //for joi validation
  schema = {
    //username must be string and is required
    username: Joi.string().required().label("Username"),
    password: Joi.string().required(),
  };
  //ده بنشوار به علي حاجات
  //   username = React.createRef();
  handleSubmit = (e) => {
    //any form has action and method by default action is to refresh
    e.preventDefault();

    //validation
    const errors = this.validate();
    if (errors) {
      this.setState({ errors });
      return;
    }
    //if valid callbackend and redirect to another page
    //else
    this.setState({ errors: {} });

    console.log("Done");
  };

  //validation
  validate = () => {
    // const errors = {};
    // if (this.state.account.username.trim().length === 0) {
    //   //error name
    //   errors.username = "username is required.";
    // }
    // if (this.state.account.password.trim().length === 0) {
    //   errors.password = "Password is reqiured.";
    // }
    // return Object.keys(errors).length === 0 ? null : errors;

    /*-------------------------------validate using joi---------------------------------------- */
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    if (result.error === null) {
      return null;
    }

    const errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    return errors;
  };
  handleChange = ({ target }) => {
    //clone
    const account = { ...this.state.account };
    //edit
    account[target.name] = target.value;
    this.setState({ account });
  };
  handleCheck = (e) => {
    //clone
    const account = { ...this.state.account };
    //edit
    account.isSaved = !account.isSaved;
    //setState
    this.setState({ account });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={this.state.account.username}
            error={this.state.errors.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            label="Password"
            value={this.state.account.password}
            error={this.state.errors.password}
            onChange={this.handleChange}
          />
         
            
          <div className="mb-3 form-check">
            <input
              onChange={this.handleCheck}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={this.state.isSaved}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

// #endregion

export default Login;
