import { GraphQLObjectType, GraphQLString, GraphQLBoolean  } from "graphql";

export const ResponseType = new GraphQLObjectType({
    name: "response",
    fields: () => ({
        successful: { type: GraphQLBoolean },
        response: { type: GraphQLString },
    }),
});