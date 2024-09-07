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
  return <div className="flex justify-center w-full p-2 bg-ha-dirty-green text-ha-cream text-sm border-b border-ha-cream">
    {messages[messageIndex]}
  </div>;
}
