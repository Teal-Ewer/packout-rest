export type ItemReqBody = {
	email: string;
	name: string;
	status?: "Happy" | "Sad";
	phoneNumbers: string[];
};
