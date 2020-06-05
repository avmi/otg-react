'use strict';

const {nanoid} = require('nanoid');

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.default = (event, context, callback) => {
  const requestBody = JSON.parse(event.body);
  const title = requestBody.title;
  const data = requestBody.data;

  const now = new Date();
  const id = nanoid();

  const item = {
    DocumentId: id,
    Title: title || id,
    Data: data || {},
    CreatedAt: now.toISOString(),
  };

  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: item,
  };

  dynamoDb.put(params)
    .promise()
    .then(res => {
      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Key: {
          "DocumentId": id,
        },
      };

      dynamoDb.get(params)
              .promise()
              .then(res => {
                callback(null, {
                  statusCode: 200,
                  body: JSON.stringify(res.Item),
                });
              })
    });
};
