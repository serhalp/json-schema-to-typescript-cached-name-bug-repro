const { compile } = require("json-schema-to-typescript");

const schema = {
  type: "object",
  required: ["id"],
  properties: {
    id: {
      type: "string",
    },
  },
};

const main = async () => {
  console.log("result 1: ", await compile(schema, "MyType1"));
  console.log("result 2: ", await compile(schema, "MyType2"));
};

main();
