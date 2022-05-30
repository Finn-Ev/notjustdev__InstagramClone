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
    console.log(e);
    return false;
  }
};

const saveUser = async (user) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();
  const params = {
    TableName,
    Item: {
      ...user,
      createdAt: dateStr,
      updatedAt: dateStr,
      _lastChangedAt: timestamp,
      _version: 1,
      __typename: "User",
    },
  };
  try {
    await documentClient.put(params).promise();
  } catch (e) {
    console.log(e);
  }
};

exports.handler = async (event) => {
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

  if (!(await checkIfUserExists(newUser.id))) {
    await saveUser(newUser);
    console.log(`User ${newUser.id} has been saved to the DB`);
  } else {
    console.log(`User ${newUser.id} already exists`);
  }

  return event;
};
