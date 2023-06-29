module.exports = {
  region: 'us-west-2',
  handler: 'index.handler',
  role: 'arn:aws:iam::xxxxxxxxxxxx:role/lambda_s3_exec_role',
  functionName: 'gulpSample',
  timeout: 10,
  nodejs: '16.10.x'
};
