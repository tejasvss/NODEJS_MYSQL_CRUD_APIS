import { contentService } from "../../services/index.js";

/**
Add favorite facility 
@param req
@param res
@param next
*/

export const updateContent = async (req, res, next) => {
    try {


        let { content_id, date, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status } = req.body;

        const data = {
            orgId, date, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status
        };
        let result = await contentService.updateContent(data, content_id);
        if (result) {
            result = await contentService.getContent({ content_id })
        }

        // Send response
        res.status(200).send({
            status: 200,
            result: result,
            message: "Update Success"
        });

    } catch (error) {
        res.status(400).send({
            status: 400,
            result: {},
            errorMessage: error.message
        });
    }
};
