const stats = [
  { value: "120", suffix: "+", label: "Projects delivered" },
  { value: "85", suffix: "+", label: "Clients served" },
  { value: "10", suffix: "+", label: "Years of experience" },
  { value: "95", suffix: "%", label: "Client satisfaction" },
];

export default function TrustMetrics({ size = "md", caption = true }: { size?: "md" | "lg"; caption?: boolean }) {
  const lg = size === "lg";
  return (
    <section className={`section relative z-20 ${lg ? "-mt-[72px] sm:-mt-[96px] md:-mt-[119px]" : "-mt-[72px] sm:-mt-[90px] md:-mt-[102px]"}`}>
      <div className={`mx-auto grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 ${lg ? "max-w-[1344px] lg:gap-[25px]" : "max-w-[1248px] lg:gap-[21px]"}`}>
        {stats.map((s) => (
          <div
            key={s.label}
            data-reveal
            className={`relative flex min-h-[150px] flex-col overflow-hidden rounded-[18px] border border-neutral-100 bg-white p-5 shadow-card sm:min-h-[176px] sm:rounded-[22px] sm:p-7 ${lg ? "lg:min-h-[249px] lg:rounded-[26px] lg:px-9 lg:pt-11" : "lg:min-h-[192px]"}`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className={`h-[3px] w-7 rounded-full bg-gold-500 sm:w-8 ${lg ? "lg:w-11" : ""}`} />
              <span className="rounded-full bg-gold-100 px-2 py-1 text-[9px] font-semibold uppercase leading-none tracking-[0.14em] text-blue-950 sm:px-2.5 sm:text-[10px]">
                <span className="sm:hidden">Demo</span>
                <span className="hidden sm:inline">Demo figure</span>
              </span>
            </div>
            <p className={`mt-4 text-[40px] font-extrabold leading-none tracking-[-0.04em] text-blue-950 sm:mt-5 sm:text-[52px] ${lg ? "lg:mt-8 lg:text-[80px]" : "lg:text-[64px]"}`}>
              <span data-count={s.value}>{s.value}</span>
              <span className="text-gold-500">{s.suffix}</span>
            </p>
            <p className={`mt-3 text-[13px] leading-tight text-neutral-600 sm:mt-4 sm:text-[15px] ${lg ? "lg:mt-6 lg:text-[19px]" : "lg:text-[17px]"}`}>{s.label}</p>
          </div>
        ))}
      </div>
      {caption && (
        <p className="mx-auto mt-4 max-w-[1248px] px-1 text-[12px] text-neutral-600 sm:mt-6 sm:text-[13px]">
          Demonstration values only — not verified BuiltPulse statistics. Replace before launch.
        </p>
      )}
    </section>
  );
}
