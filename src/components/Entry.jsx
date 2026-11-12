/** A dated entry: the period or rank on the left, the detail on the right. */
export default function Entry({ id, aside, children }) {
  return (
    <article
      id={id}
      className='grid gap-1 border-t border-rule py-[26px] first:border-t-0 first:pt-0 last:pb-0 wide:grid-cols-[150px_1fr] wide:gap-7 print:grid-cols-[150px_1fr] print:gap-7 print:py-4'>
      <div className='pt-1 text-[16.5px] font-medium text-ink-2'>{aside}</div>
      <div className='min-w-0'>{children}</div>
    </article>
  );
}

export function EntryTitle({ children }) {
  return <h3 className='text-[22px] leading-[1.3] font-bold tracking-[-0.01em]'>{children}</h3>;
}

export function BulletList({ items }) {
  return (
    <ul className='mt-3.5 max-w-[40em] list-disc pl-5 marker:text-rule-2'>
      {items.map((item) => (
        <li key={item} className='my-1.5 pl-0.5'>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TagList({ tags }) {
  return (
    <ul className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li key={tag} className='rounded-md border border-rule-2 px-[9px] py-0.5 text-[15px] font-medium text-ink-2'>
          {tag}
        </li>
      ))}
    </ul>
  );
}
