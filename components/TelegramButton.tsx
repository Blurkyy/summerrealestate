import { Send } from "lucide-react";

export default function TelegramButton() {
  return (
    <a
      href="https://t.me/+251981789498"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Telegram"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sand text-ink shadow-lg shadow-black/40 transition-transform hover:scale-105"
    >
      <Send className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}