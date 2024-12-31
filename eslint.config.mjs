import js from "@eslint/js";
import ts from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        },
    },
    {
        ignores: [
            "node_modules/",
            "dist/",
        ],
    },
];
