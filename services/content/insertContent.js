import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";


export const insertContent = async (data) => {

    const query = `INSERT INTO ${TABLES.CONTENT_TABLE} SET ?`;
    const result = await executeQuery(query, [data]);
    console.log({ insertContentResult: result })
    return result ? result : null;
};



