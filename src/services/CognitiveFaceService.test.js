import CognitiveFaceService from "./CognitiveFaceService.js";
import StringUtil from "../util/StringUtil.js";
import path from "path";

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
    // console.log(JSON.stringify(response));
    expect(response.isIdentical).toBeTruthy();
  });

  it("verifies that two faces don't match", async() => {
    const response = await CognitiveFaceService.verifyFaceToFace("deb8e7b5-d0e9-4ac1-99c4-3d4c4bc4b209", "87c8e88a-5a2f-48e6-be13-0045f98af6d1");
    // console.log(JSON.stringify(response));
    expect(response.isIdentical).toBeFalsy();
  });


});
