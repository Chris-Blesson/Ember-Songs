module.exports = function() {
  var ENV = {
    s3: {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET
    }
  };

  return ENV;
};
