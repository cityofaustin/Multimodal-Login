// import { privateToPublic, toBuffer } from "ethereumjs-util";
import { publicKeyCreate } from "ethereum-cryptography/secp256k1-compat.js";
// import { utils as ethersUtils } from "ethers";
import secp256k1 from 'secp256k1';
const { ecdsaSign: secp256k1_sign } = secp256k1;

export function removeLeading0x(str) {
  if (str.startsWith("0x")) return str.substring(2);
  else return str;
}

export function addLeading0x(str) {
  if (!str.startsWith("0x")) return "0x" + str;
  else return str;
}

export function uint8ArrayToHex(arr) {
  return Buffer.from(arr).toString("hex");
}

export function hexToUnit8Array(str) {
  return new Uint8Array(Buffer.from(str, "hex"));
}

export function hexToBytes(hex) {
  hex = hex.slice(2);
  if (hex.length % 2 !== 0) {
    hex = padToEven(hex);
  }
  const byteLen = hex.length / 2;
  const bytes = new Uint8Array(byteLen);
  for (let i = 0; i < byteLen; i++) {
    const byte = parseInt(hex.slice(i * 2, (i + 1) * 2), 16);
    bytes[i] = byte;
  }
  return bytes;
}

export function publicKeyByPrivateKey(privateKey) {
  // const buffer = Buffer.from(privateKey.substring(2, 66), "hex");
  const privateKeyUint8Array = hexToBytes(privateKey);
  return Buffer.from(publicKeyCreate(privateKeyUint8Array, false))
    .toString("hex")
    .substring(2);
}

export function sign(privateKey, hash) {
  hash = addLeading0x(hash);
  if (hash.length !== 66)
    throw new Error("EthCrypto.sign(): Can only sign hashes, given: " + hash);

  const sigObj = secp256k1_sign(
    new Uint8Array(Buffer.from(removeLeading0x(hash), "hex")),
    new Uint8Array(Buffer.from(removeLeading0x(privateKey), "hex"))
  );

  const recoveryId = sigObj.recid === 1 ? "1c" : "1b";

  const newSignature =
    "0x" + Buffer.from(sigObj.signature).toString("hex") + recoveryId;
  return newSignature;
}
