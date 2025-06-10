export class Main {
  async fetch_cloud(args) {
    const args = JSON.stringify(args);
    return `Test Returns : ${args}`;
  }
}
