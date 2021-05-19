import React from "react";
import "./style.css";
import API from "./utils/API";

class Table extends React.Component {
    state = {
        employee: [{}]
    }
    componentDidMount() {
        API.populate().then(results => {
            this.setState({employee: results.data})
            console.log(results);
        })
    }
}

export default Table;