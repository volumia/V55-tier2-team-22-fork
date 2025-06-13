import express from "express";
import serverless from "serverless-http";
import getResources from "#src/routes/getResources";
import { preloadCache } from "#src/cache/resourceCache";

const app = express();

preloadCache();
app.use("/api/data", getResources);

export const handler = serverless(app);
