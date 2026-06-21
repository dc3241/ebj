import Link from "next/link";

const detailLabelClassName =
  "mb-[5px] block font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-blush";

const detailRowClassName =
  "border-t border-[#46464a] py-[18px] text-[0.92rem] text-[#c9c5c2]";

const linkClassName =
  "transition-colors duration-200 hover:text-blush focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blush motion-reduce:transition-none";

export function ContactDetails() {
  return (
    <div>
      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Response time</strong>
        Within 1–2 business days
      </div>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Email</strong>
        <a href="mailto:hello@eventsbyjordyn.com" className={linkClassName}>
          hello@eventsbyjordyn.com
        </a>
      </div>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Instagram</strong>
        <a
          href="https://instagram.com/eventsbyjordyn"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          @eventsbyjordyn
        </a>
      </div>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Service area</strong>
        Arizona — Phoenix, Scottsdale, Sedona, and statewide — plus destination
        weddings across the U.S. and abroad.
      </div>

      {/* TODO: Calendly embed — paste your Calendly inline widget here when ready
          Example:
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/your-link"
            style={{ minWidth: "320px", height: "700px" }}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" async />
      */}
      <div
        className="mt-8 border border-[#46464a] bg-[#3a3a3e] px-6 py-10 text-center"
        role="region"
        aria-label="Consultation booking — Calendly embed coming soon"
      >
        <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-blush">
          Consultation booking
        </p>
        <p className="mt-3 text-sm text-[#c9c5c2]">
          Calendly embed placeholder
        </p>
      </div>
    </div>
  );
}

export function ContactSidebar() {
  return (
    <div>
      <p className="mb-[34px] max-w-[26em] text-[#c9c5c2]">
        Tell me a little about your day. I take a limited number of weddings each
        season so every couple gets my full attention.
      </p>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Response time</strong>
        Within 1–2 business days
      </div>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Email</strong>
        <Link href="mailto:hello@eventsbyjordyn.com" className={linkClassName}>
          hello@eventsbyjordyn.com
        </Link>
      </div>

      <div className={detailRowClassName}>
        <strong className={detailLabelClassName}>Instagram</strong>
        <a
          href="https://instagram.com/eventsbyjordyn"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          @eventsbyjordyn
        </a>
      </div>
    </div>
  );
}
