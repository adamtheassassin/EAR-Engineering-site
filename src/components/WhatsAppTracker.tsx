"use client";

import { useEffect } from "react";

export default function WhatsAppTracker() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest("a");
            
            // Check if it's a link to WhatsApp
            if (anchor && anchor.href && anchor.href.includes("wa.me")) {
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: "whatsapp_click"
                    });
                }
            }
            
            // Check if it's a phone call link
            if (anchor && anchor.href && anchor.href.startsWith("tel:")) {
                if (typeof window !== "undefined" && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                        event: "phone_click"
                    });
                }
            }
        };

        // Add a global click listener
        document.addEventListener("click", handleClick);
        
        // Cleanup listener on unmount
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}
