import React from "react";
import Moment from 'moment';
import "./style.css";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";


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
            <Container>
                <Row>
                    <Card />
                </Row>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone #</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employee.map(person => (
                                <EmployeeCard
                                    key={person.email}
                                    image={person.picture.thumbnail}
                                    first={person.name.first}
                                    last={person.name.last}
                                    phone={person.phone}
                                    email={person.email}
                                    dob={Moment(person.dob.date).format('MM-DD-YYYY')}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </Container>
        );
    }
}


export default Table;