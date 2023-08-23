import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";

// Get count of all facility
export const getContent = async (reqQuery) => {

    let { date, content_id, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status } = reqQuery;

    let whereQuery = "is_Deleted = 0 ";

    if (orgId) {
        whereQuery += ' AND orgId  = "' + orgId + '"';
    }

    if (content_id) {
        whereQuery += ' AND id  = ' + content_id + '';
    }

    if (date) {
        whereQuery += ' AND date  = "' + date + '"';
    }

    if (category) {
        whereQuery += ' AND category  = "' + category + '"';
    }

    if (json_data) {
        whereQuery += ' AND json_data  = "' + json_data + '"';
    }

    if (status) {
        whereQuery += ' AND status  = "' + status + '"';
    }

    if (branchCode) {
        whereQuery +=
            ' AND branchCode = "' + branchCode + '"';
    }

    if (serialNumber) {
        whereQuery +=
            ' AND serialNumber = "' + serialNumber + '"';
    }

    if (pageName) {
        whereQuery +=
            ' AND pageName = "' + pageName + '"';
    }

    if (reqQuery.gender_codename_) {
        whereQuery +=
            ' AND url = "' + reqQuery.gender_codename_ + '"';
    }

    if (documentName) {
        whereQuery +=
            ' AND documentName  = "' + documentName + '"';
    }

    if (type) {
        whereQuery += ' AND type  = "' + type + '"';
    }

    if (status) {
        whereQuery += ' AND status  = "' + status + '"';
    }


    const query = `SELECT * from ${TABLES.CONTENT_TABLE} where ${whereQuery}`;
    console.log({ query })
    const result = await executeQuery(query);

    return result;
};
