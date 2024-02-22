const commonService = require('../services/commonService')

class commonController{
    static async intialize(req, res){
        try {
            const data = commonService.intializeCoversation(req.params.id, req.body.content);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = commonController;