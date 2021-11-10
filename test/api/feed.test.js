/** @format */

const request = require("supertest");
const { app } = require("../../app");

it("returns feeds of length 10 with no parameter", async () => {
  const res = await request(app).get(`/feed`).send().expect(200);
  expect(res.body.data.length).toEqual(10);
});

it("returns feeds of length 0 when query parameter are size=0", async () => {
  const res = await request(app).get(`/feed?size=0`).send().expect(200);
  expect(res.body.data.length).toEqual(0);
});

it("returns feeds of length 5 when query parameter are size=5&page=1", async () => {
  const res = await request(app).get(`/feed?size=5&page=1`).send().expect(200);
  expect(res.body.data.length).toEqual(5);
});

it("returns feeds of length 10 when query parameter are size=negetive&page=nagetive", async () => {
  const res = await request(app).get(`/feed?size=-5&page=1`).send().expect(200);
  expect(res.body.data.length).toEqual(10);
});
