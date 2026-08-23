import { contact } from "./contact";

export const site = {
  name: "Dzieciaki na Miłej",
  shortDescription: "Logopedia i pediatria w Warce",
  address: contact.address,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Dzieciaki%20na%20Mi%C5%82ej%20Warka",
  social: contact.social,
  practices: {
    logopeda: {
      name: "Anna Strus",
      role: "Logopeda i glottodydaktyk",
      phone: contact.phones.logopeda,
      email: contact.emails.logopeda,
      href: "/logopeda",
    },
    pediatra: {
      name: "Paweł Strus",
      role: "Lekarz pediatra",
      phone: contact.phones.pediatra,
      email: contact.emails.pediatra,
      href: "/pediatra",
    },
  },
} as const;

export const phoneHref = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;
export const smsHref = (phone: string) => `sms:${phone.replace(/[^+\d]/g, "")}`;
