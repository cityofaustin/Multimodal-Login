import Web3 from "web3";
import EthCrypto from "eth-crypto";
// import { privateToPublic, toBuffer } from "ethereumjs-util";
// import { publicKeyCreate } from "ethereum-cryptography/secp256k1-compat.js";
import { utils as ethersUtils } from "ethers";
// import { ecdsaSign as secp256k1_sign } from "secp256k1";
import { publicKeyByPrivateKey, sign } from "./ethService";

describe("web3", () => {
  it("should be able to do these operations", () => {
    const web3 = new Web3();
    const privateKey =
      "0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07";
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    const { address } = account;
    const publicKey = publicKeyByPrivateKey(privateKey);
    expect(
      publicKey.startsWith(
        "bf1cc3154424dc22191941d9f4f50b063a2b663a2337e5548abea633c1d06ece"
      )
    ).toBeTruthy();
    expect(address).toBe("0x3f243FdacE01Cfd9719f7359c94BA11361f32471");
    // const message = address;
    const message = "foobar";
    const messageHash = EthCrypto.hash.keccak256(message);
    const signature = EthCrypto.sign(
      "0x107be946709e41b7895eea9f2dacf998a0a9124acbb786f0fd1a826101581a07", // privateKey
      messageHash // hash of message
    );
    // const messageHash = web3.eth.accounts.hashMessage(Buffer.from(message));
    const messageHash2 = ethersUtils.solidityKeccak256(["string"], ["foobar"]);
    // const messageHash = EthCrypto.hash.keccak256(message);
    // const signature2 = EthCrypto.sign(privateKey, messageHash);
    const signature2 = sign(privateKey, messageHash);
    expect(signature2).toBeTruthy();
    // > '0xc04b809d8f33c46ff80c44ba58e866ff0d5..'
    // web3.eth.accounts.recover()
  });
});
