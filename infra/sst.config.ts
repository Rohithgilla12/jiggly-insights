import { SSTConfig } from "sst";
import NextApp from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "infra",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(NextApp);
  },
} satisfies SSTConfig;
