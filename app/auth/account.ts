import React from "react";

import { User } from "../entities/User";

interface AccountContextType {
	user: User | undefined;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const AccountContext = React.createContext<AccountContextType | undefined>(
	undefined
);

export default AccountContext;
