"use client";

import { useState } from "react";
import OpenAI from "openai";
import TextArea from "@/components/inputs/TextArea";
import loadingAnimation from "@/assets/loading/loading.svg";
import Image from "next/image";

export default function OpenAIAss() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>("");
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
    <section>
      <TextArea label="Write your prompt" id="prompt" width="100%" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button
        type="button"
        onClick={handleGenerate}
        className={`red-line-button-submit mb-2 mt-5 flex w-full items-center justify-center gap-1 ${
          loading ? "cursor-wait" : "hover:bg-red-600 hover:text-white"
        }`}
        disabled={loading}
      >
        <span>{loading ? "Generating..." : "Generate"}</span>
        {loading && <Image src={loadingAnimation} alt="Loading..." height={20} width={20} quality={50} priority />}
      </button>
      <TextArea label="Result" id="result" width="100%" value={result} onChange={() => {}} />
    </section>
  );
}
