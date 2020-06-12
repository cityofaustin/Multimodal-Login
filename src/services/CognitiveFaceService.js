import fetch from 'node-fetch';

class CognitiveFaceService {
    static subscriptionKey = '75e66bae510f44e3bce8035780785103';
    static subscriptionKey2 = 'c3586e6f88eb491185dce9bf2fdcc9e1';
    static uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';
    static params = {
      'returnFaceId': 'true',
      'returnFaceLandmarks': 'false',
      'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
          'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
    };

    static async detect(imageUrl) {

        let input = new URL(this.uriBase);
        for(const key in this.params) {
          input.searchParams.append(key, this.params[key]);
        }

        const init = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Ocp-Apim-Subscription-Key' : this.subscriptionKey
            },
            body: JSON.stringify({url: imageUrl})
        }

        const httpResponse = await fetch(input, init);
        const jsonResponse = await httpResponse.json();
        return jsonResponse;
    }
}

export default FaceDetection;
