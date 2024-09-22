import * as fs from "fs";

import OpenAI from "openai";


interface options {
  prompt?: string;
  audioFile: Express.Multer.File;
}


export const audioToTextUseCase = async (openai: OpenAI, options: options) => {
  const { audioFile, prompt } = options;

  console.log(audioFile, prompt);

  const response = await openai.audio.transcriptions.create({
    model: 'whisper-1',
    file: fs.createReadStream(audioFile.path),
    prompt: prompt, // mismo idioma del audio
    language: 'es',
    response_format: 'verbose_json', // 'vtt',
  });

  console.log(response)

  return response;
}
