import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI();

async function main() {
  try {
  const res = await llm.call("Tell me a joke");

  console.log(res);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();