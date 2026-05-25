'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppChatButton() {
  const phoneNumber = '916299349073';

  const message =
    'Hi PIE Coding Schools, I want to know more about your programs.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        
        <MessageCircle className="w-7 h-7 text-white" />
        
      </div>
    </a>
  );
}