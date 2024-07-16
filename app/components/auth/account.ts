import React, { useState } from "react";

import { User } from "../../entities/User";

const [user, setUser] = useState<User | undefined>(undefined);

const AccountContext = React.createContext({ user, setUser });

export default AccountContext;
