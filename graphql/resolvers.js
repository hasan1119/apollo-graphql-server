const { users, posts } = require("../data");
const { EmailType, PasswordType, DateType } = require("./customTypes");

const resolvers = {
  Post: {
    user(post) {
      return users.find((user) => user.id == post.user);
    },
  },
  Query: {
    users(root, args) {
      return users;
    },
    user(_, { id }) {
      return users.find((user) => user.id == id);
    },
    posts() {
      return posts;
    },
    post(_, { id }) {
      return posts.find((post) => post.id == id);
    },
  },
  Mutation: {
    addUser(
      _,
      {
        input: {
          firstName,
          lastName,
          gander,
          phone,
          email,
          isMarried,
          password,
        },
      }
    ) {
      const user = {
        id: users.length + 1,
        firstName,
        lastName,
        gander,
        phone,
        email,
        isMarried,
        posts: [],
        createdAt: new Date(),
        password,
      };

      users.push(user);
      return user;
    },
    updateUser(
      _,
      {
        id,
        input: {
          firstName,
          lastName,
          gander,
          phone,
          email,
          isMarried,
          password,
        },
      }
    ) {
      let updateUser = null;
      users.forEach((user) => {
        if (user.id == id) {
          if (firstName) user.firstName = firstName;
          if (lastName) user.lastName = lastName;
          if (gander) user.gander = gander;
          if (phone) user.phone = phone;
          if (email) user.email = email;
          if (isMarried) user.isMarried = isMarried;
          if (password) user.password = password;
          updateUser = user;
        }
      });

      return updateUser;
    },
    addPost(_, { input: { title, description, user } }) {
      const post = {
        id: posts.length + 1,
        title,
        description,
        user,
      };

      posts.push(post);
      return post;
    },
    updatePost(_, { id, input: { title, description, user } }) {
      let updatePost = null;
      posts.forEach((post) => {
        if (post.id !== id) return;

        if (title) post.title = title;
        if (description) post.description = description;
        if (user) post.user = user;
        updatePost = post;
      });
      return updatePost;
    },
    deleteUser(_, { id }) {
      const index = users.findIndex((user) => user.id == id);
      users.splice(index, 1);
      if (index) return true;
      return false;
    },
    deletePost(_, { id }) {
      const index = posts.findIndex((post) => post.id == id);
      posts.splice(index, 1);
      if (index) return true;
      return false;
    },
  },
  User: {
    posts(user) {
      return posts.filter((post) => {
        if (user.posts.includes(post.id)) return true;
        return false;
      });
    },
  },
  EmailType: EmailType,
  PasswordType: PasswordType,
  DateType: DateType,
};

module.exports = resolvers;
