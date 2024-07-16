import { User } from "../entities/User";

const testUsers: User[] = [
	{ email: "grantlane.glane@gmail.com", password: "12345" },
	{ email: "test-email@email.com", password: "678910" },
	{ email: "anotherOne@email.com", password: "123456789" },
] as const;

const validateUser = (user: User) =>
	testUsers.find(
		({ email, password }) => email === user.email && password === user.password
	);

export { validateUser };
