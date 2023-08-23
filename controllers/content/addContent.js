import { contentService } from "../../services/index.js";

/**
Add favorite facility 
@param req
@param res
@param next
*/

export const addContent = async (req, res, next) => {
    try {


        let { date, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status } = req.body;

        const data = {
            date, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data: JSON.stringify(json_data), status
        };
        let result = await contentService.insertContent(data);
        if (result) {
            result = await contentService.getContent({ content_id: result.insertId })
        }
        // Send response
        res.status(200).send({
            status: 200,
            message: "Insertion success",
            result
        });

    } catch (error) {
        res.status(400).send({
            status: 400,
            result: {},
            errorMessage: error.message
        });
    }
};
