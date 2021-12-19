import "jasmine";

import { Example } from "./example";

describe("Example", () => {
  let o: Example;

  beforeEach(() => {
    o = new Example();
  });

  it("sync", () => {
    expect(o.sync()).toEqual("sync");
  });

  it("asyncCallback", (done) => {
    o.asyncCallback((value) => {
      expect(value).toEqual("asyncCallback");
      done();
    });
  });

  it("asyncPromise", async () => {
    const value = await o.asyncPromise();
    expect(value).toEqual("asyncPromise");
  });
});
