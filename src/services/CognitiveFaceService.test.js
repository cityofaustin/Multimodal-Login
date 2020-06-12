import FaceDetection from "./CognitiveFaceService.js";

describe("CognitiveFaceService", () => {
  it("detects faces in the image", async () => {
    const imageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Dagestani_man_and_woman.jpg';
    const response = await FaceDetection.detect(imageUrl);
    console.log(JSON.stringify(response));
    expect(response).toBeTruthy();
  });
});
