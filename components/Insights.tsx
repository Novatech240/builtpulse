import Image from "next/image";

const posts = [
  {
    tag: "UAE Business Setup",
    title: "[Draft] Mainland, Free Zone or Offshore: choosing your structure",
    excerpt:
      "[Draft excerpt] How jurisdiction and legal form shape licensing, visas and banking.",
    meta: "Draft · Date TBC",
    img: "/insights/thumb-1.png",
  },
  {
    tag: "Tax & Compliance",
    title: "[Draft] Corporate Tax and VAT: what new businesses should plan for",
    excerpt:
      "[Draft excerpt] Registrations, filing cycles and the records to keep from day one.",
    meta: "Draft · Date TBC",
    img: "/insights/thumb-2.png",
  },
  {
    tag: "Marketing & Digital",
    title: "[Draft] Building your digital footprint after licensing",
    excerpt:
      "[Draft excerpt] Domain, website, Google Business Profile and WhatsApp Business essentials.",
    meta: "Draft · Date TBC",
    img: "/insights/thumb-3.png",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-neutral-50 pb-20 pt-20 sm:pb-24 md:pb-[110px] lg:pt-[134px]">
      <div className="wrap">
        <div data-reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Business insights</p>
            <h2 className="mt-4 text-balance text-[34px] font-bold leading-[1.04] tracking-[-0.03em] text-blue-950 sm:text-[42px] md:text-[48px] lg:text-[54px]">
              Insights for building in Dubai.
            </h2>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-[22px]">
          {posts.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="group flex flex-col overflow-hidden rounded-[16px] border border-neutral-100 bg-white shadow-[0_18px_40px_-12px_rgba(18,31,66,0.12)] transition-shadow hover:shadow-[0_24px_48px_-10px_rgba(18,31,66,0.2)]"
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="eyebrow !text-[11px]">{p.tag}</span>
                <h3 className="mt-3 text-[18px] font-semibold leading-[1.33] tracking-[-0.005em] text-blue-950 lg:text-[19px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.55] text-neutral-600 lg:text-[14px]">
                  {p.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-[13px] text-neutral-600 lg:text-[14px]">
                  <span>{p.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-neutral-600">
          Draft placeholders — no published articles or dates are implied.
        </p>
      </div>
    </section>
  );
}
