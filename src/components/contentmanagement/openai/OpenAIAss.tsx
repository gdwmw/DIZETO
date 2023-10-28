"use client";

import { useState } from "react";
import OpenAI from "openai";
import TextArea from "@/components/inputs/TextArea";
import loadingAnimation from "@/assets/loading/loading.svg";
import Image from "next/image";

export default function OpenAIAss() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (prompt.length === 0) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: "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",
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      });

      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };

  return (
    <section className="space-y-5">
      <TextArea label="Write your prompt" id="prompt" width="100%" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button
        type="button"
        onClick={handleGenerate}
        className={`red-line-button-submit flex w-full items-center justify-center gap-1 ${
          loading ? "cursor-wait" : "hover:bg-red-600 hover:text-white"
        }`}
        disabled={loading}
      >
        <span>{loading ? "Generating..." : "Generate"}</span>
        {loading && <Image src={loadingAnimation} alt="Loading..." height={20} width={20} quality={50} priority />}
      </button>
      <pre className="mt-4 overflow-scroll">{result}</pre>
    </section>
  );
}
