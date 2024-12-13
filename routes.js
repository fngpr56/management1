import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getSingleNote,
  updateNote,
} from "./src/resources/notes/notes.controllers.js";

const router = express.Router();

router.route("/app")
    .get((req, res) => {
        res.send("Hi 💋");
    })
    .post((req, res) => {
        res.send("Handling POST request for the root route");
    });

export default router;
