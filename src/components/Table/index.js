import React from "react";
import "./style.css";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";

class Table extends React.Component {
    state = {
        employee: []
    }
    componentDidMount() {
        API.populate().then(people => {
            this.setState({ employee: people.data.results })
        })
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone #</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                {
                    this.state.employee.map(person => (
                        <EmployeeCard
                            image={person.picture.thumbnail}
                            first={person.name.first}
                            last={person.name.last}
                            phone={person.phone}
                            email={person.email}
                            dob={person.dob.date}
                        />
                    ))
                } 
            </table>
        );
    }
}


export default Table;