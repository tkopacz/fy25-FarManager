import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { joinSession, createCanvas, CanvasError } from "@github/copilot-sdk/extension";
import { createTriageCanvas } from "./lib/canvas.mjs";

let session;
const canvas = createTriageCanvas({
    createCanvas,
    CanvasError,
    getSession: () => session,
    root: dirname(fileURLToPath(import.meta.url)),
});

session = await joinSession({ canvases: [canvas] });
