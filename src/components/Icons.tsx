import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

// ==================== SOCIAL & UI ICONS ====================

export const GithubIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const CopyIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className = "w-4 h-4", ...props }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ==================== OFFICIAL TECHNOLOGY LOGOS ====================

// Official Docker Whale carrying container blocks
export const DockerLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#2496ED]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Docker Whale logo" {...props}>
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m21.75 2.484c-.45-.302-1.442-.407-2.176-.358-.168-1.428-.973-2.613-2.073-3.364l-.328-.225-.262.302c-.524.605-.805 1.341-.818 2.127-.723-.173-1.638-.173-2.361 0v-.004H.872C.39 12.656 0 13.046 0 13.528c0 1.916.637 3.738 1.842 5.267C3.398 20.76 5.8 21.6 8.525 21.6c6.88 0 12.39-4.323 13.433-10.428.63-.092 1.378-.415 1.794-.972l.248-.33z" />
  </svg>
);

export const PythonLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#3776AB]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Python logo" {...props}>
    <path d="M11.914 0C5.833 0 6.2 2.616 6.2 2.616l.006 2.71h5.81v.834H3.92S0 5.698 0 11.832c0 6.137 3.42 5.918 3.42 5.918h2.04v-2.868s-.11-3.42 3.364-3.42h5.753v-.86H8.823s-3.364.08-3.364-3.31c0-3.388 2.946-3.388 2.946-3.388h7.247s3.15-.05 3.15 3.09v2.24h-1.68V7.93s0-1.89-1.922-1.89H11.914zM12.086 24c6.081 0 5.714-2.616 5.714-2.616l-.006-2.71h-5.81v-.834h8.096s3.92.462 3.92-5.672c0-6.137-3.42-5.918-3.42-5.918h-2.04v2.868s.11 3.42-3.364 3.42H8.823v.86h5.754s3.364-.08 3.364 3.31c0 3.388-2.946 3.388-2.946 3.388H7.748s-3.15.05-3.15-3.09v-2.24h1.68v2.304s0 1.89 1.922 1.89h3.886z" />
  </svg>
);

export const TypeScriptLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#3178C6]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="TypeScript logo" {...props}>
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.396.444v2.671a7.49 7.49 0 0 0-1.41-.581 5.376 5.376 0 0 0-1.472-.213c-.702 0-1.237.14-1.604.419-.367.279-.551.689-.551 1.23 0 .454.125.819.375 1.096.25.276.69.546 1.32.81 1.037.435 1.774.962 2.211 1.582.438.619.657 1.405.657 2.358 0 1.455-.494 2.57-1.482 3.344-.988.774-2.38 1.161-4.174 1.161-.758 0-1.554-.086-2.387-.257a10.9 10.9 0 0 1-2.072-.693v-2.833c.77.444 1.56.776 2.37.995.81.22 1.57.33 2.28.33.68 0 1.206-.135 1.579-.405.373-.27.56-.677.56-1.22 0-.44-.144-.816-.432-1.127-.288-.31-.818-.62-1.59-.93-1.008-.403-1.74-.913-2.196-1.53-.456-.617-.684-1.39-.684-2.32 0-1.378.473-2.453 1.42-3.226.947-.773 2.277-1.16 3.99-1.16zm-7.794.195v11.75H7.76V9.945H4.26V7.477h10.434v2.468H10.694z" />
  </svg>
);

export const JavaScriptLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#F7DF1E]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="JavaScript logo" {...props}>
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.892-1.78-2.617-2.476-.704-.28-1.425-.56-1.425-1.121 0-.422.348-.718.918-.718.665 0 1.171.28 1.564.81l1.523-.974c-.58-1.026-1.6-1.555-3.087-1.555-1.79 0-3.003 1.055-3.003 2.658 0 1.69 1.096 2.35 2.618 2.973.805.33 1.34.568 1.34 1.157 0 .58-.574.887-1.258.887-.978 0-1.63-.518-2.127-1.328l-1.572.936c.642 1.31 1.792 2.052 3.699 2.052 2.04 0 3.364-1.025 3.446-2.846zm-9.088-5.748h-2.136v6.623c0 1.385-.688 1.834-1.79 1.834-.582 0-1.077-.133-1.408-.344l-.382 1.635c.484.28 1.256.467 2.197.467 2.15 0 3.519-1.025 3.519-3.593v-6.622z" />
  </svg>
);

export const CppLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#00599C]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="C++ logo" {...props}>
    <path d="M12.001 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.08 15.65c-2.023 0-3.665-1.642-3.665-3.65 0-2.008 1.642-3.65 3.665-3.65 1.558 0 2.89.972 3.42 2.36h-1.63c-.352-.613-1.01-1.03-1.79-1.03-1.127 0-2.04.914-2.04 2.32 0 1.406.913 2.32 2.04 2.32.78 0 1.438-.417 1.79-1.03h1.63c-.53 1.388-1.862 2.36-3.42 2.36zm7.25-2.73h-1.12v1.12h-.79v-1.12h-1.12v-.79h1.12v-1.12h.79v1.12h1.12v.79zm3.5 0h-1.12v1.12h-.79v-1.12h-1.12v-.79h1.12v-1.12h.79v1.12h1.12v.79z" />
  </svg>
);

