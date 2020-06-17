import CognitiveFaceService from "./CognitiveFaceService.js";
import StringUtil from "../util/StringUtil.js";
import path from "path";
import { response } from "express";

describe("CognitiveFaceService", () => {
  it("detects faces in the image", async () => {
    const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
    const response = await CognitiveFaceService.detectFromUrl(imageUrl);
    console.log(JSON.stringify(response));
    expect(response).toBeTruthy();
  });

  it("detects faces in the image from data url", async () => {
    // console.log(__dirname); // /Users/adam/git/coa/multimodal-login/src/services
    // '/src/services/mocks/personOneFaceOne.txt'
    const imageUrl = await StringUtil.stringFromFile(path.resolve("src", "services", "mocks", "personTwoFaceOne.txt"));
    // console.log(imageUrl);
    const response = await CognitiveFaceService.detectFromDataUrl(imageUrl);
    console.log(JSON.stringify(response));
    expect(response).toBeTruthy();
  });

  it("verifies that two faces closely match", async() => {
    const response = await CognitiveFaceService.verifyFaceToFace("deb8e7b5-d0e9-4ac1-99c4-3d4c4bc4b209", "1aab37d9-410a-48e1-afca-eb001105a97a");
    console.log(JSON.stringify(response));
    expect(response.isIdentical).toBeTruthy();
  });

  it("verifies that two faces don't match", async() => {
    const response = await CognitiveFaceService.verifyFaceToFace("deb8e7b5-d0e9-4ac1-99c4-3d4c4bc4b209", "87c8e88a-5a2f-48e6-be13-0045f98af6d1");
    console.log(JSON.stringify(response));
    expect(response.isIdentical).toBeFalsy();
  });

  it("verifies a face to a username", async() => {
    const base64Image = await StringUtil.stringFromFile(path.resolve("src", "services", "mocks", "personTwoFaceThree.txt"));
    const detectionResponse = await CognitiveFaceService.detectFromDataUrl(base64Image);
    console.log(detectionResponse);
    const response = await CognitiveFaceService.verifyFaceToUsername(detectionResponse[0].faceId, 'becky');
    console.log(response);
    // { isIdentical: true, confidence: 0.96075 }
  });

  // TODO: turning of until we get db working in unit tests.
  // it("registers a face to a username", async() => {
  //   const base64Image = await StringUtil.stringFromFile(path.resolve("src", "services", "mocks", "personTwoFaceOne.txt"));
  //   const response = await CognitiveFaceService.registerFaceToUsername(base64Image, 'becky');
  //   console.log(JSON.stringify(response));
  //   // e.g.     {"persistedFaceId":"759614cb-ed70-4da6-b0d7-a23485c7b4b6"}
  // }, 10000);

  it("verifies face to username", async() => {
    const response = await CognitiveFaceService.verifyFaceToUsername('', 'test');
  });

  it("gets a person group in account", async() => {
    const response = await CognitiveFaceService.getPersonGroup('mypasstest2');
    console.log(JSON.stringify(response));
  });

  it("lists person groups in account", async() => {
    const response = await CognitiveFaceService.personGroupList();
    console.log(JSON.stringify(response));
  }, 10000);

  it("lists person groups persons in account", async() => {
    const response = await CognitiveFaceService.personGroupPersonList('mypasstest');
    console.log(response);
  }, 10000);

});
