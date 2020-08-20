import jose from 'node-jose';

if (process.env.BROWSER) {
  const keystore = jose.JWK.createKeyStore();
  const props = {
    alg: 'RSA',
    use: 'enc',
  };
  keystore.generate('RSA', 2048, props).then((keyObj) => {
    self.postMessage(keyObj.toJSON(true));
  });
}
