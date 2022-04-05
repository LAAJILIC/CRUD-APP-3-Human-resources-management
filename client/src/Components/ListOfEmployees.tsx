import React from 'react'
import { GET_ALL_EMPLOYEES } from '../Graphql/Queries';
import { useQuery } from "@apollo/client";


function ListOfEmployees() {

    const { data } = useQuery(GET_ALL_EMPLOYEES);
    return (
    <div>
     {data && data.getAllEmployees.map((employee: any) => {
         return (
             <div>
                 {""}
                 {employee.name} , {employee.email} , {employee.department}{""}
             </div>
         );
     })};
    </div>
  );
}

export default ListOfEmployees;