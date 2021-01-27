import React, { Component } from "react";
import SearchBar from "../SearchBar";
import EmployeeTable from "../EmployeeTable";
import API from "../../utils/API";

class EmployeesContainer extends Component {
    state = {
      search: "",
      employees: [],
      filteredEmployees: [],
      sortDirections: this.initialSortDirections,
    };
  
    get initialSortDirections() {
      return {
        name: "",
        phone: "",
        email: "",
        dob: "",
      };
    }
  
    componentDidMount() {
      API.getEmployees()
        .then((res) =>
          this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results,
          })
        )
        .catch((err) => console.log(err));
    }
  
    handleInputChange = (event) => {
      const value = event.target.value;
      this.setState({ search: value });
      this.filterEmployees(value.toLowerCase().trim());
    };
  
    handleFormSubmit = (event) => {
      event.preventDefault();
    };

}