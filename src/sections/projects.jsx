import { useTranslation } from "react-i18next";
import Entry, { BulletList, EntryTitle } from "../components/Entry";
import ExternalLink, { TEXT_LINK } from "../components/ExternalLink";
import Section from "../components/Section";
import darkScoreImage from "../assets/images/products/dark-score.webp";

// Screenshots or cover images of the products that have one, by product id.
const PRODUCT_IMAGES = { "dark-score": darkScoreImage };

/** Client work, followed by the author's own products with their image and links. */
export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.list", { returnObjects: true });
  const products = t("projects.products", { returnObjects: true });

  return (
    <Section id='projects'>
      {projects.map((project, index) => (
        <Entry key={project.name} id={`project-${index}`} aside={project.period}>
          <EntryTitle>{project.name}</EntryTitle>
          <p className='mt-0.5 text-ink-2'>{project.client}</p>
          {project.bullets && <BulletList items={project.bullets} />}
          {project.text && <p className='mt-3 max-w-[40em]'>{project.text}</p>}
        </Entry>
      ))}

      <h3 className='mt-11 mb-[18px] text-[19px] leading-[1.3] font-bold'>{t("projects.productsTitle")}</h3>
      {products.map((product, index) => (
        <Entry
          key={product.id}
          id={`product-${index}`}
          aside={
            PRODUCT_IMAGES[product.id] && (
              <img
                src={PRODUCT_IMAGES[product.id]}
                alt=''
                loading='lazy'
                width='300'
                height='158'
                className='aspect-[40/21] w-[150px] rounded-md bg-rule object-cover'
              />
            )
          }>
          <EntryTitle>{product.name}</EntryTitle>
          <p className='mt-1 max-w-[40em] text-ink-2'>{product.text}</p>
          {(product.url || product.repo) && (
            <p className='mt-3 flex flex-wrap gap-x-[22px] gap-y-2 text-[17px]'>
              {product.url && (
                <ExternalLink href={product.url} className={TEXT_LINK}>
                  {t("projects.liveApp")}
                </ExternalLink>
              )}
              {product.repo && (
                <ExternalLink href={product.repo} className={TEXT_LINK}>
                  {t("projects.repo")}
                </ExternalLink>
              )}
            </p>
          )}
        </Entry>
      ))}
    </Section>
  );
}
