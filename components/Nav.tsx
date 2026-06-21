"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import { headerLinks } from "@/lib/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLinkClassName(isActive: boolean) {
  return `font-sans text-[0.8rem] uppercase tracking-nav transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none ${
    isActive
      ? "text-rose"
      : "text-charcoal hover:text-rose"
  }`;
}

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const contactActive = isActivePath(pathname, "/contact");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 880) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-sm">
      <Container className="flex h-[78px] items-center justify-between">
        <Brand />

        <nav
          className="hidden items-center gap-[34px] min-[881px]:flex"
          aria-label="Main"
        >
          {headerLinks.map((link) => {
            const isActive = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClassName(isActive)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`inline-block border px-[22px] py-[11px] font-sans text-[0.84rem] font-normal uppercase tracking-btn transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none ${
              contactActive
                ? "border-rose-dark bg-rose-dark text-white"
                : "border-rose bg-rose text-white hover:border-rose-dark hover:bg-rose-dark"
            }`}
            aria-current={contactActive ? "page" : undefined}
          >
            Inquire
          </Link>
        </nav>

        <button
          type="button"
          className="hidden border-none bg-transparent text-[1.4rem] text-charcoal max-[880px]:block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-white min-[881px]:hidden"
          aria-label="Mobile"
        >
          <Container className="flex flex-col gap-1 py-6">
            {headerLinks.map((link) => {
              const isActive = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 ${navLinkClassName(isActive)}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`mt-4 inline-block w-fit border px-[22px] py-[11px] font-sans text-[0.84rem] font-normal uppercase tracking-btn transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose motion-reduce:transition-none ${
                contactActive
                  ? "border-rose-dark bg-rose-dark text-white"
                  : "border-rose bg-rose text-white hover:border-rose-dark hover:bg-rose-dark"
              }`}
              aria-current={contactActive ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Inquire
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}
