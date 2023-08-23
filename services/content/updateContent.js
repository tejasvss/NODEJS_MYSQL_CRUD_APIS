import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";

export const updateContent = async (updateData, content_id) => {
    const query = `UPDATE ${TABLES.CONTENT_TABLE} SET ? WHERE id = ?`;
    console.log({ query })
    const result = await executeQuery(query, [updateData, content_id]);
    return result.affectedRows > 0;
};