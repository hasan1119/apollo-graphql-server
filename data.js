const users = [
  {
    id: 1,
    firstName: "Joy",
    lastName: "Sarkar",
    gander: "Male",
    phone: "01792384909",
    email: "joy@sarkar.com",
    isMarried: false,
    posts: [2],
    createdAt: "2023-01-22T18:47:59.894Z",
    password: "Abc@s123",
  },
  {
    id: 2,
    firstName: "Ruhul",
    lastName: "Sarkar",
    gander: "Male",
    phone: "01792384909",
    email: "joy@sarkar.com",
    isMarried: true,
    posts: [1, 2],
    createdAt: "2023-01-22T18:47:59.894Z",
    password: "Abc@s123",
  },
];

const posts = [
  {
    id: 1,
    title: "GraphQL",
    description: "SaA query language for your APIrkar",
    user: 1,
  },
  {
    id: 2,
    title: "JS",
    description: "SaA query language for your APIrkar",
    user: 1,
  },
  {
    id: 3,
    title: "PHP",
    description: "SaA query language for your APIrkar",
    user: 2,
  },
];

module.exports = { users, posts };
