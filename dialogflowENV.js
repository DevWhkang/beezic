import { DIALOGFLOW_PRIVATE_KEY_ID, DIALOGFLOW_PRIVATE_KEY } from '@dotenv';

console.log(DIALOGFLOW_PRIVATE_KEY_ID);
console.log(DIALOGFLOW_PRIVATE_KEY);

const dialogflowConfig = {
  type: 'service_account',
  project_id: 'beezic-9a910',
  private_key_id: DIALOGFLOW_PRIVATE_KEY_ID,
  private_key: DIALOGFLOW_PRIVATE_KEY,
  client_email: 'dialogflow-tqgiay@beezic-9a910.iam.gserviceaccount.com',
  client_id: '110709841794467425345',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/dialogflow-tqgiay%40beezic-9a910.iam.gserviceaccount.com',
};

export default dialogflowConfig;
