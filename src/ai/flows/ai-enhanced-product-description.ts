'use server';

/**
 * @fileOverview A Genkit flow for generating AI-enhanced product descriptions for e-commerce products.
 *
 * - enhanceProductDescription - A function that generates an enhanced product description.
 * - EnhanceProductDescriptionInput - The input type for the enhanceProductDescription function.
 * - EnhanceProductDescriptionOutput - The return type for the enhanceProductDescription function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const EnhanceProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  description: z.string().describe('A brief existing description of the product.'),
  features: z.string().describe('A comma-separated list or bullet points of the product\'s key features.'),
  benefits: z.string().describe('A comma-separated list or bullet points of the product\'s key benefits.'),
});
export type EnhanceProductDescriptionInput = z.infer<typeof EnhanceProductDescriptionInputSchema>;

const EnhanceProductDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('A detailed, engaging, and well-structured product description in French, highlighting features and benefits, formatted with semantic HTML tags (h2, h3).'),
});
export type EnhanceProductDescriptionOutput = z.infer<typeof EnhanceProductDescriptionOutputSchema>;

const enhanceProductDescriptionPrompt = ai.definePrompt({
  name: 'enhanceProductDescriptionPrompt',
  input: { schema: EnhanceProductDescriptionInputSchema },
  output: { schema: EnhanceProductDescriptionOutputSchema },
  prompt: `You are an expert copywriter for a smart security and tech company. Your task is to create a detailed, engaging, and well-structured product description in French for an e-commerce website. The description should highlight the product's features and benefits clearly, using semantic HTML tags like h2 and h3 for structure. The tone should be professional, secure, and modern.

Product Name: {{{productName}}}

Current Description:
{{{description}}}

Key Features:
{{{features}}}

Key Benefits:
{{{benefits}}}

Generate the enhanced description:`,
});

const enhanceProductDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProductDescriptionFlow',
    inputSchema: EnhanceProductDescriptionInputSchema,
    outputSchema: EnhanceProductDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await enhanceProductDescriptionPrompt(input);
    return output!;
  }
);

export async function enhanceProductDescription(input: EnhanceProductDescriptionInput): Promise<EnhanceProductDescriptionOutput> {
  return enhanceProductDescriptionFlow(input);
}
