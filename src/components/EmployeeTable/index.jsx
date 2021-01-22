import React from "react";
import "./style.css"

const EmployeeTable = (props) => {
    return (
      <table className="table table-dark table-sortable text-center">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" data-field="name" data-sortable="true">
              <span onClick={() => props.sortBy("name", "last", "first")}>
                Name
              </span>
            </th>
            <th scope="col">
              <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
            </th>
            <th scope="col">
              <span onClick={() => props.sortBy("phone")}>Phone</span>
            </th>
            <th scope="col">
              <span onClick={() => props.sortBy("email")}>Email</span>
            </th>
            
          </tr>
        </thead>
       
  
 