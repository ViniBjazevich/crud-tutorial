import { ListTablesCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  UpdateCommand,
  PutCommand,
  DynamoDBDocumentClient,
  ScanCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import crypto from "crypto";

const client = new DynamoDBClient({ region: "us-west-1" });
const docClient = DynamoDBDocumentClient.from(client);

export const fetchTasks = async () => {
  const command = new ScanCommand({
    ProjectionExpression: "id, #name, completed",
    ExpressionAttributeNames: { "#name": "name" },
    TableName: "Tasks",
  });

  const response = await docClient.send(command);
  for (const task of response.Items) {
    console.log(`${task.id} - (${task.name}, ${task.completed})`);
  }
  return response;
};

export const createTask = async ({ name, completed }) => {
  const uuid = crypto.randomUUID();
  const command = new PutCommand({
    TableName: "Tasks",
    Item: {
      id: uuid,
      name,
      completed,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

export const updateTask = async ({ id, name, completed }) => {
  const command = new UpdateCommand({
    TableName: "Tasks",
    Key: {
      id,
    },
    UpdateExpression: "set #name = :n, completed = :c",
    ExpressionAttributeValues: {
      ":n": name,
      ":c": completed,
    },
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ReturnValues: "ALL_NEW",
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

export const deleteTask = async ({ id }) => {
  const command = new DeleteCommand({
    TableName: "Tasks",
    Key: {
      id,
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

// createTask("dishes", false);

// updateTask();

// fetchTasks();

// deleteTask({ id: "99341a94-b882-4dc1-a06f-9a2b589f22b2" });

/*
  Helpful docs:

  Create -
  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_PutItem_section.html

  Read -
  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_Scan_section.html

  Update -
  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_UpdateItem_section.html

  Delete -
  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/example_dynamodb_DeleteItem_section.html
*/
