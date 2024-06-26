import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_PROD_REGION ? process.env.AWS_PROD_REGION : "",
  credentials: {
    accessKeyId: process.env.AWS_PROD_ACCESS_KEY ? process.env.AWS_PROD_ACCESS_KEY : "",
    secretAccessKey: process.env.AWS_PROD_SECRET_KEY ? process.env.AWS_PROD_SECRET_KEY : ""
  }
});
const dynamoClient = DynamoDBDocumentClient.from(client);

export default dynamoClient;