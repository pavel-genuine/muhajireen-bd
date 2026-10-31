"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WAIcon() {
  return (
    <>
      <FloatingWhatsApp
        phoneNumber="+8801715102130"
        accountName="MUHAJIREEN"
        avatar="images/logo.png"
        statusMessage="Typically replies within an hour"
        chatMessage="Hello there! 🤝 How can we help you with Muhajireen Project today?"
        placeholder="Type a message..."
      />

      <style jsx global>{`
        /* WhatsApp Floating Button Custom Beige Theme */
        .react-whatsapp-chat-body {
          background-color: #f8f5ef !important;
        }

        /* Chat Header & Submit Button Color */
        .react-whatsapp-chat-header,
        .react-whatsapp-chat-button {
          background-color: #a68b67 !important;
        }

        /* Floating Main Trigger Button */
        div[class*="floating-whatsapp-button"] {
          background-color: #a68b67 !important;
          box-shadow: 0 8px 24px rgba(166, 139, 103, 0.3) !important;
        }

        div[class*="floating-whatsapp-button"]:hover {
          background-color: #8c7352 !important;
        }

        /* Notification Badge */
        div[class*="floating-whatsapp-notification"] {
          background-color: #c9a46a !important;
        }

        /* Input area styling */
        .react-whatsapp-chat-input input {
          border-color: rgba(166, 139, 103, 0.3) !important;
        }

        .react-whatsapp-chat-input input:focus {
          border-color: #a68b67 !important;
          outline: none !important;
        }
      `}</style>
    </>
  );
}
