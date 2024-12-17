import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/types";
import "dotenv/config";

const endPoint = "https://magento.test/graphql";

const client = new GraphQLClient(endPoint, {
  fetch,
  headers: {
    Authorization: `Bearer `,
  },
  errorPolicy: "all",
});

export const sdk = getSdk(client);
