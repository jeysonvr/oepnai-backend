import OpenAI from "openai";


interface Options {
  threadId: string;
  runId: string;
}


export const checkCompleteStatusUseCase = async (openai: OpenAI, options: Options) => {

  const { threadId, runId } = options;

  const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);

  if (runStatus.status === 'completed') {
    return runStatus;
  }

  // Esperar 1 segundo antes de volver a verificar el estado.
  await new Promise(resolve => setTimeout(resolve, 1000));

  return await checkCompleteStatusUseCase(openai, options);

}
