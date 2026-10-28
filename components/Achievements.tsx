const items = [
  {
    tag: "Business milestone",
    title: "[Milestone title]",
    detail: "[Add a verified detail, date or source]",
  },
  {
    tag: "Verified partnership",
    title: "[Partner name]",
    detail: "[Describe the partnership once approved]",
  },
  {
    tag: "Recognition",
    title: "[Award or recognition]",
    detail: "[Issuing body and year, once verified]",
  },
  {
    tag: "Client outcome",
    title: "[Demonstrable result]",
    detail: "[Measured outcome with client approval]",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-[130px]">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_582px] lg:items-center lg:gap-12">
        <div data-reveal>
          <p className="eyebrow">Achievements</p>
          <h2 className="mt-5 text-[56px] font-extrabold leading-[0.98] tracking-[-0.035em] text-blue-950 sm:text-[80px] md:mt-6 lg:text-[92px] xl:text-[104px]">
            Milestones <br />
            <span className="text-gold-500">that matter.</span>
          </h2>
          <p className="mt-6 text-[13px] leading-[1.55] text-neutral-600 sm:text-[14px] lg:mt-8">
            Editable placeholders — add only verified milestones, partnerships, recognition and outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[21px] sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.tag} data-reveal className="rounded-[20px] bg-neutral-50 px-[26px] pb-7 pt-7">
              <div className="h-[3px] w-8 rounded-full bg-gold-500" />
              <p className="eyebrow mt-5 !text-[11px]">{i.tag}</p>
              <p className="mt-3 text-[24px] font-semibold leading-[1.18] tracking-[-0.01em] text-blue-950 lg:text-[28px]">
                {i.title}
              </p>
              <p className="mt-3 text-[13px] leading-[1.55] text-neutral-600 lg:text-[14px]">{i.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
