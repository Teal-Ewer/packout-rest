import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("item", table => {
		table.increments("id");
		table.
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("item");
}
