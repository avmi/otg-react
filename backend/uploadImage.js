'use strict';

const fs = require('fs');
const nanoId = require('nanoid');
const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.default = (event, context, callback) => {
  const file = event.body;
  const b64String = request.base64String;
  const buffer = new Buffer(b64String, 'base64');
  const fileMime = fileType();

  const fileExt = filename.split('.').pop();
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: nanoid() + `.${fileExt}`,
    Body: buffer,
  }

  S3.putObject(params)
    .promise()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'uploadImage',
      },
      null,
      2
    ),
  };
};
