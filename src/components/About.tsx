'use client';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="section-container scroll-mt-6" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeader
          id="about-heading"
          title="About"
          lead="Platform engineering with security, cost, and operability in scope from day one."
          className="mb-8 sm:mb-10"
        />
      </Reveal>
      <div className="prose-custom space-y-4 max-w-3xl text-[15px] sm:text-base">
        <Reveal delay={40}>
          <p>
            DevSecOps engineer with experience designing, securing, and operating multi-cloud
            infrastructure across AWS, Azure, and high-performance Linux. I focus on systems that are
            reliable, auditable, and cost-effective—clear constraints, not buzzwords.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p>
            Today I split my time between <strong className="text-slate-900 dark:text-zinc-200">ChainGPT</strong>, where I
            help secure and automate delivery for AI- and Web3-adjacent services (APIs, inference paths,
            and high-trust environments), and <strong className="text-slate-900 dark:text-zinc-200">Funavry</strong>, where
            I run client Kubernetes and GitOps on AWS for teams that need predictable, compliant release
            cadences. I build end-to-end CI/CD, deploy production workloads on Kubernetes, Docker, and
            Swarm, and harden environments with IAM, network controls, and solid observability.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p>
            Ownership means design and automation, but also on-call reality: clear metrics, runbooks
            that match how failures actually show up, and changes small enough to reason about. The
            goal stays the same—fast, confident releases on platforms that stay up and stay secure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
