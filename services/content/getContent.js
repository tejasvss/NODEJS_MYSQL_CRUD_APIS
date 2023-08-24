// import { executeQuery } from "../executeQuery.js";
// import { TABLES } from "../../utils/constants.js";

// // Get count of all facility
// export const getContent = async (reqQuery) => {

//     let { date, content_id, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status } = reqQuery;

//     let whereQuery = "is_Deleted = 0 ";

//     if (json_data) {
//         const jsonData = JSON.parse(json_data);
//         whereQuery += ' AND json_data  = ?';
//         queryParams.push('json_data');
//         queryValues.push(JSON.stringify(jsonData)); // Convert JSON object to string
//     }

//     if (orgId) {
//         whereQuery += ' AND orgId  = "' + orgId + '"';
//     }

//     if (content_id) {
//         whereQuery += ' AND id  = ' + content_id + '';
//     }

//     if (status) {
//         whereQuery += ' AND status  = ' + status + '';
//     }

//     if (date) {
//         whereQuery += ' AND date  = "' + date + '"';
//     }

//     if (category) {
//         whereQuery += ' AND category  = "' + category + '"';
//     }

//     if (branchCode) {
//         whereQuery +=
//             ' AND branchCode = "' + branchCode + '"';
//     }

//     if (serialNumber) {
//         whereQuery +=
//             ' AND serialNumber = "' + serialNumber + '"';
//     }

//     if (pageName) {
//         whereQuery +=
//             ' AND pageName = "' + pageName + '"';
//     }

//     if (reqQuery.gender_codename_) {
//         whereQuery +=
//             ' AND url = "' + reqQuery.gender_codename_ + '"';
//     }

//     if (documentName) {
//         whereQuery +=
//             ' AND documentName  = "' + documentName + '"';
//     }

//     if (type) {
//         whereQuery += ' AND type  = "' + type + '"';
//     }

//     const query = `SELECT * from ${TABLES.CONTENT_TABLE} where ${whereQuery}`;
//     console.log({ query })

//     const result = await executeQuery(query);
//     return result;
// };


import { executeQuery } from "../executeQuery.js";
import { TABLES } from "../../utils/constants.js";

// Get content based on query parameters
export const getContent = async (reqQuery) => {
    let whereQuery = "is_Deleted = 0 ";

    const queryParams = [];
    const queryValues = [];

    if (reqQuery.orgId) {
        whereQuery += 'AND orgId = ? ';
        queryParams.push(reqQuery.orgId);
    }

    if (reqQuery.content_id) {
        whereQuery += 'AND id = ? ';
        queryParams.push(reqQuery.content_id);
    }

    if (reqQuery.status) {
        whereQuery += 'AND status = ? ';
        queryParams.push(reqQuery.status);
    }

    if (reqQuery.date) {
        whereQuery += 'AND date = ? ';
        queryParams.push(reqQuery.date);
    }

    if (reqQuery.category) {
        whereQuery += 'AND category = ? ';
        queryParams.push(reqQuery.category);
    }

    if (reqQuery.branchCode) {
        whereQuery += 'AND branchCode = ? ';
        queryParams.push(reqQuery.branchCode);
    }

    if (reqQuery.serialNumber) {
        whereQuery += 'AND serialNumber = ? ';
        queryParams.push(reqQuery.serialNumber);
    }

    if (reqQuery.pageName) {
        whereQuery += 'AND pageName = ? ';
        queryParams.push(reqQuery.pageName);
    }

    if (reqQuery.documentName) {
        whereQuery += 'AND documentName = ? ';
        queryParams.push(reqQuery.documentName);
    }

    if (reqQuery.type) {
        whereQuery += 'AND type = ? ';
        queryParams.push(reqQuery.type);
    }

    if (reqQuery.json_data) {
        const jsonData = JSON.parse(reqQuery.json_data);
        whereQuery += 'AND json_data = ? ';
        queryParams.push(jsonData);
    }

    const query = `SELECT * FROM ${TABLES.CONTENT_TABLE} WHERE ${whereQuery}`;
    console.log({ query });

    const result = await executeQuery(query, queryParams);
    return result;
};

