const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx='10.5' cy='10.5' r='6.5' />
    <path d='M15.5 15.5 21 21' />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d='M12 3v12M7 10l5 5 5-5M5 21h14' />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d='M4 7h16M4 12h16M4 17h10' />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} {...props}>
    <path d='M5 5l14 14M19 5 5 19' />
  </svg>
);

export const SunIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx='12' cy='12' r='4' />
    <path d='M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' />
  </svg>
);

export const MoonIcon = (props) => (
  <svg {...base} {...props}>
    <path d='M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z' />
  </svg>
);
