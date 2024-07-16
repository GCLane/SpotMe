import { useContext } from "react";

import { validateUser } from "../config/user";
import AccountContext from "./account";

export default () => {
	const { user, setUser } = useContext(AccountContext);

	const login = (email: string, password: string) =>
		setUser(validateUser({ email: email, password: password }));

	const logout = () => setUser(undefined);

	return { login, logout, user };
};
