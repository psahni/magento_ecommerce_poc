import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql/types";
import "dotenv/config";

const endPoint = "https://magento.test/graphql";
const {
  MAGENTO_CUSTOMER_GROUP,
  MAGENTO_ENVIRONMENT_ID,
  MAGENTO_STORE_CODE,
  MAGENTO_STORE_VIEW_CODE,
  MAGENTO_WEBSITE_CODE,
  X_API_KEY,
} = process.env;

if (
  !MAGENTO_CUSTOMER_GROUP ||
  !MAGENTO_ENVIRONMENT_ID ||
  !MAGENTO_STORE_CODE ||
  !MAGENTO_STORE_VIEW_CODE ||
  !MAGENTO_WEBSITE_CODE ||
  !X_API_KEY
) {
  throw new Error("Required environment variables are not set");
}

//Refer: https://developer.adobe.com/commerce/services/graphql/catalog-service/categories/#required-headers

const client = new GraphQLClient(endPoint, {
  fetch,
  headers: {
    "Magento-Customer-Group": MAGENTO_CUSTOMER_GROUP,
    "Magento-Environment-Id": MAGENTO_ENVIRONMENT_ID,
    "Magento-Store-Code": MAGENTO_STORE_CODE,
    "Magento-Store-View-Code": MAGENTO_STORE_VIEW_CODE,
    "Magento-Website-Code": MAGENTO_WEBSITE_CODE,
    "x-api-key": X_API_KEY,
    "Content-Type": "application/json",
  },
  errorPolicy: "all",
});

export const sdk = getSdk(client);
