import process from "node:process";

import { analyzeMetafile, build, stop } from "esbuild";

try {
    const { metafile } = await build({
        entryPoints: {
            main: "src/main.ts",
        },
        outdir: "dist",
        outExtension: { ".js": ".mjs" },

        format: "esm",
        platform: "node",
        target: "node22",

        bundle: true,
        minify: true,
        keepNames: true,
        sourcemap: true,
        metafile: true,

        external: [],
        define: {
            "process.env.NODE_ENV": "\"production\"",
        },
        banner: {
            "js": `
import { createRequire } from "node:module";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`,
        },
    });
    await stop();

    if (metafile) {
        const meta = await analyzeMetafile(metafile);
        console.log(meta);
    }
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}
