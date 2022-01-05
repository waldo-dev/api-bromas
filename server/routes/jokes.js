const router = require("express").Router();
const controller = require("../controllers/Jokes");

router.post("/new", controller.crearUno);
router.get("/", controller.getAll);
router.patch("/update/:jokeID", controller.editarPorId);
router.delete("/delete/:jokeID", controller.borrarPorId);
router.get("/random", controller.random);

module.exports = router;
