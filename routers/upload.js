const aws = require("aws-sdk");
const { v1: uuid } = require("uuid");
const keys = require("../keys/keys");
const reqAuth = require("../middleware/reqAuth");

const s3 = new aws.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  signatureVersion: "v4",
  region: "eu-west-3"
});
module.exports = app => {
  app.get("/api/upload", reqAuth, (req, res) => {
    const key = `${req.id._id}/${uuid()}.jpeg`;
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "blogbacket",
        ContentType: "image/jpeg",
        Key: key
      },
      (err, url) => res.send({ key, url })
    );
  });
};
