import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";
const endPoint = "https://magento.test/graphql";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [`${endPoint}`]: {
        headers: {
          Authorization: `Bearer `,
        },
      },
    },
  ],
  documents: "./src/data/graphql/**/*.graphql",
  generates: {
    "./src/data/graphql/types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        avoidOptionals: false,
        maybeValue: "T | undefined",
        skipTypename: true,
        onlyOperationTypes: true,
        dedupeFragments: true,
        inlineFragmentTypes: "combine",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};
export default config;