export const JavaLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#ED8B00]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Java logo" {...props}>
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.21 0 0 .452.286.992.527-5.549 2.29-11.455-.425-6.614-1.031zm1.258-2.616s-1.08.721.52.887c2.253.232 3.654.195 6.643-.377 0 0 .341.341.745.542-6.575 2.146-12.723-.42-7.908-1.052zm4.331-4.707c.805.894-.213 1.74-.213 1.74s2.046-1.042 1.107-2.364c-.918-1.293-1.637-1.93-3.23-2.855 0 0 1.254 1.118 2.336 3.479zm-7.669 9.873c5.312.33 11.233-.187 14.805-2.091 0 0-.847.664-1.921 1.054-4.526 1.644-14.887 1.63-12.884 1.037zm11.235-14.93c1.07.962.457 2.13.457 2.13s1.085-1.082.355-2.277c-.961-1.573-2.695-2.294-4.225-3.328 0 0 1.956 1.487 3.413 3.475zm-6.289-4.838c.451 1.236-.372 2.846-1.947 4.148-1.517 1.254-2.855 2.39-1.928 4.673.743 1.832 2.502 2.54 3.939 3.018 2.316.772 4.975.606 7.218-.088.077-.024.152-.05.228-.076.621-.219 1.189-.524 1.67-.932-2.144.577-4.475.632-6.685.203-2.152-.418-4.221-1.428-3.905-2.924.321-1.52 2.21-2.294 3.486-3.003 1.954-1.086 3.398-2.693 1.884-5.267-1.39-1.614-3.136-1.545-3.96-.002l-.001.25zm9.585 14.34c.143-.377.219-.773.219-1.182 0-1.745-1.42-3.16-3.172-3.16-.395 0-.773.072-1.127.202 2.052.753 3.524 2.296 4.08 4.14z" />
  </svg>
);

export const GoLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#00ADD8]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Go logo" {...props}>
    <path d="M1.81 9.497c.567-.024 1.135-.04 1.704-.047 1.554-.02 3.109-.01 4.664-.002.474.003.882.23 1.054.67.247.632-.132 1.353-.787 1.487-.234.048-.48.056-.721.057-1.708.006-3.415.006-5.123 0-.693 0-1.228-.46-1.298-1.121-.077-.73.407-1.39 1.134-1.442.126-.008.252-.002.377-.002zm1.69 4.195c1.694 0 3.388 0 5.082.002.695 0 1.25.485 1.306 1.144.062.723-.424 1.385-1.145 1.455-.13.013-.263.007-.394.007-1.636 0-3.272 0-4.908-.002-.751 0-1.341-.564-1.326-1.272.015-.71.603-1.334 1.385-1.336zM15.42 6.643c.96 0 1.92.002 2.88 0 .684-.002 1.228.455 1.308 1.112.088.723-.393 1.402-1.12 1.472-.143.014-.288.008-.432.008-.87 0-1.74 0-2.61.002-.736 0-1.345-.584-1.326-1.27.02-.716.59-1.324 1.3-1.324zm-1.077 4.187c1.33-.004 2.66-.004 3.99 0 .666.002 1.206.467 1.28 1.11.083.722-.403 1.41-1.136 1.477-.13.012-.262.005-.393.005-1.383 0-2.766 0-4.15-.002-.693 0-1.252-.48-1.31-1.14-.065-.724.425-1.387 1.145-1.456.19-.018.384-.004.574-.004zm2.14 4.197c.594 0 1.187.003 1.781 0 .673-.004 1.22.457 1.296 1.11.085.727-.395 1.412-1.127 1.477-.145.013-.292.006-.438.006-.583 0-1.166 0-1.749.003-.708 0-1.295-.515-1.32-1.185-.027-.723.518-1.396 1.242-1.411.105-.002.21 0 .315 0z" />
  </svg>
);

export const ReactLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#61DAFB]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="React logo" {...props}>
    <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-2.5c2.61 0 4.88.58 6.42 1.54C19.98 9.5 21 10.74 21 12c0 1.26-1.02 2.5-2.58 3.46-1.54.96-3.81 1.54-6.42 1.54s-4.88-.58-6.42-1.54C4.02 14.5 3 13.26 3 12c0-1.26 1.02-2.5 2.58-3.46C7.12 7.58 9.39 7 12 7zm0-2c-3.15 0-6 .71-7.85 1.86C2.26 8.04 1 9.87 1 12c0 2.13 1.26 3.96 3.15 5.14C6 18.29 8.85 19 12 19s6-.71 7.85-1.86C21.74 15.96 23 14.13 23 12c0-2.13-1.26-3.96-3.15-5.14C18 5.71 15.15 5 12 5z" />
  </svg>
);

