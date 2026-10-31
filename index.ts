// Vercel AI Gateway example.
// Run: node --env-file-if-exists=.env.local index.ts
// The SDK reads AI_GATEWAY_API_KEY from the environment.
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'moonshotai/kimi-k3',
  prompt: 'Invent a new holiday and describe its traditions.',
});

console.log(text);
