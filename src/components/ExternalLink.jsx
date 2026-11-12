/** A link that leaves the site. It always opens in a new tab. */
export default function ExternalLink({ className = "", ...props }) {
  return <a target='_blank' rel='noopener noreferrer' className={className} {...props} />;
}

// Underlined text link used inside sections.
export const TEXT_LINK =
  "font-semibold underline decoration-brand decoration-2 transition-colors duration-150 hover:text-brand";
