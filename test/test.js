const { expect } = require("chai");

describe("Add Two Numbers", function () {
  var url = "http://localhost:3000/addTwoNumbers/3/5";
  it("returns status 200 to check if api works", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
