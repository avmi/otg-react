'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.default = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
  };

  dynamoDb.scan(params)
          .promise()
          .then(res => {
            const data = res.Items;

            console.log('data', data);

            callback(null, {
              statusCode: 200,
              body: JSON.stringify(data),
            });
          });
};
