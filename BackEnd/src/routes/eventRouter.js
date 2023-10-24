import express from "express";
import authM from "../middleware/authM.js";
import {
  eventlist,
  eventpage,
  eventregistration,
  eventupload,
} from "../controllers/eventController.js";

const eventsRouter = express.Router();

eventsRouter.post("/eventsList", authM, eventlist);
eventsRouter.post("/eventsPage", authM, eventpage);
eventsRouter.post("/eventRegistration", authM, eventregistration);
eventsRouter.post("/eventsUpload", eventupload);

export default eventsRouter;
