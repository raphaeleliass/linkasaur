import "dotenv/config";
import { Hono } from "hono";
import app from "@/app";

export const hono = new Hono();

export default app;
