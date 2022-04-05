import { EmployeeType } from "../TypeDefs/Employee";
import { ResponseType } from "../TypeDefs/Responses";
import { GraphQLID, GraphQLString } from "graphql";
import { Employees } from "../../Entities/Employees";

export const CREATE_EMPLOYEE = {
    type: EmployeeType,
    args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        department: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
      const { name, email, password, department } = args;
      await Employees.insert({ name, email, password, department });
      return args;
    },
};


export const UPDATE_EMPLOYEE_PASSWORD = {
  type: ResponseType,
  args: {
      name: { type: GraphQLString },
      oldPassword: { type: GraphQLString },
      newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
     const { name, oldPassword, newPassword } = args;
     const employee = await Employees.findOne({name: name});
     const employeePassword = employee?.password; 

     if ( oldPassword === employeePassword) {
        await Employees.update(
         {name: name}, {password: newPassword}
         );
         return { successful: true, response: "Passwords match" };
     } else {
       throw new Error("Passwords do not match");
     }
  },
};

export const DELETE_EMPLOYEE = {
  type: ResponseType,
  args: {
      id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Employees.delete(id);
    return { successful: true, response: "Employee is being deleted" };

  },
};