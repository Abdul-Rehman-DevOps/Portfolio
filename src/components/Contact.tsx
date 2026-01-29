const links = [
  { label: 'Email', href: 'mailto:abdulrehman.devops@gmail.com', value: 'abdulrehman.devops@gmail.com' },
  { label: 'Phone', href: 'tel:+923039692131', value: '0303-9692131' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-rehman-a197a32b5/', value: 'linkedin.com/in/abdul-rehman-a197a32b5' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-container border-t border-border/50">
      <h2 className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
        Contact
      </h2>
      <p className="text-zinc-500 text-sm mb-8 max-w-xl">
        Open to senior DevOps, cloud architect, and AI infrastructure roles.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        {links.map(({ label, href, value }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex flex-col"
          >
            <span className="text-zinc-500 text-xs font-mono mb-0.5">{label}</span>
            <span className="text-accent group-hover:text-accent-muted transition-colors font-mono text-sm">
              {value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
