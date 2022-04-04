import { GraphQLObjectType, GraphQLID, GraphQLString  } from "graphql";

export const EmployeeType = new GraphQLObjectType({
    name: "employee",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        department: { type: GraphQLString },

    }),
});