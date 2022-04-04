import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './Schema';
import cors from "cors";
import { createConnection } from "typeorm";
import { Employees } from './Entities/Employees';

const main = async () => {
    
    await createConnection({
        type: "mysql",
        database: 'crudgraphql',
        username: 'root',
        password: 'Cycy1994*moha',
        logging: true,
        synchronize: false, //set it to false after creating the EMployees table in order to not recreating it on everytime we trigger it
        entities: [Employees],
    })


    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
    }));

    app.listen(3001, () => {
        console.log("Server running on 3001");
    });
};

main().catch((err) => 
{ console.log(err); });
