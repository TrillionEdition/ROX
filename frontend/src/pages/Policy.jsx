import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../components/SiteLayout";

function sectionId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function Policy({ policy }) {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content");
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    document.title = `${policy.title} | ROX4X4`;
    meta.setAttribute("content", policy.description);
    return () => {
      document.title = previousTitle;
      if (created) meta.remove();
      else if (previousDescription !== null) meta.setAttribute("content", previousDescription);
    };
  }, [policy]);

  return (
    <div className="min-h-screen bg-black text-neutral-100 antialiased">
      <Header />
      <main>
        <div className="border-b border-white/10 bg-gradient-to-br from-[#003b18] via-neutral-950 to-black">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-20">
            <Link to="/" className="text-sm text-neutral-300 hover:text-white hover:underline">Home</Link>
            <span className="mx-2 text-neutral-500" aria-hidden="true">/</span>
            <span className="text-sm text-neutral-300">Legal &amp; Policies</span>
            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-red-500">ROX4X4 / Legal</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">{policy.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">{policy.description}</p>
            {policy.lastUpdated && <p className="mt-3 text-sm text-neutral-300">Last updated: {policy.lastUpdated}</p>}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14 lg:px-20">
          <div className="mt-10 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-label="On this page" className="h-fit border-l-2 border-red-600 pl-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-white">On this page</h2>
              <ol className="mt-4 space-y-3 text-sm text-neutral-300">
                {policy.sections.map((section) => (
                  <li key={section.title}><a className="hover:text-white hover:underline" href={`#${sectionId(section.title)}`}>{section.title}</a></li>
                ))}
              </ol>
            </nav>
            <article className="min-w-0 max-w-3xl">
              {policy.sections.map((section) => (
                <section key={section.title} id={sectionId(section.title)} className="scroll-mt-28 border-b border-white/10 pb-8 [&+section]:pt-8">
                  <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-[15px] leading-7 text-neutral-300">{paragraph}</p>)}
                  {section.email && <p className="mt-4 text-[15px] leading-7"><a href={`mailto:${section.email}`} className="text-neutral-100 underline hover:text-white">{section.email}</a></p>}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
