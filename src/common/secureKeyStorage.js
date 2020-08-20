const common = require("../common/common");
const Crypto = require("crypto");

module.exports = {
  store: async (guid, key) => {
    return module.exports.storeToDb(guid, key);
  },
  retrieve: async (guid) => {
    return module.exports.retrieveFromDb(guid);
  },

  storeToDb: async (guid, key) => {
    let cipher = Crypto.createCipher("aes-256-cbc", process.env.AUTH_SECRET);
    let encryptedKey = cipher.update(key, "utf8", "hex");
    encryptedKey += cipher.final("hex");

    await common.dbClient.store(guid, encryptedKey);
  },

  retrieveFromDb: async (guid) => {
    const keyObj = await common.dbClient.retrieve(guid);

    let decipher = Crypto.createDecipher(
      "aes-256-cbc",
      process.env.AUTH_SECRET
    );

    let decryptedKey = decipher.update(keyObj.encryptedKey, "hex", "utf8");
    decryptedKey += decipher.final("utf8");

    return decryptedKey;
  },
};
