import { gql } from "@apollo/client";

export const GET_ALL_EMPLOYEES = gql`
  query getAllEmployees{
    getAllEmployees {
        name 
        department 
        email
    }
  }
  `;