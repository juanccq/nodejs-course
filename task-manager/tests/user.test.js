const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

let userOneId = new mongoose.Types.ObjectId();
const userOne = {
  name: "javier",
  email: "javier@mail.com",
  password: "1234567890",
};

beforeEach(async () => {
  await User.deleteMany();
  const newUser = await new User(userOne).save();
  
  userOneId = newUser._id;
  userOne.tokens = [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }
  ]

  newUser.tokens = userOne.tokens;
  await newUser.save();
});

test("should signup a new user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "jose",
      email: "jose@mail.com",
      password: "123456789",
    })
    .expect(201);

  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull();

  expect(response.body).toMatchObject({
    user: {
      name: 'jose',
      email: 'jose@mail.com'
    },
    token: user.tokens[0].token
  });

  expect(user.password).not.toBe('123456789');
});

test("Should login existing user", async () => {
  const user = await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);

  const savedUser = await User.findById(userOneId);
  expect(user.body.token).toBe(savedUser.tokens[1].token);
});

test("Should not login nonexisten user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password + "2",
    })
    .expect(500);
});

test("Should get profile for user", async () => {
  // console.log("generatedid ", userOneId);
  // console.log(userOne.tokens[0].token);

  await request(app)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("Should not get profile for unauthenticated user", async () => {
  await request(app).get("/users/me").send().expect(401);
});


test("Should delete account", async () => {
  await request(app)
    .delete("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);

  const deletedUser = await User.findById(userOneId);
  expect(deletedUser).toBeNull();
});

test("Should not delete account for unauthenticated users", async () => {
  await request(app).delete("/users/me").send().expect(401);
});
