import { splitMatches } from "../lib/search";

/** Renders text with the words that match the search tokens marked. */
export default function Highlight({ text, tokens }) {
  return splitMatches(text, tokens).map((part, index) =>
    part.match ? <mark key={index}>{part.text}</mark> : part.text
  );
}
