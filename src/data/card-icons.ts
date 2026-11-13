/** Wspólna siatka 32 × 32 i zaokrąglona kreska dla ikon w kartach. */
export const cardIcons = {
  attention: `
    <path d="M3 16s4.5-8 13-8 13 8 13 8-4.5 8-13 8S3 16 3 16Z"/>
    <circle cx="16" cy="16" r="4"/>
  `,
  experience: `
    <path d="M16 9c-3.5-3-8-3.5-12-2v19c4-1.5 8.5-1 12 2 3.5-3 8-3.5 12-2V7c-4-1.5-8.5-1-12 2Zm0 0v19"/>
    <path d="M8 12c1.5-.2 3 .1 4.5.8M8 17c1.5-.2 3 .1 4.5.8M20 13c1.5-.7 3-1 4.5-.8M20 18c1.5-.7 3-1 4.5-.8"/>
  `,
  conversation: `
    <path d="M23 14V8a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2v5l6-5"/>
    <path d="M8 11h10M8 15h3"/>
    <path d="M20 14h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v4l-5-4h-2a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h2Z"/>
  `,
  phone: `
    <path d="M6 4h5l2 7-4 3a19 19 0 0 0 9 9l3-4 7 2v5a3 3 0 0 1-3 3C12.3 28 4 19.7 3 7a3 3 0 0 1 3-3Z"/>
  `,
  location: `
    <path d="M27 13c0 8-11 16-11 16S5 21 5 13a11 11 0 0 1 22 0Z"/>
    <circle cx="16" cy="13" r="4"/>
  `,
  care: `
    <path d="M16 28 5 17C-3 9 8-1 16 8c8-9 19 1 11 9L16 28Z"/>
  `,
  team: `
    <circle cx="12" cy="9" r="5"/>
    <path d="M3 28v-4a9 9 0 0 1 18 0v4M21 4a5 5 0 0 1 0 10m4 4a8 8 0 0 1 4 7v3"/>
  `,
  diagnosis: `
    <path d="M18 28H7a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4m10 0h3a2 2 0 0 1 2 2v7"/>
    <rect x="11" y="3" width="10" height="6" rx="2"/>
    <path d="M10 14h9M10 19h4M10 24h3"/>
    <circle cx="23" cy="22" r="5"/>
    <path d="m26.5 25.5 3.5 3.5"/>
  `,
  speech: `
    <path d="M25 5H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h3v5l6-5h9a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z"/>
    <path d="M9 13v4m5-7v10m5-8v6m5-4v2"/>
  `,
  pulse: `
    <path d="M5 17h5l3-9 5 17 3-10 2 2h4"/>
    <circle cx="3" cy="17" r="2"/>
    <circle cx="29" cy="17" r="2"/>
  `,
  tape: `
    <g transform="rotate(-40 16 16)">
      <rect x="3" y="11" width="26" height="10" rx="3"/>
      <path d="M10 14v4m12-4v4M14 16h4"/>
    </g>
  `,
  headphones: `
    <path d="M5 19v-4a11 11 0 0 1 22 0v4"/>
    <rect x="3" y="15" width="6" height="12" rx="3"/>
    <rect x="23" y="15" width="6" height="12" rx="3"/>
    <path d="M13 17v5m3-8v11m3-8v5"/>
  `,
  feeding: `
    <path d="M4 17h19a9.5 9.5 0 0 1-19 0ZM8 27h11M28 13v15"/>
    <ellipse cx="28" cy="8" rx="3" ry="5"/>
    <path d="M9 5v5m7-3v4"/>
  `,
  tooth: `
    <path d="M16 6c-3-2-7-3-9 0-3 4-1 8 0 11 1 4 1 11 4 11 2 0 2-7 5-7s3 7 5 7c3 0 3-7 4-11 1-3 3-7 0-11-2-3-6-2-9 0Z"/>
    <path d="M7 14h18m-13-2v4m8-4v4"/>
  `,
  hands: `
    <path d="M13 17V7a2 2 0 0 1 4 0v10-12a2 2 0 0 1 4 0v12-9a2 2 0 0 1 4 0v10-5a2 2 0 0 1 4 0v8a9 9 0 0 1-9 9h-1c-3 0-5-1-7-3l-7-8a2.5 2.5 0 0 1 3.5-3.5L13 20"/>
    <path d="M3 6c2-2 5-2 7 0M4 10c1-.8 2-.8 3 0"/>
  `,
  ear: `
    <path d="M7 13a10 10 0 0 1 20 0c0 7-7 7-8 12-.5 2.5-2 4-4 4a5 5 0 0 1-5-5"/>
    <path d="M12 13a5 5 0 0 1 10 0c0 3-4 3-4 6m-6-4c3 0 4 1.5 4 4"/>
  `,
  mouth: `
    <path d="M3 16s5-8 9-8c2 0 2 2 4 2s2-2 4-2c4 0 9 8 9 8s-5 9-13 9S3 16 3 16Z"/>
    <path d="M3 16c4 2 7-2 13-2s9 4 13 2M10 19c4 2 8 2 12 0"/>
  `,
  movement: `
    <path d="M6 16V9a1.5 1.5 0 0 1 3 0v6-9a1.5 1.5 0 0 1 3 0v9-7a1.5 1.5 0 0 1 3 0v11a6 6 0 0 1-6 6c-2 0-3-1-4-2l-3-5a1.8 1.8 0 0 1 3-2l2 2"/>
    <path d="M28 7c2 2 2 7 0 10-1 2-1 3 0 5 1 3-1 6-4 6s-5-3-4-6c.5-2 1-3 0-5-2-4-1-8 1-10 2-2 5-2 7 0Z"/>
    <path d="M21 12c1.5-1 4.5-1 6 0"/>
  `,
  stethoscope: `
    <path d="M5 4v9a7 7 0 0 0 14 0V4M5 5h3m8 0h3M12 20v2a7 7 0 0 0 14 0v-3"/>
    <circle cx="26" cy="15" r="4"/>
  `,
  recommendations: `
    <path d="M11 6H7a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4"/>
    <rect x="11" y="3" width="10" height="6" rx="2"/>
    <path d="m10 15 2 2 4-4m-6 9 2 2 4-4m4-5h3m-3 7h3"/>
  `,
  calendar: `
    <rect x="4" y="6" width="24" height="23" rx="3"/>
    <path d="M10 3v6m12-6v6M4 13h24m-18 5h3m6 0h3m-12 6h3m6 0h3"/>
  `,
  practice: `
    <rect x="3" y="9" width="26" height="19" rx="3"/>
    <path d="M11 9V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3m-5 5v9m-4.5-4.5h9"/>
  `,
} as const;

export type CardIconName = keyof typeof cardIcons;
