"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _common = _interopRequireDefault(require("../common/common"));

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

















  // Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.
  static detectFromUrl(imageUrl) {var _this = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this.uriBase + '/detect');
      for (const key in _this.params) {
        input.searchParams.append(key, _this.params[key]);
      }

      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this.subscriptionKey },

        body: JSON.stringify({ url: imageUrl }) };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  static detectFromBlob(blob) {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {
      // Browser only, nodejs doesn't suppoort blobs
      let input = new URL(_this2.uriBase + '/detect');
      for (const key in _this2.params) {
        input.searchParams.append(key, _this2.params[key]);
      }
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': _this2.subscriptionKey },

        body: blob };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();

      return jsonResponse;})();
  }

  static detectFromDataUrl(b64Str) {var _this3 = this;return (0, _asyncToGenerator2.default)(function* () {
      // Server only, nodejs Buffer type for testing
      // remove header parts
      const data = b64Str.replace(/^data:image\/\w+;base64,/, '');
      const bufferData = new Buffer(data, 'base64');

      let input = new URL(_this3.uriBase + '/detect');
      for (const key in _this3.params) {
        input.searchParams.append(key, _this3.params[key]);
      }
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': _this3.subscriptionKey },

        body: bufferData };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();

      return jsonResponse;})();
  }

  // Verify whether two faces belong to a same person
  static verifyFaceToFace(faceId1, faceId2) {var _this4 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this4.uriBase + '/verify');
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this4.subscriptionKey },

        body: JSON.stringify({ faceId1, faceId2 }) };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // Part of the login methods on client
  static verifyFaceToUsername(dataBuffer, username) {var _this5 = this;return (0, _asyncToGenerator2.default)(function* () {
      const faceId = (yield _this5.detectFromBlob(dataBuffer))[0].faceId;
      let matchedUser = yield _common.default.dbClient.findUserByUserName(username);
      return yield _this5.verifyFaceToPerson(
      faceId,
      matchedUser.facePersonId,
      _this5.personGroupId);})();

  }

  // Verify whether one face matches person
  static verifyFaceToPerson(faceId, personId, personGroupId) {var _this6 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this6.uriBase + '/verify');
      console.log({ faceId, personId, personGroupId });
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this6.subscriptionKey },

        body: JSON.stringify({ faceId, personId, personGroupId }) };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  static registerFaceToUsername(dataBuffer, username) {var _this7 = this;return (0, _asyncToGenerator2.default)(function* () {
      // determine if we need to create a new person group
      const personGroupResponse = yield _this7.getPersonGroup(_this7.personGroupId);
      console.log(JSON.stringify(personGroupResponse));
      if (
      personGroupResponse.error &&
      personGroupResponse.error.code === 'PersonGroupNotFound')
      {
        console.log('create group then');
        const responseCreatePersonGroup = yield _this7.createPersonGroup(
        _this7.personGroupId);

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
      console.log({ personGroupId: _this7.personGroupId, username });
      const responseCreatePersonGroupPerson = yield _this7.createPersonGroupPerson(
      _this7.personGroupId,
      username);

      console.log('---created new user');
      console.log(responseCreatePersonGroupPerson);
      const personId = responseCreatePersonGroupPerson.personId;
      // matchedUser.facePersonId = personId;
      // matchedUser = await common.dbClient.saveUser(matchedUser);
      // console.log('---saved user');
      // }
      // create face and associate with username/person
      yield _this7.addFacePersonGroupPerson(
      _this7.personGroupId,
      personId,
      dataBuffer);

      return responseCreatePersonGroupPerson;})();
  }

  // person group create
  static createPersonGroup(personGroupId) {var _this8 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this8.uriBase + '/persongroups/' + personGroupId);

      const init = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this8.subscriptionKey },

        body: JSON.stringify({
          name: personGroupId,
          userData: 'the main group for the mypass app',
          recognitionModel: 'recognition_02' }) };


      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // person group get
  static getPersonGroup(personGroupId) {var _this9 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this9.uriBase + '/persongroups/' + personGroupId);
      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this9.subscriptionKey } };


      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // person group train TODO:

  static getPersonGroupPerson(personGroupId, personId) {var _this10 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(
      _this10.uriBase + '/persongroups/' + personGroupId + '/persons/' + personId);

      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this10.subscriptionKey } };


      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // person group person create
  static createPersonGroupPerson(personGroupId, username) {var _this11 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(
      _this11.uriBase + '/persongroups/' + personGroupId + '/persons');

      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this11.subscriptionKey },

        body: JSON.stringify({
          name: username.length <= 0 ? 'generic-user' : username,
          userData: 'a registered mypass user' }) };


      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // person group person add face
  static addFacePersonGroupPerson(personGroupId, personId, imageData) {var _this12 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(
      _this12.uriBase +
      '/persongroups/' +
      personGroupId +
      '/persons/' +
      personId +
      '/persistedFaces');

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
          'Ocp-Apim-Subscription-Key': _this12.subscriptionKey },

        body };

      const httpResponse = yield fetch(input, init);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  // person group person list
  static personGroupPersonList(personGroupId) {var _this13 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(
      _this13.uriBase + '/persongroups/' + personGroupId + '/persons');

      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this13.subscriptionKey } };


      const httpResponse = yield fetch(input, init);
      console.log(httpResponse.status);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }

  static deletePersonGroupPerson(personId) {var _this14 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(
      _this14.uriBase +
      '/persongroups/' +
      _this14.personGroupId +
      '/persons/' +
      personId);

      const init = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this14.subscriptionKey } };


      const httpResponse = yield fetch(input, init);
      console.log(httpResponse.status);
      return true;})();
  }

  static personGroupList() {var _this15 = this;return (0, _asyncToGenerator2.default)(function* () {
      let input = new URL(_this15.uriBase + '/persongroups');
      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': _this15.subscriptionKey } };


      const httpResponse = yield fetch(input, init);
      console.log(httpResponse.status);
      const jsonResponse = yield httpResponse.json();
      return jsonResponse;})();
  }}(0, _defineProperty2.default)(CognitiveFaceService, "uriBase", 'https://face-api-mypass.cognitiveservices.azure.com/face/v1.0');(0, _defineProperty2.default)(CognitiveFaceService, "subscriptionKey", '8c0198ff8f774e5eacbe5f18ab29f49a');(0, _defineProperty2.default)(CognitiveFaceService, "subscriptionKey2", '90ee32d0112e47fa912cd3f709ca512c');(0, _defineProperty2.default)(CognitiveFaceService, "personGroupId", 'mypasstest');(0, _defineProperty2.default)(CognitiveFaceService, "params", { recognitionModel: 'recognition_02', // "recognition_02" is recommended since its overall accuracy is improved compared with "recognition_01".
  returnFaceId: 'true', returnFaceLandmarks: 'false', returnRecognitionModel: 'true' // NOTE: not using these as not needed but leaving for reference.
  // returnFaceAttributes:
  //   'age,gender,headPose,smile,facialHair,glasses,' +
  //   'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise',
});var _default = CognitiveFaceService;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9Db2duaXRpdmVGYWNlU2VydmljZS5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwicmVxdWlyZSIsIndpbmRvdyIsIkNvZ25pdGl2ZUZhY2VTZXJ2aWNlIiwiZGV0ZWN0RnJvbVVybCIsImltYWdlVXJsIiwiaW5wdXQiLCJVUkwiLCJ1cmlCYXNlIiwia2V5IiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiaW5pdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJzdWJzY3JpcHRpb25LZXkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImh0dHBSZXNwb25zZSIsImpzb25SZXNwb25zZSIsImpzb24iLCJkZXRlY3RGcm9tQmxvYiIsImJsb2IiLCJkZXRlY3RGcm9tRGF0YVVybCIsImI2NFN0ciIsImRhdGEiLCJyZXBsYWNlIiwiYnVmZmVyRGF0YSIsIkJ1ZmZlciIsInZlcmlmeUZhY2VUb0ZhY2UiLCJmYWNlSWQxIiwiZmFjZUlkMiIsInZlcmlmeUZhY2VUb1VzZXJuYW1lIiwiZGF0YUJ1ZmZlciIsInVzZXJuYW1lIiwiZmFjZUlkIiwibWF0Y2hlZFVzZXIiLCJjb21tb24iLCJkYkNsaWVudCIsImZpbmRVc2VyQnlVc2VyTmFtZSIsInZlcmlmeUZhY2VUb1BlcnNvbiIsImZhY2VQZXJzb25JZCIsInBlcnNvbkdyb3VwSWQiLCJwZXJzb25JZCIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlckZhY2VUb1VzZXJuYW1lIiwicGVyc29uR3JvdXBSZXNwb25zZSIsImdldFBlcnNvbkdyb3VwIiwiZXJyb3IiLCJjb2RlIiwicmVzcG9uc2VDcmVhdGVQZXJzb25Hcm91cCIsImNyZWF0ZVBlcnNvbkdyb3VwIiwicmVzcG9uc2VDcmVhdGVQZXJzb25Hcm91cFBlcnNvbiIsImNyZWF0ZVBlcnNvbkdyb3VwUGVyc29uIiwiYWRkRmFjZVBlcnNvbkdyb3VwUGVyc29uIiwibmFtZSIsInVzZXJEYXRhIiwicmVjb2duaXRpb25Nb2RlbCIsImdldFBlcnNvbkdyb3VwUGVyc29uIiwibGVuZ3RoIiwiaW1hZ2VEYXRhIiwicGVyc29uR3JvdXBQZXJzb25MaXN0Iiwic3RhdHVzIiwiZGVsZXRlUGVyc29uR3JvdXBQZXJzb24iLCJwZXJzb25Hcm91cExpc3QiLCJyZXR1cm5GYWNlSWQiLCJyZXR1cm5GYWNlTGFuZG1hcmtzIiwicmV0dXJuUmVjb2duaXRpb25Nb2RlbCJdLCJtYXBwaW5ncyI6IjZYQUFBOztBQUVBLElBQUlBLEtBQUo7QUFDQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFqQixFQUEwQjtBQUN4QkgsRUFBQUEsS0FBSyxHQUFHSSxPQUFPLENBQUMsWUFBRCxDQUFmO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xKLEVBQUFBLEtBQUssR0FBR0ssTUFBTSxDQUFDTCxLQUFmO0FBQ0Q7O0FBRUQsTUFBTU0sb0JBQU4sQ0FBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBLFNBQWFDLGFBQWIsQ0FBMkJDLFFBQTNCLEVBQXFDO0FBQ25DLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxHQUFKLENBQVEsS0FBSSxDQUFDQyxPQUFMLEdBQWUsU0FBdkIsQ0FBWjtBQUNBLFdBQUssTUFBTUMsR0FBWCxJQUFrQixLQUFJLENBQUNDLE1BQXZCLEVBQStCO0FBQzdCSixRQUFBQSxLQUFLLENBQUNLLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCSCxHQUExQixFQUErQixLQUFJLENBQUNDLE1BQUwsQ0FBWUQsR0FBWixDQUEvQjtBQUNEOztBQUVELFlBQU1JLElBQUksR0FBRztBQUNYQyxRQUFBQSxNQUFNLEVBQUUsTUFERztBQUVYQyxRQUFBQSxPQUFPLEVBQUU7QUFDUCwwQkFBZ0Isa0JBRFQ7QUFFUCx1Q0FBNkIsS0FBSSxDQUFDQyxlQUYzQixFQUZFOztBQU1YQyxRQUFBQSxJQUFJLEVBQUVD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QVksQ0FBQzZDLE1BQXpCO0FBQ0EsYUFBTyxJQUFQLENBakI2QztBQWtCOUM7O0FBRUQsU0FBYUUsZUFBYixHQUErQjtBQUM3QixVQUFJOUQsS0FBSyxHQUFHLElBQUlDLEdBQUosQ0FBUSxPQUFJLENBQUNDLE9BQUwsR0FBZSxlQUF2QixDQUFaO0FBQ0EsWUFBTUssSUFBSSxHQUFHO0FBQ1hDLFFBQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLDBCQUFnQixrQkFEVDtBQUVQLHVDQUE2QixPQUFJLENBQUNDLGVBRjNCLEVBRkUsRUFBYjs7O0FBT0EsWUFBTUssWUFBWSxTQUFTeEIsS0FBSyxDQUFDUyxLQUFELEVBQVFPLElBQVIsQ0FBaEM7QUFDQWtDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZM0IsWUFBWSxDQUFDNkMsTUFBekI7QUFDQSxZQUFNNUMsWUFBWSxTQUFTRCxZQUFZLENBQUNFLElBQWIsRUFBM0I7QUFDQSxhQUFPRCxZQUFQLENBWjZCO0FBYTlCLEdBdFZ3QixDLDhCQUFyQm5CLG9CLGFBWUYsK0QsZ0NBWkVBLG9CLHFCQWFxQixrQyxnQ0FickJBLG9CLHNCQWNzQixrQyxnQ0FkdEJBLG9CLG1CQWVtQixZLGdDQWZuQkEsb0IsWUFpQlksRUFDZDBELGdCQUFnQixFQUFFLGdCQURKLEVBQ3NCO0FBQ3BDUSxFQUFBQSxZQUFZLEVBQUUsTUFGQSxFQUdkQyxtQkFBbUIsRUFBRSxPQUhQLEVBSWRDLHNCQUFzQixFQUFFLE1BSlYsQ0FLZDtBQUNBO0FBQ0E7QUFDQTtBQVJjLEMsaUJBd1VIcEUsb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xuXG5sZXQgZmV0Y2g7XG5pZiAoIXByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgZmV0Y2ggPSByZXF1aXJlKCdub2RlLWZldGNoJyk7XG59IGVsc2Uge1xuICBmZXRjaCA9IHdpbmRvdy5mZXRjaDtcbn1cblxuY2xhc3MgQ29nbml0aXZlRmFjZVNlcnZpY2Uge1xuICAvLyByZWY6IGFwaSBodHRwczovL2Vhc3R1cy5kZXYuY29nbml0aXZlLm1pY3Jvc29mdC5jb20vZG9jcy9zZXJ2aWNlcy81NjM4NzliNjE5ODQ1NTBlNDBjYmJlOGQvb3BlcmF0aW9ucy81NjM4NzliNjE5ODQ1NTBmMzAzOTUyMzZcbiAgLy8gYWRhbSdzIHRyaWFsIGF6dXJlIGZhY2UgYXBpLCBleHBpcmVkIDYvMTkvMjAyMFxuICAvLyBodHRwczovL2F6dXJlLm1pY3Jvc29mdC5jb20vZW4tdXMvdHJ5L2NvZ25pdGl2ZS1zZXJ2aWNlcy9teS1hcGlzL1xuICAvLyBzdGF0aWMgdXJpQmFzZSA9ICdodHRwczovL3dlc3RjZW50cmFsdXMuYXBpLmNvZ25pdGl2ZS5taWNyb3NvZnQuY29tL2ZhY2UvdjEuMCc7XG4gIC8vIHN0YXRpYyBzdWJzY3JpcHRpb25LZXkgPSAnNzVlNjZiYWU1MTBmNDRlM2JjZTgwMzU3ODA3ODUxMDMnO1xuICAvLyBzdGF0aWMgc3Vic2NyaXB0aW9uS2V5MiA9ICdjMzU4NmU2Zjg4ZWI0OTExODVkY2U5YmYyZmRjYzllMSc7XG4gIC8vIGh0dHBzOi8vcG9ydGFsLmF6dXJlLmNvbS9cbiAgLy8gYWRhbSBjJ3MgcGVyc29uYWwgYXp1cmUgZmFjZSBhcGlcbiAgLy8gcmVmOiBodHRwczovL2F6dXJlLm1pY3Jvc29mdC5jb20vZW4tdXMvcHJpY2luZy9kZXRhaWxzL2NvZ25pdGl2ZS1zZXJ2aWNlcy9mYWNlLWFwaS9cbiAgLy8gTk9URTogdGhlIGFwaSBpcyBvbiB0aGUgZnJlZSBwbGFuLCB3aGljaCBtZWFuJ3MgbWFrZSBhcGkgY2FsbHMgc3BhcmluZ2x5LiBTcGVjaWZpY2FsbHkgbm8gbW9yZSB0aGFuIDIwIHBlciBtaW51dGUgYW5kIDMwLDAwMCBmcmVlIHBlciBtb250aC5cbiAgc3RhdGljIHVyaUJhc2UgPVxuICAgICdodHRwczovL2ZhY2UtYXBpLW15cGFzcy5jb2duaXRpdmVzZXJ2aWNlcy5henVyZS5jb20vZmFjZS92MS4wJztcbiAgc3RhdGljIHN1YnNjcmlwdGlvbktleSA9ICc4YzAxOThmZjhmNzc0ZTVlYWNiZTVmMThhYjI5ZjQ5YSc7XG4gIHN0YXRpYyBzdWJzY3JpcHRpb25LZXkyID0gJzkwZWUzMmQwMTEyZTQ3ZmE5MTJjZDNmNzA5Y2E1MTJjJztcbiAgc3RhdGljIHBlcnNvbkdyb3VwSWQgPSAnbXlwYXNzdGVzdCc7XG5cbiAgc3RhdGljIHBhcmFtcyA9IHtcbiAgICByZWNvZ25pdGlvbk1vZGVsOiAncmVjb2duaXRpb25fMDInLCAvLyBcInJlY29nbml0aW9uXzAyXCIgaXMgcmVjb21tZW5kZWQgc2luY2UgaXRzIG92ZXJhbGwgYWNjdXJhY3kgaXMgaW1wcm92ZWQgY29tcGFyZWQgd2l0aCBcInJlY29nbml0aW9uXzAxXCIuXG4gICAgcmV0dXJuRmFjZUlkOiAndHJ1ZScsXG4gICAgcmV0dXJuRmFjZUxhbmRtYXJrczogJ2ZhbHNlJyxcbiAgICByZXR1cm5SZWNvZ25pdGlvbk1vZGVsOiAndHJ1ZScsXG4gICAgLy8gTk9URTogbm90IHVzaW5nIHRoZXNlIGFzIG5vdCBuZWVkZWQgYnV0IGxlYXZpbmcgZm9yIHJlZmVyZW5jZS5cbiAgICAvLyByZXR1cm5GYWNlQXR0cmlidXRlczpcbiAgICAvLyAgICdhZ2UsZ2VuZGVyLGhlYWRQb3NlLHNtaWxlLGZhY2lhbEhhaXIsZ2xhc3NlcywnICtcbiAgICAvLyAgICdlbW90aW9uLGhhaXIsbWFrZXVwLG9jY2x1c2lvbixhY2Nlc3NvcmllcyxibHVyLGV4cG9zdXJlLG5vaXNlJyxcbiAgfTtcblxuICAvLyBEZXRlY3QgaHVtYW4gZmFjZXMgaW4gYW4gaW1hZ2UsIHJldHVybiBmYWNlIHJlY3RhbmdsZXMsIGFuZCBvcHRpb25hbGx5IHdpdGggZmFjZUlkcywgbGFuZG1hcmtzLCBhbmQgYXR0cmlidXRlcy5cbiAgc3RhdGljIGFzeW5jIGRldGVjdEZyb21VcmwoaW1hZ2VVcmwpIHtcbiAgICBsZXQgaW5wdXQgPSBuZXcgVVJMKHRoaXMudXJpQmFzZSArICcvZGV0ZWN0Jyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgIGlucHV0LnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB0aGlzLnBhcmFtc1trZXldKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1cmw6IGltYWdlVXJsIH0pLFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkZXRlY3RGcm9tQmxvYihibG9iKSB7XG4gICAgLy8gQnJvd3NlciBvbmx5LCBub2RlanMgZG9lc24ndCBzdXBwb29ydCBibG9ic1xuICAgIGxldCBpbnB1dCA9IG5ldyBVUkwodGhpcy51cmlCYXNlICsgJy9kZXRlY3QnKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnBhcmFtcykge1xuICAgICAgaW5wdXQuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHRoaXMucGFyYW1zW2tleV0pO1xuICAgIH1cbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiB0aGlzLnN1YnNjcmlwdGlvbktleSxcbiAgICAgIH0sXG4gICAgICBib2R5OiBibG9iLFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGRldGVjdEZyb21EYXRhVXJsKGI2NFN0cikge1xuICAgIC8vIFNlcnZlciBvbmx5LCBub2RlanMgQnVmZmVyIHR5cGUgZm9yIHRlc3RpbmdcbiAgICAvLyByZW1vdmUgaGVhZGVyIHBhcnRzXG4gICAgY29uc3QgZGF0YSA9IGI2NFN0ci5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1xcdys7YmFzZTY0LC8sICcnKTtcbiAgICBjb25zdCBidWZmZXJEYXRhID0gbmV3IEJ1ZmZlcihkYXRhLCAnYmFzZTY0Jyk7XG5cbiAgICBsZXQgaW5wdXQgPSBuZXcgVVJMKHRoaXMudXJpQmFzZSArICcvZGV0ZWN0Jyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5wYXJhbXMpIHtcbiAgICAgIGlucHV0LnNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB0aGlzLnBhcmFtc1trZXldKTtcbiAgICB9XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgICAgYm9keTogYnVmZmVyRGF0YSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCBodHRwUmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxuXG4gIC8vIFZlcmlmeSB3aGV0aGVyIHR3byBmYWNlcyBiZWxvbmcgdG8gYSBzYW1lIHBlcnNvblxuICBzdGF0aWMgYXN5bmMgdmVyaWZ5RmFjZVRvRmFjZShmYWNlSWQxLCBmYWNlSWQyKSB7XG4gICAgbGV0IGlucHV0ID0gbmV3IFVSTCh0aGlzLnVyaUJhc2UgKyAnL3ZlcmlmeScpO1xuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiB0aGlzLnN1YnNjcmlwdGlvbktleSxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGZhY2VJZDEsIGZhY2VJZDIgfSksXG4gICAgfTtcbiAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnB1dCwgaW5pdCk7XG4gICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgaHR0cFJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICB9XG5cbiAgLy8gUGFydCBvZiB0aGUgbG9naW4gbWV0aG9kcyBvbiBjbGllbnRcbiAgc3RhdGljIGFzeW5jIHZlcmlmeUZhY2VUb1VzZXJuYW1lKGRhdGFCdWZmZXIsIHVzZXJuYW1lKSB7XG4gICAgY29uc3QgZmFjZUlkID0gKGF3YWl0IHRoaXMuZGV0ZWN0RnJvbUJsb2IoZGF0YUJ1ZmZlcikpWzBdLmZhY2VJZDtcbiAgICBsZXQgbWF0Y2hlZFVzZXIgPSBhd2FpdCBjb21tb24uZGJDbGllbnQuZmluZFVzZXJCeVVzZXJOYW1lKHVzZXJuYW1lKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy52ZXJpZnlGYWNlVG9QZXJzb24oXG4gICAgICBmYWNlSWQsXG4gICAgICBtYXRjaGVkVXNlci5mYWNlUGVyc29uSWQsXG4gICAgICB0aGlzLnBlcnNvbkdyb3VwSWRcbiAgICApO1xuICB9XG5cbiAgLy8gVmVyaWZ5IHdoZXRoZXIgb25lIGZhY2UgbWF0Y2hlcyBwZXJzb25cbiAgc3RhdGljIGFzeW5jIHZlcmlmeUZhY2VUb1BlcnNvbihmYWNlSWQsIHBlcnNvbklkLCBwZXJzb25Hcm91cElkKSB7XG4gICAgbGV0IGlucHV0ID0gbmV3IFVSTCh0aGlzLnVyaUJhc2UgKyAnL3ZlcmlmeScpO1xuICAgIGNvbnNvbGUubG9nKHsgZmFjZUlkLCBwZXJzb25JZCwgcGVyc29uR3JvdXBJZCB9KTtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmYWNlSWQsIHBlcnNvbklkLCBwZXJzb25Hcm91cElkIH0pLFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyByZWdpc3RlckZhY2VUb1VzZXJuYW1lKGRhdGFCdWZmZXIsIHVzZXJuYW1lKSB7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IHBlcnNvbiBncm91cFxuICAgIGNvbnN0IHBlcnNvbkdyb3VwUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldFBlcnNvbkdyb3VwKHRoaXMucGVyc29uR3JvdXBJZCk7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGVyc29uR3JvdXBSZXNwb25zZSkpO1xuICAgIGlmIChcbiAgICAgIHBlcnNvbkdyb3VwUmVzcG9uc2UuZXJyb3IgJiZcbiAgICAgIHBlcnNvbkdyb3VwUmVzcG9uc2UuZXJyb3IuY29kZSA9PT0gJ1BlcnNvbkdyb3VwTm90Rm91bmQnXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlIGdyb3VwIHRoZW4nKTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlQ3JlYXRlUGVyc29uR3JvdXAgPSBhd2FpdCB0aGlzLmNyZWF0ZVBlcnNvbkdyb3VwKFxuICAgICAgICB0aGlzLnBlcnNvbkdyb3VwSWRcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZUNyZWF0ZVBlcnNvbkdyb3VwKSk7XG4gICAgfVxuICAgIC8vIFRPRE8gZ3JhYiBvYXRodXNlcnMgYnkgdXNlcm5hbWVcbiAgICAvLyBsZXQgbWF0Y2hlZFVzZXIgPSBhd2FpdCBjb21tb24uZGJDbGllbnQuZmluZFVzZXJCeVVzZXJOYW1lKHVzZXJuYW1lKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtYXRjaGVkVXNlcik7XG4gICAgLy8gbGV0IHBlcnNvbklkID0gbWF0Y2hlZFVzZXIuZmFjZVBlcnNvbklkOyAvLyAwMzc3M2ViNi0xMzhmLTQ0OWEtOTEzYS03Zjg1MTU0NTFhZGYgZmljdGlvbmFsIGJlY2t5IHBlcnNvblxuICAgIC8vIGNvbnN0IHBlcnNvbkdyb3VwUGVyc29uUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldFBlcnNvbkdyb3VwUGVyc29uKFxuICAgIC8vIHRoaXMucGVyc29uR3JvdXBJZCxcbiAgICAvLyBwZXJzb25JZFxuICAgIC8vICk7XG4gICAgLy8gY29uc29sZS5sb2cocGVyc29uR3JvdXBQZXJzb25SZXNwb25zZSk7XG4gICAgLy8gaWYgKCFwZXJzb25Hcm91cFBlcnNvblJlc3BvbnNlLmVycm9yKSB7IC8vIGRlbGV0ZSBpdCBzbyB3ZSBjYW4gYWRkIGEgcGVyc29uIGFnYWluLlxuICAgIC8vIGF3YWl0IHRoaXMuZGVsZXRlUGVyc29uR3JvdXBQZXJzb24ocGVyc29uR3JvdXBQZXJzb25SZXNwb25zZS5wZXJzb25JZCk7XG4gICAgLy8gfVxuICAgIC8vIGlmKHBlcnNvbkdyb3VwUGVyc29uUmVzcG9uc2UuZXJyb3IgJiYgcGVyc29uR3JvdXBQZXJzb25SZXNwb25zZS5lcnJvci5jb2RlID09PSAnUGVyc29uTm90Rm91bmQnKSB7XG4gICAgY29uc29sZS5sb2coe3BlcnNvbkdyb3VwSWQ6IHRoaXMucGVyc29uR3JvdXBJZCwgdXNlcm5hbWV9KTtcbiAgICBjb25zdCByZXNwb25zZUNyZWF0ZVBlcnNvbkdyb3VwUGVyc29uID0gYXdhaXQgdGhpcy5jcmVhdGVQZXJzb25Hcm91cFBlcnNvbihcbiAgICAgIHRoaXMucGVyc29uR3JvdXBJZCxcbiAgICAgIHVzZXJuYW1lXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZygnLS0tY3JlYXRlZCBuZXcgdXNlcicpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlQ3JlYXRlUGVyc29uR3JvdXBQZXJzb24pO1xuICAgIGNvbnN0IHBlcnNvbklkID0gcmVzcG9uc2VDcmVhdGVQZXJzb25Hcm91cFBlcnNvbi5wZXJzb25JZDtcbiAgICAvLyBtYXRjaGVkVXNlci5mYWNlUGVyc29uSWQgPSBwZXJzb25JZDtcbiAgICAvLyBtYXRjaGVkVXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5zYXZlVXNlcihtYXRjaGVkVXNlcik7XG4gICAgLy8gY29uc29sZS5sb2coJy0tLXNhdmVkIHVzZXInKTtcbiAgICAvLyB9XG4gICAgLy8gY3JlYXRlIGZhY2UgYW5kIGFzc29jaWF0ZSB3aXRoIHVzZXJuYW1lL3BlcnNvblxuICAgIGF3YWl0IHRoaXMuYWRkRmFjZVBlcnNvbkdyb3VwUGVyc29uKFxuICAgICAgdGhpcy5wZXJzb25Hcm91cElkLFxuICAgICAgcGVyc29uSWQsXG4gICAgICBkYXRhQnVmZmVyXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2VDcmVhdGVQZXJzb25Hcm91cFBlcnNvbjtcbiAgfVxuXG4gIC8vIHBlcnNvbiBncm91cCBjcmVhdGVcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVBlcnNvbkdyb3VwKHBlcnNvbkdyb3VwSWQpIHtcbiAgICBsZXQgaW5wdXQgPSBuZXcgVVJMKHRoaXMudXJpQmFzZSArICcvcGVyc29uZ3JvdXBzLycgKyBwZXJzb25Hcm91cElkKTtcblxuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHRoaXMuc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogcGVyc29uR3JvdXBJZCxcbiAgICAgICAgdXNlckRhdGE6ICd0aGUgbWFpbiBncm91cCBmb3IgdGhlIG15cGFzcyBhcHAnLFxuICAgICAgICByZWNvZ25pdGlvbk1vZGVsOiAncmVjb2duaXRpb25fMDInLFxuICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnB1dCwgaW5pdCk7XG4gICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgaHR0cFJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICB9XG5cbiAgLy8gcGVyc29uIGdyb3VwIGdldFxuICBzdGF0aWMgYXN5bmMgZ2V0UGVyc29uR3JvdXAocGVyc29uR3JvdXBJZCkge1xuICAgIGxldCBpbnB1dCA9IG5ldyBVUkwodGhpcy51cmlCYXNlICsgJy9wZXJzb25ncm91cHMvJyArIHBlcnNvbkdyb3VwSWQpO1xuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHRoaXMuc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCBodHRwUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gIH1cblxuICAvLyBwZXJzb24gZ3JvdXAgdHJhaW4gVE9ETzpcblxuICBzdGF0aWMgYXN5bmMgZ2V0UGVyc29uR3JvdXBQZXJzb24ocGVyc29uR3JvdXBJZCwgcGVyc29uSWQpIHtcbiAgICBsZXQgaW5wdXQgPSBuZXcgVVJMKFxuICAgICAgdGhpcy51cmlCYXNlICsgJy9wZXJzb25ncm91cHMvJyArIHBlcnNvbkdyb3VwSWQgKyAnL3BlcnNvbnMvJyArIHBlcnNvbklkXG4gICAgKTtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ09jcC1BcGltLVN1YnNjcmlwdGlvbi1LZXknOiB0aGlzLnN1YnNjcmlwdGlvbktleSxcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBodHRwUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnB1dCwgaW5pdCk7XG4gICAgY29uc3QganNvblJlc3BvbnNlID0gYXdhaXQgaHR0cFJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvblJlc3BvbnNlO1xuICB9XG5cbiAgLy8gcGVyc29uIGdyb3VwIHBlcnNvbiBjcmVhdGVcbiAgc3RhdGljIGFzeW5jIGNyZWF0ZVBlcnNvbkdyb3VwUGVyc29uKHBlcnNvbkdyb3VwSWQsIHVzZXJuYW1lKSB7XG4gICAgbGV0IGlucHV0ID0gbmV3IFVSTChcbiAgICAgIHRoaXMudXJpQmFzZSArICcvcGVyc29uZ3JvdXBzLycgKyBwZXJzb25Hcm91cElkICsgJy9wZXJzb25zJ1xuICAgICk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnT2NwLUFwaW0tU3Vic2NyaXB0aW9uLUtleSc6IHRoaXMuc3Vic2NyaXB0aW9uS2V5LFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgbmFtZTogdXNlcm5hbWUubGVuZ3RoIDw9IDAgPyAnZ2VuZXJpYy11c2VyJyA6IHVzZXJuYW1lLFxuICAgICAgICB1c2VyRGF0YTogJ2EgcmVnaXN0ZXJlZCBteXBhc3MgdXNlcicsXG4gICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCBodHRwUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gIH1cblxuICAvLyBwZXJzb24gZ3JvdXAgcGVyc29uIGFkZCBmYWNlXG4gIHN0YXRpYyBhc3luYyBhZGRGYWNlUGVyc29uR3JvdXBQZXJzb24ocGVyc29uR3JvdXBJZCwgcGVyc29uSWQsIGltYWdlRGF0YSkge1xuICAgIGxldCBpbnB1dCA9IG5ldyBVUkwoXG4gICAgICB0aGlzLnVyaUJhc2UgK1xuICAgICAgICAnL3BlcnNvbmdyb3Vwcy8nICtcbiAgICAgICAgcGVyc29uR3JvdXBJZCArXG4gICAgICAgICcvcGVyc29ucy8nICtcbiAgICAgICAgcGVyc29uSWQgK1xuICAgICAgICAnL3BlcnNpc3RlZEZhY2VzJ1xuICAgICk7XG4gICAgbGV0IGJvZHk7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICAvLyBjb25zdCBkYXRhID0gaW1hZ2VEYXRhLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLywgJycpO1xuICAgICAgLy8gYm9keSA9IG5ldyBCdWZmZXIoZGF0YSwgJ2Jhc2U2NCcpO1xuICAgICAgYm9keSA9IGltYWdlRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhlbiBpdCdzIGEgYmxvYiBhbmQgbm8gZnVydGhlciBwcm9jZXNzaW5nIGlzIG5lZWRlZFxuICAgICAgYm9keSA9IGltYWdlRGF0YTtcbiAgICB9XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgICAgYm9keSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCBodHRwUmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBqc29uUmVzcG9uc2U7XG4gIH1cblxuICAvLyBwZXJzb24gZ3JvdXAgcGVyc29uIGxpc3RcbiAgc3RhdGljIGFzeW5jIHBlcnNvbkdyb3VwUGVyc29uTGlzdChwZXJzb25Hcm91cElkKSB7XG4gICAgbGV0IGlucHV0ID0gbmV3IFVSTChcbiAgICAgIHRoaXMudXJpQmFzZSArICcvcGVyc29uZ3JvdXBzLycgKyBwZXJzb25Hcm91cElkICsgJy9wZXJzb25zJ1xuICAgICk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBSZXNwb25zZS5zdGF0dXMpO1xuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBkZWxldGVQZXJzb25Hcm91cFBlcnNvbihwZXJzb25JZCkge1xuICAgIGxldCBpbnB1dCA9IG5ldyBVUkwoXG4gICAgICB0aGlzLnVyaUJhc2UgK1xuICAgICAgICAnL3BlcnNvbmdyb3Vwcy8nICtcbiAgICAgICAgdGhpcy5wZXJzb25Hcm91cElkICtcbiAgICAgICAgJy9wZXJzb25zLycgK1xuICAgICAgICBwZXJzb25JZFxuICAgICk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBSZXNwb25zZS5zdGF0dXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHBlcnNvbkdyb3VwTGlzdCgpIHtcbiAgICBsZXQgaW5wdXQgPSBuZXcgVVJMKHRoaXMudXJpQmFzZSArICcvcGVyc29uZ3JvdXBzJyk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdPY3AtQXBpbS1TdWJzY3JpcHRpb24tS2V5JzogdGhpcy5zdWJzY3JpcHRpb25LZXksXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgaHR0cFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBSZXNwb25zZS5zdGF0dXMpO1xuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb25SZXNwb25zZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2duaXRpdmVGYWNlU2VydmljZTtcbiJdfQ==