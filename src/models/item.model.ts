import { Model } from "objection";
import { v4 as uuidv4 } from "uuid";

export interface Item {
	id: string;
	email: string;
	name: string;
	status?: "Happy" | "Sad";
	phoneNumbers: string[];
}

export interface ItemModel extends Item {
	id: string;
}

export class ItemModel extends Model {
	static tableName = "item";

	private beforeInsert = () => {
		if (!this.id) {
			this.id = "item-" + uuidv4();
		}
	};
}

// private stringifyBeforeInsert = () => {
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   // @ts-ignore
//   this.lastSeen = JSON.stringify(this.lastSeen);
//   // @ts-ignore
//   this.physicalInterface = JSON.stringify(this.physicalInterface);
//   // @ts-ignore
//   this.advertisedServiceSets = JSON.stringify(this.advertisedServiceSets);
//   // @ts-ignore
//   this.connections = JSON.stringify(this.connections);
//   // @ts-ignore
//   this.actions = JSON.stringify(this.actions);
// };

// async $beforeInsert(queryContext: QueryContext): Promise<any> {
//   const superRes = await super.$beforeInsert(queryContext);
//   this.stringifyBeforeInsert();
//   return superRes;
// }

// async $afterFind(queryContext: QueryContext): Promise<any> {
//   const superRes = await super.$afterFind(queryContext);

//   this.lastSeen = JSON.parse(this.lastSeen as any);
//   this.physicalInterface = JSON.parse(this.physicalInterface as any);
//   this.advertisedServiceSets = JSON.parse(this.advertisedServiceSets as any);
//   this.connections = JSON.parse(this.connections as any);
//   this.isTarget = !!this.isTarget;
//   this.exploited = !!this.exploited;

//   return superRes;
// }