export const NextjsLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#000000]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Next.js logo" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 17.5l-4.7-6.8v6.8h-1.8V6.5h1.8l4.7 6.8V6.5h1.8v11h-1.8z" />
  </svg>
);

export const TailwindLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#06B6D4]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Tailwind CSS logo" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

export const NodejsLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#5FA04E]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Node.js logo" {...props}>
    <path d="M12 0l11 6.35v11.3L12 24 1 17.65V6.35L12 0zm0 2.2L3.1 7.33v9.34L12 21.8l8.9-5.13V7.33L12 2.2z" />
  </svg>
);

export const FastApiLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#009688]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="FastAPI logo" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.75 4.5h1.5v6.75h4.5v1.5h-6V4.5z" />
  </svg>
);

export const DjangoLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#092E20]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Django logo" {...props}>
    <path d="M11.146 0h3.924v18.064c-2.02.327-3.414.45-4.83.45-4.524 0-7.234-2.22-7.234-6.22 0-4.048 2.87-6.52 7.02-6.52.41 0 .782.028 1.12.083V0zm0 8.653c-.356-.055-.7-.083-1.092-.083-2.316 0-3.792 1.34-3.792 3.655 0 2.235 1.393 3.52 3.682 3.52.383 0 .782-.04 1.202-.123V8.653zM21.01 4.526h3.013v10.97c0 3.23-.74 5.37-2.22 6.467-1.365 1.01-3.332 1.365-5.64 1.01l.465-2.65c1.61.274 2.843.11 3.553-.465.738-.574 1.07-1.748 1.07-3.524V4.526h-.24z" />
  </svg>
);

export const PyTorchLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#EE4C2C]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="PyTorch logo" {...props}>
    <path d="M12.5 0a11.97 11.97 0 00-7.39 2.56l2.13 2.13A8.99 8.99 0 0112.5 3c4.97 0 9 4.03 9 9s-4.03 9-9 9a8.99 8.99 0 01-5.26-1.69l-2.13 2.13A11.97 11.97 0 0012.5 24c6.63 0 12-5.37 12-12s-5.37-12-12-12z" />
  </svg>
);

export const PostgreSqlLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#4169E1]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="PostgreSQL logo" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
  </svg>
);

export const MongoDbLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#47A248]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="MongoDB logo" {...props}>
    <path d="M12 0C12 0 5 6.5 5 13.5C5 17.5 8 21 12 24C16 21 19 17.5 19 13.5C19 6.5 12 0 12 0z" />
  </svg>
);

export const RedisLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#DC382D]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Redis logo" {...props}>
    <path d="M21 16.5l-9 4.5-9-4.5V7.5l9-4.5 9 4.5v9z" />
  </svg>
);

export const GitLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#F05032]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Git logo" {...props}>
    <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.126 0L8.808 2.585l3.256 3.256a1.78 1.78 0 011.66.42 1.78 1.78 0 01.42 1.66l3.14 3.14a1.78 1.78 0 011.66.42 1.78 1.78 0 010 2.518 1.78 1.78 0 01-2.518 0 1.78 1.78 0 01-.42-1.66l-2.93-2.93v4.618a1.78 1.78 0 01.49 1.258 1.78 1.78 0 01-1.78 1.78 1.78 1.78 0 01-1.78-1.78c0-.495.203-.943.49-1.258V8.65L7.546 5.37.452 12.464a1.5 1.5 0 000 2.126l10.48 10.48a1.5 1.5 0 002.126 0l10.488-10.488a1.5 1.5 0 000-2.126z" />
  </svg>
);

export const KubernetesLogo: React.FC<IconProps> = ({ className = "w-7 h-7 text-[#326CE5]", ...props }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Kubernetes logo" {...props}>
    <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm0 2.3l8.4 4.8v9.7L12 21.7 3.6 16.8V7.1L12 2.3zm0 3.2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 2a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export const renderTechIcon = (iconType: string, className = "w-7 h-7") => {
  switch (iconType) {
    case 'python': return <PythonLogo className={className} />;
    case 'typescript': return <TypeScriptLogo className={className} />;
    case 'javascript': return <JavaScriptLogo className={className} />;
    case 'cpp': return <CppLogo className={className} />;
    case 'java': return <JavaLogo className={className} />;
    case 'go': return <GoLogo className={className} />;
    case 'react': return <ReactLogo className={className} />;
    case 'nextjs': return <NextjsLogo className={className} />;
    case 'tailwind': return <TailwindLogo className={className} />;
    case 'nodejs': return <NodejsLogo className={className} />;
    case 'fastapi': return <FastApiLogo className={className} />;
    case 'django': return <DjangoLogo className={className} />;
    case 'pytorch': return <PyTorchLogo className={className} />;
    case 'postgresql': return <PostgreSqlLogo className={className} />;
    case 'mongodb': return <MongoDbLogo className={className} />;
    case 'redis': return <RedisLogo className={className} />;
    case 'docker': return <DockerLogo className={className} />;
    case 'kubernetes': return <KubernetesLogo className={className} />;
    case 'git': return <GitLogo className={className} />;
    default: return null;
  }
};

