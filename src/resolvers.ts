import { getRepository } from "typeorm";
import { User } from "./entity/User";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;

      return await getRepository(User).findOne({ where: { id: id } });
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { firstName, lastName, age } = args;
      try {
        const user = getRepository(User).create({
          firstName,
          lastName,
          age
        });

        await getRepository(User).save(user);

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};