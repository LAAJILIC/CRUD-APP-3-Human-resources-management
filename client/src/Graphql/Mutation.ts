import { gql } from "@apollo/client";

export const CREATE_EMPLOYEE = gql`
  mutation createEmployee(
    #    to define types below - typesciprt
      $name: String!
      $email: String!
      $password: String!
      $department: String!) {
          createEmployee(name: $name email: $email password: $password department: $department)
          {
            #   what we want to return here
            id 
            name
            email
            department
          }
      }
`;