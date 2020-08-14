const { gql } = require("apollo-server-lambda");

const schema = gql`
    type Person @key(fields: "id") {
        id: ID!
        firstName: String
        lastName: String
        fullName: String
        email: String
        skills: [Skill]
    }

    type Skill {
        id: ID!
        name: String
        type: SkillType
    }

    enum SkillType {
        work
        personal
        misc
    }

    input CreatePersonInput {
        firstName: String
        lastName: String
        email: String
    }

    input UpdatePersonInput {
        firstName: String
        lastName: String
        email: String
        skills: [ID!]
    }

    input CreateSkillInput {
        name: String
        type: SkillType
    }

    input UpdateSkillInput {
        name: String
        type: SkillType
    }

    type Query {
        getPerson(id: ID!): Person
        listPersons: [Person]

        getSkill(id: ID!): Skill
        listSkills: [Skill]
    }

    type Mutation {
        createPerson(input: CreatePersonInput): Person
        updatePerson(id: ID!, input: UpdatePersonInput): Person
        deletePerson(id: ID!): Person

        createSkill(input: CreateSkillInput): Skill
        updateSkill(id: ID!, input: UpdateSkillInput): Skill
        deleteSkill(id: ID!): Skill
    }
`;
exports.schema = schema;
