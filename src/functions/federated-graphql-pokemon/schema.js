const { gql } = require("apollo-server-lambda");

const schema = gql`
    type Pokemon @key(fields: "id") {
        id: ID
        name: String
        base_experience: Int
        height: Int
        is_default: Boolean
        order: Int
        weight: Int
        url: String
    }

    type PokemonConnection {
        count: Int
        next: String
        previous: String
        results: [Pokemon]
    }

    input UpdatePersonsPokemonInput {
        pokemon: [ID!]
    }

    type Query {
        getPokemon(id: ID!): Pokemon
        listPokemons(limit: Int, offset: Int): PokemonConnection
    }

    extend type Mutation {
        updatePersonsPokemon(id: ID!, input: UpdatePersonsPokemonInput): Person
    }

    extend type Person @key(fields: "id") {
        id: ID! @external
        pokemon: [Pokemon]
    }
`;
exports.schema = schema;
