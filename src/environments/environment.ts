const apiHost = 'taskbackend-nskp.onrender.com';
const authUrl = `https://${apiHost}/api/`;
const taskUrl=`https://${apiHost}/task/`;

const localHost='localhost:5000'
const localAuthUrl = `http://${localHost}/api/`;
const localTaskUrl=`http://${localHost}/task/`;

export const environment = {
  apiHost,
  authUrl,
  taskUrl,
  localHost,
  localAuthUrl,
  localTaskUrl
};