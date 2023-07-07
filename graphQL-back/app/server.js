import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './models/index.js';


db.sequelize.sync({ alter: false })
  .then(() => {
    console.log("Synced db");
});


const typeDefs = `#graphql
  type Dish {
      id: ID!
      name: String
      description: String
      price: Float
      image_url: String
      allergens: String
  }

  type Query {
    dishes: [Dish]
    dish(id: ID!): Dish
  }

  type Mutation {
    addDish(name: String!, description: String, price: Float!, image_url: String!, allergens: String): String
    updateDish(id: ID!, name: String, description: String, price: Float, image_url: String, allergens: String): String
    deleteDish(id: ID!): String
    addToCart(id: ID!): String
  }
`

const resolvers = {
    Query: {
      dishes: async () => {
        return db.dish.findAll();
      },
      dish: async (parent, args) => {

        const { id } = args

        return db.dish.findOne({ where: { id: id } })
      },
    },
    Mutation: {
      addDish: async (parent, args) => {

        const { name, description, price, image_url, allergens } = args

        await db.dish.create({ name: name, description: description, price: price, image_url: image_url, allergens:allergens });
        return "Created Succeeded"
      },
      updateDish: async (parent, args) => {

        const { id, name, description, price, image_url, allergens } = args

        await db.dish.update({ name: name, description: description, price: price, image_url: image_url, allergens: allergens }, {
          where: {
            id: id
          }
        });

        return "Update Succeeded"
      },
      deleteDish: async (parent, args) => {

        const { id } = args

        await db.dish.destroy({
          where: {
            id: id
          }
        });

        return "Delete Succeeded"
      },
      addToCart: async (parent, args) => {
        const { id } = args

        const currentDish = await db.dish.findOne({ where: { id: id }});
        await currentDish.createCart();

        return "Dish add to cart"
      }
    },
}


const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
})

console.log(`🚀  Server run on: ${url}`)