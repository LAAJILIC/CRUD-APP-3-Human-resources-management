import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES = gql`
  query getAllEmployees{
    getAllEmployees {
        id
        name 
        department 
        email
    }
  }
  `;