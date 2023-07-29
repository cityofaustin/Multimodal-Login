import crypto from "crypto";

import common from "../common/common";

const ENC_KEY = process.env.AUTH_SECRET.padEnd(32, "0");
const IV = "5183666c72eec9e4";

async function store(guid, key) {
  return storeToDb(guid, key);
}
async function retrieve(guid) {
  return retrieveFromDb(guid);
}

async function storeToDb(guid, key) {
  let cipher = crypto.createCipheriv("aes-256-cbc", ENC_KEY, IV);
  let encryptedKey = cipher.update(key, "utf8", "hex");
  encryptedKey += cipher.final("hex");

  await common.dbClient.store(guid, encryptedKey);
}

async function retrieveFromDb(guid) {
  const keyObj = await common.dbClient.retrieve(guid);

  let decipher = crypto.createDecipheriv("aes-256-cbc", ENC_KEY, IV);

  let decryptedKey = decipher.update(keyObj.encryptedKey, "hex", "utf8");
  decryptedKey += decipher.final("utf8");

  return decryptedKey;
}

const secureKeyStorage = {
  store,
  retrieve,
};

export default secureKeyStorage;
