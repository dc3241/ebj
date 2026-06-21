import Link from "next/link";
import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import { Rule } from "@/components/Rule";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-cream py-16 pb-10 text-center">
      <Container>
        <div className="mb-2">
          <Brand size="footer" showTagline={false} />
        </div>

        <Rule className="my-6" />

        <nav
          className="my-[26px] flex flex-wrap justify-center gap-7"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-[0.76rem] uppercase tracking-nav text-slate transition-colors duration-200 hover:text-rose focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-[18px] font-sans text-[0.74rem] tracking-[0.06em] text-slate">
          © {new Date().getFullYear()} Events by Jordyn · Wedding Planning
          &amp; Design
        </p>
      </Container>
    </footer>
  );
}
