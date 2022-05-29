/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppSyncId = process.env.API_NOTJUSTPHOTOS_GRAPHQLAPIIDOUTPUT;
const TableName = `User-${AppSyncId}-${env}`;

const checkIfUserExists = (id) => {
  const params = {
    TableName,
    Key: {
      id,
    },
  };
  try {
    const response = documentClient.get(params).promise();
    return !!response?.Item;
  } catch (e) {
    return false;
  }
};

const saveUser = (user) => {
  const params = {
    TableName,
    Item: {
      ...user,
      createdAt: Date.toISOString(),
      updatedAt: Date.toISOString(),
      _lastChangedAt: Date.now(),
      _version: 1,
      __typename: "User",
    },
  };

  return documentClient.put(params).promise();
};

exports.handler = async (event, context) => {
  if (!event.request?.userAttributes) {
    console.log("no user attributes");
    return;
  }
  const { sub, name, email } = event.request.userAttributes;

  const newUser = {
    id: sub,
    name,
    email,
  };

  if (!checkIfUserExists(newUser.id)) {
    await saveUser(newUser);
  }

  return event;
};
