import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Icon registry — single component to render inline SVG icons by name.
 * Keeps icons consistent and lightweight (no external icon library).
 */
export type IconName =
  | "customs"
  | "freight"
  | "port"
  | "documents"
  | "cargo"
  | "logistics"
  | "specialized"
  | "mining"
  | "agriculture"
  | "manufacturing"
  | "construction"
  | "retail"
  | "automotive"
  | "fisheries"
  | "oilgas"
  | "trading"
  | "sme"
  | "anchor"
  | "truck"
  | "plane"
  | "ship"
  | "check"
  | "arrow-right"
  | "phone"
  | "mail"
  | "map-pin"
  | "whatsapp"
  | "shield"
  | "clock"
  | "globe"
  | "search"
  | "menu"
  | "close";

export function Icon({ name, className = "w-6 h-6" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "customs":
      return (
        <svg {...common}>
          <path strokeLinecap="square" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1z" />
          <path strokeLinecap="round" d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        </svg>
      );
    case "freight":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
          <path strokeLinecap="round" d="M3 7v6l9 4 9-4V7" />
        </svg>
      );
    case "port":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path strokeLinecap="round" d="M12 3v15" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 14l7 2 7-2" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
        </svg>
      );
    case "documents":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-6-5z" />
          <path strokeLinecap="round" d="M8 13h8M8 17h6" />
        </svg>
      );
    case "cargo":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="0" strokeLinecap="square" />
          <path strokeLinecap="round" d="M3 11h18M9 7v13M15 7v13" />
          <path strokeLinecap="round" d="M7 7l2-3h6l2 3" />
        </svg>
      );
    case "logistics":
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 18H3V6a1 1 0 011-1h11v13M15 8h4l2 4v6h-3" />
        </svg>
      );
    case "specialized":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    case "mining":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l-7 8h5l-2 8 7-8h-5l2-8z" />
        </svg>
      );
    case "agriculture":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c-3 0-5-2-5-5 3 0 5 2 5 5zM12 12c0-3 2-5 5-5 0 3-2 5-5 5z" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V10l5 3V10l5 3V7l5 3v11H3z" />
          <path strokeLinecap="round" d="M7 17v.01M11 17v.01M15 17v.01" />
        </svg>
      );
    case "construction":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-5 7 5v12" />
          <path strokeLinecap="round" d="M9 21v-6h6v6" />
        </svg>
      );
    case "retail":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 9h16l-1 12H5L4 9z" />
          <path strokeLinecap="round" d="M9 9V5a3 3 0 016 0v4" />
        </svg>
      );
    case "automotive":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 16l1-5a2 2 0 012-1.5h8A2 2 0 0118 11l1 5v3h-2v-2H7v2H5v-3z" />
          <circle cx="8" cy="16" r="1" fill="currentColor" />
          <circle cx="16" cy="16" r="1" fill="currentColor" />
        </svg>
      );
    case "fisheries":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c3-4 9-4 13 0-4 4-10 4-13 0z" />
          <path strokeLinecap="round" d="M16 12c1-1 3-1 4 0-1 1-3 1-4 0z" />
          <circle cx="7" cy="11" r="0.5" fill="currentColor" />
        </svg>
      );
    case "oilgas":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V10l3-7 3 7v11" />
          <path strokeLinecap="round" d="M9 14h6" />
        </svg>
      );
    case "trading":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-8 4 16 3-8h4" />
        </svg>
      );
    case "sme":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v10M7 12h10" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path strokeLinecap="round" d="M12 7v14" />
          <path strokeLinecap="round" d="M5 12H3a9 9 0 0018 0h-2" />
          <path strokeLinecap="round" d="M8 10h8" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 18H3V6a1 1 0 011-1h11v13M15 8h4l2 4v6h-3" />
        </svg>
      );
    case "plane":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 4l-9 5-9-5-2 2 8 6-3 4-3 0 0 2 4 1 1 4 2 0 0-3 4-3 0-3 4-3-2 0 1-4 4-1 0-2-3 0L3 6l2-2z" />
        </svg>
      );
    case "ship":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 17l7 2 7-2-1-7H6l-1 7z" />
          <path strokeLinecap="round" d="M12 4v8M9 6h6" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h4l2 5-3 2a14 14 0 006 6l2-3 5 2v4a2 2 0 01-2 2A18 18 0 013 6a2 2 0 012-2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="0" strokeLinecap="square" />
          <path strokeLinecap="round" d="M3 7l9 6 9-6" />
        </svg>
      );
    case "map-pin":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-8 8-13a8 8 0 10-16 0c0 5 8 13 8 13z" />
          <circle cx="12" cy="9" r="3" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l1.5-4.5A8 8 0 1112 20a8 8 0 01-4-1L3 21z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9c0 4 2 6 6 6" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M12 7v5l3 2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M21 21l-4-4" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      );
    default:
      return null;
  }
}
