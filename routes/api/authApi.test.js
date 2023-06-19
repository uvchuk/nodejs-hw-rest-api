const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");
const {User} = require("../../models");

const {DB_HOST_TEST, PORT = 3005} = process.env;

describe("test signup route", () => {
	let server = null;
	beforeAll(async () => {
		await mongoose.connect(DB_HOST_TEST);
		server = app.listen(PORT);
	});
	afterAll(async () => {
		await mongoose.connection.close();
		server.close();
	});
	beforeEach(async () => {
		await User.deleteMany({});
	});

	test("test with correct data", async () => {
		const signupData = {
			email: "uvchuk@gmail.com",
			password: "123456",
		};
		const {body, statusCode} = await request(app).post("/api/users/register").send(signupData);
		expect(statusCode).toBe(201);
		expect(body.email).toBe(signupData.email);

		const user = await User.findOne({email: signupData.email});
		expect(user.email).toBe(signupData.email);
	});
});

describe("test signin route", () => {
	let server = null;
	beforeAll(async () => {
		await mongoose.connect(DB_HOST_TEST);
		server = app.listen(PORT);
	});
	afterAll(async () => {
		await mongoose.connection.close();
		server.close();
	});

	test("test with correct data", async () => {
		const signinData = {
			email: "uvchuk@gmail.com",
			password: "123456",
		};
		const {body, statusCode} = await request(app).post("/api/users/login").send(signinData);
		expect(statusCode).toBe(200);
		expect(body.token).not.toBeUndefined();
		expect(body.token).not.toBeNull();
		expect(body.token).not.toBe("");

		const user = await User.findOne({email: signinData.email});
		expect(user.email).toBe(signinData.email);
	});
});
