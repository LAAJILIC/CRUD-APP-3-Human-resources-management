import { EmployeeType } from "../TypeDefs/Employee";
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

export const DELETE_EMPLOYEE = {
  type: EmployeeType,
  args: {
      id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Employees.delete(id);
  },
};