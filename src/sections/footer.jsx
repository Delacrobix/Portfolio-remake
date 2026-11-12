import { WRAP } from "../components/Section";
import { SITE } from "../config/site";

export default function Footer() {
  return (
    <footer className='border-t border-rule pt-7 pb-10 text-base text-ink-2'>
      <div className={WRAP}>
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}
