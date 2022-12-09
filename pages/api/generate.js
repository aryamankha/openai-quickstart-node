import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: createPrompt(req.body.inputText),
    temperature: 0,
    max_tokens: 1000,
  });
  res.status(200).json({ result: response.data.choices[0].text });
}

function createPrompt(inputText) {
  return `Create a React component styled with Tailwind CSS that implements a ${inputText}`;
}
