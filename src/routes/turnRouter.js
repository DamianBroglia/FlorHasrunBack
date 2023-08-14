const {Router} = require ("express");
const {
    getAllTurnsHandler,
    deleteTurnHandler,
    getTurnByProductIdHandler,
    getTurnByUserIdHandler,
    getTurnsByDayHandler,
    postTurnHandler,
    putTurnHandler
} = require("../handlers/turnHandler");
const turnRouter =Router();


turnRouter.delete("/:turnId/:userId/:cancelAnyWay",  deleteTurnHandler);

turnRouter.get("/", getAllTurnsHandler);

turnRouter.get("/byProductId/:productId", getTurnByProductIdHandler);

turnRouter.get("/byUserId/:userId", getTurnByUserIdHandler);

turnRouter.get("/byDay/:date", getTurnsByDayHandler)

turnRouter.get("/byId/:id", getTurnsByDayHandler)

turnRouter.post("/", postTurnHandler)

turnRouter.put("/", putTurnHandler)

module.exports = turnRouter;