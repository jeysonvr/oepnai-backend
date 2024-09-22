import OpenAI from "openai";


interface Options {
  threadId: string;
  assistantId?: string;
}

export const createRunUseCase = async (openai: OpenAI, options: Options) => {

  const { threadId, assistantId = 'asst_uh8jrmY1Ywop1ic7ey4WRnCF' } = options;

  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    // instructions: Esto sobreescribe el asistente.
  });

  console.log(run);

  return run;
}
