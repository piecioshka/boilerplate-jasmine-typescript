import { Foo } from "../src/foo";

describe('Module "Foo"', () => {
  it("sync", () => {
    expect(typeof Foo).toEqual("function");
    expect(typeof Foo.bar).toEqual("function");
    expect(Foo.bar()).toEqual("bar");
  });

  it("async", (done) => {
    setTimeout(() => {
      expect(1).toEqual(1);
      done();
    }, 100);
  });
});
