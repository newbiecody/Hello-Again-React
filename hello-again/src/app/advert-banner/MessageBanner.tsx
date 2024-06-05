'use client';
import { useEffect, useState } from "react";
import { triggerCbOnInterval } from "../utils";

interface MessageBannerProps {
  messages: string[];
}

export default function MessageBanner({ messages }: MessageBannerProps) {
  const [messageIndex, setMessageIndex] = useState(0);

  triggerCbOnInterval(() => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
  }, 5000)
  return <div className="flex justify-center w-full p-2 bg-[#444c48] text-[#ddd7c7] text-sm">
    {messages[messageIndex]}
  </div>;
}
