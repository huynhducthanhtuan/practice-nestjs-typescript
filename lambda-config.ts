import { AWS_LAMBDA_ROLE } from 'src/constants';

export default {
  region: 'ap-southeast-1',
  handler: 'index.handler',
  role: AWS_LAMBDA_ROLE,
  functionName: 'handler',
  timeout: 10,
  nodejs: '16.16.0'
};
