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

export const UPDATE_EMPLOYEE_PASSWORD = gql`
  mutation updatePassword(
    #    to define types of the input - typesciprt
      $name: String!
      $oldPassword: String!
      $newPassword: String!) {
        updatePassword(name: $name oldPassword: $oldPassword newPassword: $newPassword)
          {
            response
          }
      }
`;


export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: ID!){
          deleteEmployee(id: $id)
          {
            #   what we want to return here
            response
          }
      }
`;