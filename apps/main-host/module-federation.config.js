module.exports = {
  name: 'main-host',
  remotes: [
    'remote-app',
    ['angular-remote', 'http://localhost:4202/remoteEntry.mjs']
  ],
};
