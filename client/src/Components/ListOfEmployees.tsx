import React from 'react'
import { GET_ALL_EMPLOYEES } from '../Graphql/Queries';
import { DELETE_EMPLOYEE } from '../Graphql/Mutation';
import { useQuery, useMutation } from "@apollo/client";

function ListOfEmployees() {

    const { data } = useQuery(GET_ALL_EMPLOYEES);

    const [deleteEmployee, { error }] = useMutation(DELETE_EMPLOYEE);
    return (
    <div>
     {data && data.getAllEmployees.map((employee: any) => {
         return (
             <div>
                 {employee.name} , {employee.email} , {employee.department}
                 <button onClick={() => {deleteEmployee({ variables: { id: employee.id } });}}>Delete Employee account</button>
             </div>
         );
     })};
    </div>
  );
}

export default ListOfEmployees;