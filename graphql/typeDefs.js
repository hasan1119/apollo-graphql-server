const typeDefs = `#graphql

    scalar  PasswordType
    scalar  EmailType
    scalar  DateType

    enum GangerEnum {
        Female
        Male
    }

    """It is for single user"""
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        gander: GangerEnum!
        phone: String!
        email: EmailType!
        isMarried: Boolean!
        """It is user's posts"""
        posts:[Post!] 
        createdAt:DateType!
        password:PasswordType!
    }

    input UserInput {
        firstName: String!
        lastName: String!
        gander: GangerEnum!
        phone: String!
        email: EmailType!
        isMarried: Boolean!
        password:PasswordType!
    }

    input UpdateUserInput {
        firstName: String
        lastName: String
        gander: GangerEnum
        phone: String
        email: EmailType
        isMarried: Boolean
        password:PasswordType
    }

    
    type Post {
        id: ID!
        title: String!
        description: String!
        user: User!
    }

    input PostInput {
        title: String!
        description: String!
        user: ID!
    }
    input UpdatePostInput {
        title: String
        description: String
        user: ID
    }

    type Query {
        users: [User!]!
        user(id:ID!):User
        posts:[Post!]!
        post(id:ID!):Post
    }

    type Mutation {
        addUser(input:UserInput):User
        updateUser(id:ID!, input:UpdateUserInput):User
        addPost(input:PostInput):Post
        updatePost(id:ID! input:UpdatePostInput):Post
        deleteUser(id:ID!):Boolean!
        deletePost(id:ID!):Boolean!
    }

`;

module.exports = typeDefs;
