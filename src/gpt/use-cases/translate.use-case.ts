import OpenAI from "openai";


interface Options {
  prompt: string;
  lang: string;
}

export const translateUseCase = async (openai: OpenAI, options: Options) => {
  console.log('Test:: se llama')
  const { prompt, lang } = options;

  return await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
        Traduce el siguiente texto al idioma ${lang}:${prompt} y devuelve la traducción.
        `
      },
    ],
    model: "gpt-3.5-turbo",
    temperature: 0.3,
    stream: true,
  });
}
