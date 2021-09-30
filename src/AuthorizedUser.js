import React, { Component } from 'react';

class AuthorizedUser extends Component {
    constructor(props) {
        super(props);
        this.state = {'Course Number': '', 'Grade Mode': '', 'Course Name': '', Professor: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChangeStatus = this.handleChangeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeStatus(event) {
        this.setState({level: event.target.value});
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {

        alert("Welcome to " + this.state["Guest Name"])
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <h1>Guest Information Page</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Guest Number:
                        </label>
                        <input name = "Course Number" className="form-control" value={this.state["Course Number"]} type="text" onChange={this.handleInputChange} />

                    </div>

                    <div>
                        <label>
                            Grade Mode:
                        </label>
                        <input name = "Grade Mode"   value={this.state["Grade Mode"]} type="text" onChange={this.handleInputChange} />

                    </div>

                    <div>
                        <label>
                            Guest Name:
                        </label>
                        <input name = "Course Name"  type="text" value={this.state["Course Name"]} onChange={this.handleInputChange} />
                    </div>

                    <div>
                        <label>
                            Professor:
                        </label>
                        <input name = "Professor" type="text" value={this.state.Professor} onChange={this.handleInputChange} />
                    </div>


                    <input type="submit" value="Submit" />
                </form>
                <br />
                <label>{this.state.message}</label>


            </div>
        );
    }
}

export default AuthorizedUser;