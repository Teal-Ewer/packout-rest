import dotenv from "dotenv";
dotenv.config();

module.exports = {
	client: "better-sqlite3",
	connection: {
		filename: process.env.DB_FILE_PATH ?? "./packout.db",
		password: process.env.DB_PASSWORD ?? "system",
	},
	useNullAsDefault: true,
	migrations: {
		tableName: "knex_migrations",
	},
	seeds: {
		extension: "ts",
	},
};
