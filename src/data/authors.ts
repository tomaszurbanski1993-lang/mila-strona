export const authorIds = ["anna", "pawel", "anna-i-pawel", "admin"] as const;

export type AuthorId = (typeof authorIds)[number];

export const authors: Record<AuthorId, { name: string }> = {
  anna: { name: "Anna Strus" },
  pawel: { name: "Paweł Strus" },
  "anna-i-pawel": { name: "Anna i Paweł" },
  admin: { name: "Administrator" },
};
