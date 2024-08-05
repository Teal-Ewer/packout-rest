import { ItemReqBody } from "../types";
import { Item, ItemModel } from "../models";

export const createItem = async (body: ItemReqBody): Promise<Item> => {
	return await ItemModel.query().insert(body);
};
