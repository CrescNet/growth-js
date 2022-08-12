var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

require('dotenv-flow').config();

// FTP parameters like "FTP_USER" should be set in .env.local

var config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  localRoot: __dirname + '/dist/spa/',
  remoteRoot: process.env.FTP_REMOTE_ROOT,
  include: ['*', '**/*'],
  exclude: ['dist/**/*.map', 'node_modules/**', 'node_modules/**/.*', '.git/**'],
  deleteRemote: true,
  forcePasv: true,
  sftp: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err));
