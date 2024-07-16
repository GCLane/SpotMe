import { useContext } from "react";

import { validateUser } from "../config/user";
import AccountContext from "./account";

export default () => {
	const context = useContext(AccountContext);

	if (context) {
		const { user, setUser } = context;

		const login = (email: string, password: string) =>
			setUser(validateUser({ email: email, password: password }));

		const logout = () => setUser(undefined);

		return { login, logout, user };
	} else {
		return undefined;
	}
};
