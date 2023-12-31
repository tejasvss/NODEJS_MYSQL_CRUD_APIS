import { contentService } from "../../services/index.js";
import { branchService } from "../../services/index.js";
/**
Add favorite facility 
@param req
@param res
@param next
*/

export const fetchContent = async (req, res, next) => {
    try {


        let { date, content_id, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status } = req.query;
        const data = {
            date, content_id, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data: JSON.stringify(json_data), status
        };

        console.log({ json_data, type: typeof json_data })
        let result = await contentService.getContent(data);
        console.log({ result })
        if (!result.length && serialNumber) {
            if (!branchCode) {
                branchCode = await branchService.getBranchCode({ serialNumber });
                if (!branchCode) throw Error("No branch code found for given serialNumber")
            }

            result = await contentService.insertContent({ date, orgId, branchCode, serialNumber, pageName, url, documentName, type, category, json_data, status })
            console.log({ result })
            if (result) {
                result = await contentService.getContent({ content_id: result.insertId });
            }
        }

        // Send response
        res.status(200).send({
            status: 200,
            length: result.length,
            message: "Fetching Success",
            result
        });
    }
    catch (error) {
        // Send response
        res.status(400).send({
            status: 400,
            errorMessage: error.message,
            length: 0,
            result: {}
        });
    }
}

