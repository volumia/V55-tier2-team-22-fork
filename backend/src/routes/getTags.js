import express from "express";
import { HttpCacher } from "#src/cache/cacher";

const router = express.Router();
const cacher = new HttpCacher(
  "cache/tags",
  "https://seshatbe.up.railway.app/tags",
  3000,
  60
);
cacher.initializeCache();

router.get("/", (req, res) => {
  const data = cacher.get();
  if (data) {
    return res.json(data);
  }

  res
    .status(503)
    .json({
      error:
        "Data for this request is not available yet. Please try again shortly.",
    });
});

export default router;
