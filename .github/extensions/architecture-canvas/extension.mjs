import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { joinSession, createCanvas, CanvasError } from "@github/copilot-sdk/extension";
import { createArchitectureCanvas } from "./lib/canvas.mjs";

let session;
const canvas = createArchitectureCanvas({
    createCanvas,
    CanvasError,
    getSession: () => session,
    root: dirname(fileURLToPath(import.meta.url)),
});

session = await joinSession({ canvases: [canvas] });
