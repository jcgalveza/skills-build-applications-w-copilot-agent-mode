"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCollectionRouter = void 0;
const express_1 = require("express");
const createCollectionRouter = (resource) => {
    const router = (0, express_1.Router)();
    router.get('/', (_request, response) => {
        const payload = {
            resource,
            items: [],
        };
        response.json(payload);
    });
    return router;
};
exports.createCollectionRouter = createCollectionRouter;
