/**
 * Checks if the database exists at the given host. If not it will attempt to create it
 */

import Database from "better-sqlite3";
import { existsSync } from "fs";

(async () => {
	try {
		console.log("Checking for sqlite3 database.");
		if (existsSync("packout.db")) {
			console.log("Database already exists.");
		} else {
			const db = new Database("packout.db", { verbose: true });
			db.pragma("journal_mode = WAL");
			db.close();
			console.log("Database created.");
		}
	} catch (e) {
		console.error("Error:", e.message);
	}
})();
