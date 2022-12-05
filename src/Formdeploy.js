import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      gender: "",
      dob: "",
      experience: "",
      qualification: "",
      address: "",
      mobile: "",
      email: "",
      candidateList: [],
      postStatus: null
    };
  }

  componentDidMount() {
    const url = "https://reqres.in/api/users/2:/getAllCandidates";
    axios.get(url)
    .then(response => {
      const responseData = response.data;
      this.setState({ candidateList: responseData });
    })
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const url = "https://reqres.in/api/users/2:/addCandidate";
    const formDataJsonString = JSON.stringify({
        'fName': this.state.fname,
        'lName': this.state.lname,
        'gender': this.state.gender,
        'dob': this.state.dob,
        'qualification': this.state.qualification,
        'experience': this.state.experience,
        'mobile': this.state.mobile,
        'email': this.state.email,
        'address': this.state.address,
    });

	const fetchOptions = {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		},
		body: formDataJsonString
	};
	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		console.log(errorMessage);
    }
    const result = await response.json();
    this.setState({postStatus: result.status}) ;    
  };

  getAllCandidates = async () => {
    this.setState({ candidateList: [] });
    const url = "https://reqres.in/api/users/2/getAllCandidates";
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
      const errorMessage = await response.text();
      console.log(errorMessage);
    }
    const responseData = await response.json();
    this.setState({ candidateList: responseData });
  };

  render() {
    return (
      <div style={{ display: "block", width: 500, padding: 50 }}>
        <Form onSubmit={this.handleSubmit}>
        <div style={{color:'green'}}>{this.state.postStatus ? <p>{this.state.postStatus}</p> : null}</div>
          <Form.Group>
            <Form.Label for="fname">Job Applicaiton Form</Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Label for="fname">First Name </Form.Label>
            <Form.Control
              type="text"
              name="fname"
              id="name"
              value={this.state.fname}
              required
              pattern="[a-zA-Z]+"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="lname">Last Name </Form.Label>
            <Form.Control
              type="text"
              name="lname"
              id="lname"
              value={this.state.lname}
              required
              pattern="[a-zA-Z]+"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="gender">Gender </Form.Label>
            <Form.Check
              inline
              label="Male"
              type="radio"
              name="gender"
              id="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              required
              onChange={this.handleChange}
            />
            <Form.Check
              inline
              label="Female"
              type="radio"
              name="gender"
              id="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              required
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="dob">DOB </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              id="dob"
              value={this.state.dob}
              required
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="qualification">Qualification </Form.Label>
            <Form.Control
              as="select"
              name="qualification"
              id="qualification"
              value={this.state.qualification}
              required
              onChange={this.handleChange}
            >
              <option id="btech" value="btech">                
                B.Tech
              </option>
              <option id="mtech" value="mtech">                
                M.Tech
              </option>
              <option id="msc" value="msc">                
                MSC
              </option>
              <option id="bsc" value="bsc">                
                BSC
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label for="experience">Experience </Form.Label>
            <Form.Control
              type="text"
              name="experience"
              id="experience"
              value={this.state.experience}
              required
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="mobile">Mobile </Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              id="mobile"
              value={this.state.mobile}
              required
              pattern="[0-9]+"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="email">Email </Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              required
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label for="address">Address </Form.Label>
            <Form.Control
              as="textarea"
              name="address"
              id="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Group>

          <ButtonGroup>
            <Button type="submit" variant="primary">
              Submit
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={this.getAllCandidates}
            >
              Get All Candidates
            </Button>
          </ButtonGroup>

          <div>
            <h1> Candidate List</h1>
            {this.state.candidateList.map(item => (<li>
              <ol key={item.id}>
                First Name: {item.fName}, 
                Last Name: {item.lName}, 
                Gender: {item.gender}, 
                DOB: {item.dob}, 
                Qualification: {item.qualification}, 
                Experience: {item.experience}, 
                User_Email: {item.email}
              </ol>
              </li>
            ))}
          </div>
        </Form>
      </div>
    );
  }
}

export default FormDemo;