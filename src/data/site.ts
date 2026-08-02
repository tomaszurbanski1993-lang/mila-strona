import { contact } from "./contact";

export const site = {
  name: "Dzieciaki na Miłej",
  shortDescription: "Logopedia i pediatria w Warce",
  address: contact.address,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Mi%C5%82a%2012%2C%2005-660%20Warka",
  social: contact.social,
  practices: {
    logopeda: {
      name: "Anna Strus",
      role: "Logopeda i neurologopeda",
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
