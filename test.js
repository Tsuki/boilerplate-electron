const promise = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3))
];
async function test() {
  for await(const line of promise) {
    console.log(line);
  }
}
