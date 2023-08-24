import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";

// Get count of all facility
export const getBranchCode = async (reqQuery) => {

    let { serialNumber } = reqQuery;

    let whereQuery = "";

    if (serialNumber) {
        whereQuery += ' where serialNumber  = "' + serialNumber + '"';
    }

    const query = `SELECT * from ${TABLES.BRANCH_TABLE} ${whereQuery}`;
    console.log({ query })
    const result = await executeQuery(query);
    console.log({ result })
    return (result.length) ? result[0].branchCode : null;
};
