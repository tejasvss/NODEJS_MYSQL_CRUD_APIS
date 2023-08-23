import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";


export const insertContent = async (data) => {

    const query = `INSERT INTO ${TABLES.CONTENT_TABLE} SET ?`;
    console.log({ query })

    const result = await executeQuery(query, [data]);
    return result ? result : null;
};



