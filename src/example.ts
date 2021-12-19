export class Example {
  sync() {
    return "sync";
  }
  asyncCallback(cb: (label: string) => void) {
    setTimeout(() => {
      cb("asyncCallback");
    }, 200);
  }
  asyncPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("asyncPromise");
      }, 50);
    });
  }
}
