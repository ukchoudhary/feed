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

it("returns feeds in which name contain word 'deleniti aliquam' when query parameter are name=deleniti aliquam", async () => {
  const res = await request(app)
    .get(`/feed?name=deleniti aliquam`)
    .send()
    .expect(200);
  const feeds = res.body.data;
  expect(feeds.length).toEqual(2);
});

it("returns feeds in which name contain word with double quote 'deleniti aliquam'", async () => {
  const res = await request(app)
    .get(`/feed?name="deleniti aliquam"`)
    .send()
    .expect(200);
  const feeds = res.body.data;
  expect(feeds.length).toEqual(1);
});

// new

it("returns error when query parameter size is not a number", async () => {
  const res = await request(app)
    .get(`/feed?size=asjfbsdijfbidsjb`)
    .send()
    .expect(400);
});

it("returns error when query parameter page is not a number", async () => {
  const res = await request(app)
    .get(`/feed?page=asjfbsdijfbidsjb`)
    .send()
    .expect(400);
});

// untested ******

// it("returns error when query parameter sortBy is not equal to 'name' or 'dateLastEdited", async () => {
//   const res = await request(app).get(`/feed?name=345`).send().expect(200);
//   const feeds = res.body.data;
//   for (const item of feeds) {
//     expect(item.name).toEqual("Designer");
//   }
// });

// ****** untested

it("returns feeds of length 0 in which name did not match, when query parameter are name= asjfbsdijfbidsjb", async () => {
  const res = await request(app)
    .get(`/feed?name=asjfbsdijfbidsjb`)
    .send()
    .expect(200);
  const feeds = res.body.data;
  expect(feeds.length).toEqual(0);
});

it("returns feeds sorted by name in ascending order, when query parameter are sortBy=name", async () => {
  const res = await request(app).get(`/feed?sortBy=name`).send().expect(200);
  const feeds = res.body.data;
  expect(feeds[0].name).toEqual("Chief Brand Orchestrator");
  expect(feeds[9].name).toEqual("Human Data Designer");
});

it("returns feeds sorted by dateLastEdited in ascending order, when query parameter are sortBy=dateLastEdited", async () => {
  const res = await request(app)
    .get(`/feed?sortBy=dateLastEdited`)
    .send()
    .expect(200);
  const feeds = res.body.data;
  expect(feeds[0].dateLastEdited).toEqual("2017-10-15T21:10:51.560Z");
  expect(feeds[9].dateLastEdited).toEqual("2018-07-14T21:01:42.717Z");
});

it("returns feeds sorted by dateLastEdited in ascending order, when query parameter are sortBy=null", async () => {
  const res = await request(app).get(`/feed`).send().expect(200);
  const feeds = res.body.data;
  expect(feeds[0].dateLastEdited).toEqual("2017-10-15T21:10:51.560Z");
  expect(feeds[9].dateLastEdited).toEqual("2018-07-14T21:01:42.717Z");
});


