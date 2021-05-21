import React from "react";
import Moment from 'moment';
import "./style.css";
import API from "../../utils/API";
import EmployeeCard from "../EmployeeCard";
import Container from "../Container";
import Row from "../Row";
//import Col from "../Col";
import Card from "../Card";
import SearchForm from "../SearchForm";

class Table extends React.Component {
    state = {
        employee: [],
        search: "",
    }

    componentDidMount() {
        API.populate().then(people => {
            this.setState({ employee: people.data.results })
        })
    }

    onSortChange = () => {
        this.setState({
            employee: !this.state.order
                ? this.state.employee.sort((a, b) => {
                    if (a.name.first < b.name.first) return -1;
                    if (a.name.first > b.name.first) return 1;
                    return 0;
                })
                : this.state.employee.reverse((a, b) => {
                    if (a.name.first < b.name.first) return 1;
                    if (a.name.first > b.name.first) return -1;
                    return 0;
                }),
            order: !this.state.order,
        });
    }

    // searchEmployees = query => {
    //     API.search(query)
    //         .then(res => this.setState({ employee: res.data }))
    //         .catch(err => console.log(err));
    // };

    // handleInputChange = event => {
    //     const value = event.target.value;
    //     const name = event.target.name;
    //     this.setState({
    //         [name]: value
    //     })
    // };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployees(this.state.search);
    //   };


    render() {
        return (
            <Container>
                <Row>
                    <Card>
                        <SearchForm
                        // value={this.state.search}
                        // handleInputChange={this.handleInputChange}
                        // handleFormSubmit={this.handleFormSubmit}
                        />
                    </Card>
                </Row>
                <Row>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col"><button type="button" onClick={() => this.onSortChange()}>Name</button></th>
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
                </Row>
            </Container>
        );
    };
}


export default Table;