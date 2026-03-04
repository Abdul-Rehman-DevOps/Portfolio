'use client';

import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section-container" aria-labelledby="about-heading">
      <Reveal>
        <h2 id="about-heading" className="text-2xl font-semibold text-white mb-6 font-mono tracking-tight">
          About
        </h2>
      </Reveal>
      <div className="prose-custom space-y-4 max-w-3xl">
        <Reveal delay={50}>
          <p>
            DevSecOps engineer with hands-on experience designing, securing, and
            operating multi-cloud infrastructure across AWS, Azure, and
            high-performance Linux environments. I focus on systems that are
            reliable, auditable, and cost-effective—not on buzzwords.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p>
            I build end-to-end CI/CD pipelines (GitHub Actions, Jenkins, AWS CodePipeline),
            deploy production workloads on Kubernetes, Docker, and Docker Swarm, and
            harden environments with IAM, network security, and access control. At
            Funavry I design scalable Kubernetes on AWS, GitOps with ArgoCD and FluxCD,
            and Web3/blockchain infrastructure; previously at IKONIC I ran Laravel and
            React/Python AI on EKS/AKS, and at Forbmax I architected DevSecOps pipelines
            with SonarQube, Trivy, OWASP, and ArgoCD.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p>
            I care about ownership: from design and automation to monitoring and
            incident response. The goal is always the same—enable fast, confident
            releases on platforms that stay up and stay secure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
