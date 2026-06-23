"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelRouter = void 0;
const express_1 = require("express");
const createModelRouter = (resource, entityModel) => {
    const router = (0, express_1.Router)();
    router.get('/', async (_request, response, next) => {
        try {
            const items = await entityModel.find().sort({ createdAt: 1 }).lean();
            response.json({ resource, items });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
};
exports.createModelRouter = createModelRouter;
