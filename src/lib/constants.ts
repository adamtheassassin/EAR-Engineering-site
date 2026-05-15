export function getWhatsAppLink(service?: string): string {
    const serviceField = service
        ? `Service: ${service}`
        : "Service: [COC / Electrical / Solar / Aircon / Generator]";
    const message = `Hi EAR Engineering,\n\n${serviceField}\nArea: [Your suburb]\nDetails: [Brief description of the job]`;
    return `https://wa.me/27769737329?text=${encodeURIComponent(message)}`;
}

export const CONTACT = {
    name: "EAR Engineering",
    phone: "021 855 4462",
    phoneLink: "tel:0218554462",
    whatsappLink: getWhatsAppLink(),
    email: "info@earengineering.co.za",
    address: "60 Abelia Street, Heldervue, Somerset West, 7130",
    hours: {
        mon_fri: "Mon–Fri: 08:00 – 17:00",
        sat: "Sat: Closed",
        sun: "Sun: 08:00 – 13:00"
    }
};
