import { StreamChat } from "stream-chat";

const INSTANCE_KEY = "2qft7ekh68rc" as const;
const USER_SETUP_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2hpbnktc3VyZi04In0.62yMHOWJ3t3KDuuTDklrD191N62oynWUzO4nTK59UYk" as const;

const client = StreamChat.getInstance(INSTANCE_KEY);

const connectUser = async (user: { id: string; name: string }) => {
	const { id, name } = user;
	try {
		await client.connectUser(
			{
				id: id,
				name: name,
			},
			USER_SETUP_KEY
		);
	} catch (error) {}
};

const disconnetUser = async () => {
	await client.disconnectUser();
};

export { client, connectUser, disconnetUser };
