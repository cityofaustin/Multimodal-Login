import common from '../common/common';

let fetch;
if (!process.env.BROWSER) {
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}

class CognitiveFaceService {
  // ref: api https://eastus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236
  // adam's trial azure face api, expired 6/19/2020
  // https://azure.microsoft.com/en-us/try/cognitive-services/my-apis/
  // static uriBase = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0';
  // static subscriptionKey = '75e66bae510f44e3bce8035780785103';
  // static subscriptionKey2 = 'c3586e6f88eb491185dce9bf2fdcc9e1';
  // https://portal.azure.com/
  // adam c's personal azure face api
  // ref: https://azure.microsoft.com/en-us/pricing/details/cognitive-services/face-api/
  // NOTE: the api is on the free plan, which mean's make api calls sparingly. Specifically no more than 20 per minute and 30,000 free per month.
  static uriBase =
    'https://face-api-mypass.cognitiveservices.azure.com/face/v1.0';
  static subscriptionKey = '8c0198ff8f774e5eacbe5f18ab29f49a';
  static subscriptionKey2 = '90ee32d0112e47fa912cd3f709ca512c';
  static personGroupId = 'mypasstest';

  static params = {
    recognitionModel: 'recognition_02', // "recognition_02" is recommended since its overall accuracy is improved compared with "recognition_01".
    returnFaceId: 'true',
    returnFaceLandmarks: 'false',
    returnRecognitionModel: 'true',
    // NOTE: not using these as not needed but leaving for reference.
    // returnFaceAttributes:
    //   'age,gender,headPose,smile,facialHair,glasses,' +
    //   'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
  };

  // Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.
  static async detectFromUrl(imageUrl) {
    let input = new URL(this.uriBase + '/detect');
    for (const key in this.params) {
      input.searchParams.append(key, this.params[key]);
    }

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: JSON.stringify({ url: imageUrl }),
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  static async detectFromBlob(blob) {
    // Browser only, nodejs doesn't suppoort blobs
    let input = new URL(this.uriBase + '/detect');
    for (const key in this.params) {
      input.searchParams.append(key, this.params[key]);
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: blob,
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();

    return jsonResponse;
  }

  static async detectFromDataUrl(b64Str) {
    // Server only, nodejs Buffer type for testing
    // remove header parts
    const data = b64Str.replace(/^data:image\/\w+;base64,/, '');
    const bufferData = new Buffer(data, 'base64');

    let input = new URL(this.uriBase + '/detect');
    for (const key in this.params) {
      input.searchParams.append(key, this.params[key]);
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: bufferData,
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();

    return jsonResponse;
  }

  // Verify whether two faces belong to a same person
  static async verifyFaceToFace(faceId1, faceId2) {
    let input = new URL(this.uriBase + '/verify');
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: JSON.stringify({ faceId1, faceId2 }),
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // Part of the login methods on client
  static async verifyFaceToUsername(dataBuffer, username) {
    const faceId = (await this.detectFromBlob(dataBuffer))[0].faceId;
    let matchedUser = await common.dbClient.findUserByUserName(username);
    return await this.verifyFaceToPerson(
      faceId,
      matchedUser.facePersonId,
      this.personGroupId
    );
  }

  // Verify whether one face matches person
  static async verifyFaceToPerson(faceId, personId, personGroupId) {
    let input = new URL(this.uriBase + '/verify');
    console.log({ faceId, personId, personGroupId });
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: JSON.stringify({ faceId, personId, personGroupId }),
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  static async registerFaceToUsername(dataBuffer, username) {
    // determine if we need to create a new person group
    const personGroupResponse = await this.getPersonGroup(this.personGroupId);
    console.log(JSON.stringify(personGroupResponse));
    if (
      personGroupResponse.error &&
      personGroupResponse.error.code === 'PersonGroupNotFound'
    ) {
      console.log('create group then');
      const responseCreatePersonGroup = await this.createPersonGroup(
        this.personGroupId
      );
      console.log(JSON.stringify(responseCreatePersonGroup));
    }
    // TODO grab oathusers by username
    // let matchedUser = await common.dbClient.findUserByUserName(username);
    // console.log(matchedUser);
    // let personId = matchedUser.facePersonId; // 03773eb6-138f-449a-913a-7f8515451adf fictional becky person
    // const personGroupPersonResponse = await this.getPersonGroupPerson(
    // this.personGroupId,
    // personId
    // );
    // console.log(personGroupPersonResponse);
    // if (!personGroupPersonResponse.error) { // delete it so we can add a person again.
    // await this.deletePersonGroupPerson(personGroupPersonResponse.personId);
    // }
    // if(personGroupPersonResponse.error && personGroupPersonResponse.error.code === 'PersonNotFound') {
    console.log({personGroupId: this.personGroupId, username});
    const responseCreatePersonGroupPerson = await this.createPersonGroupPerson(
      this.personGroupId,
      username
    );
    console.log('---created new user');
    console.log(responseCreatePersonGroupPerson);
    const personId = responseCreatePersonGroupPerson.personId;
    // matchedUser.facePersonId = personId;
    // matchedUser = await common.dbClient.saveUser(matchedUser);
    // console.log('---saved user');
    // }
    // create face and associate with username/person
    await this.addFacePersonGroupPerson(
      this.personGroupId,
      personId,
      dataBuffer
    );
    return responseCreatePersonGroupPerson;
  }

  // person group create
  static async createPersonGroup(personGroupId) {
    let input = new URL(this.uriBase + '/persongroups/' + personGroupId);

    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: JSON.stringify({
        name: personGroupId,
        userData: 'the main group for the mypass app',
        recognitionModel: 'recognition_02',
      }),
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // person group get
  static async getPersonGroup(personGroupId) {
    let input = new URL(this.uriBase + '/persongroups/' + personGroupId);
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // person group train TODO:

  static async getPersonGroupPerson(personGroupId, personId) {
    let input = new URL(
      this.uriBase + '/persongroups/' + personGroupId + '/persons/' + personId
    );
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // person group person create
  static async createPersonGroupPerson(personGroupId, username) {
    let input = new URL(
      this.uriBase + '/persongroups/' + personGroupId + '/persons'
    );
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body: JSON.stringify({
        name: username.length <= 0 ? 'generic-user' : username,
        userData: 'a registered mypass user',
      }),
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // person group person add face
  static async addFacePersonGroupPerson(personGroupId, personId, imageData) {
    let input = new URL(
      this.uriBase +
        '/persongroups/' +
        personGroupId +
        '/persons/' +
        personId +
        '/persistedFaces'
    );
    let body;
    if (!process.env.BROWSER) {
      // const data = imageData.replace(/^data:image\/\w+;base64,/, '');
      // body = new Buffer(data, 'base64');
      body = imageData;
    } else {
      // then it's a blob and no further processing is needed
      body = imageData;
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
      body,
    };
    const httpResponse = await fetch(input, init);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  // person group person list
  static async personGroupPersonList(personGroupId) {
    let input = new URL(
      this.uriBase + '/persongroups/' + personGroupId + '/persons'
    );
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
    };
    const httpResponse = await fetch(input, init);
    console.log(httpResponse.status);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }

  static async deletePersonGroupPerson(personId) {
    let input = new URL(
      this.uriBase +
        '/persongroups/' +
        this.personGroupId +
        '/persons/' +
        personId
    );
    const init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
    };
    const httpResponse = await fetch(input, init);
    console.log(httpResponse.status);
    return true;
  }

  static async personGroupList() {
    let input = new URL(this.uriBase + '/persongroups');
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': this.subscriptionKey,
      },
    };
    const httpResponse = await fetch(input, init);
    console.log(httpResponse.status);
    const jsonResponse = await httpResponse.json();
    return jsonResponse;
  }
}

export default CognitiveFaceService;
