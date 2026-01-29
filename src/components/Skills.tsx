'use client';

import Reveal from './Reveal';

const skillCategories = [
  {
    title: 'Clouds',
    description: 'Platforms I design and operate on.',
    items: ['AWS', 'Azure', 'Digital Ocean', 'GCP', 'Hetzner', 'Vultr', 'cPanel'],
  },
  {
    title: 'DevOps & Orchestration',
    description: 'Production-grade infrastructure patterns.',
    items: ['Kubernetes & Docker at scale', 'Helm, Ingress (Nginx, Traefik)', 'Prometheus, Grafana, CloudWatch', 'ELK Stack, Zabbix'],
  },
  {
    title: 'AI/ML Ops',
    description: 'Model deployment and inference infrastructure.',
    items: ['GPU workloads on EKS & AKS', 'Python AI apps & model serving', 'Containerized inference pipelines', 'ML observability & scaling'],
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Nodes, RPC, and data pipelines.',
    items: ['Node & RPC high availability', 'Backup & secure key handling', 'API gateways & rate limiting', 'Indexing & sync pipelines'],
  },
  {
    title: 'CI/CD & Security',
    description: 'Pipelines and security in the loop.',
    items: ['Jenkins, GitHub Actions, GitLab CI', 'Azure DevOps, CodePipeline', 'ArgoCD, GitOps', 'SonarQube, Trivy, OWASP'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-border/50">
      <Reveal>
        <h2 className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
          Platforms & experience
        </h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl">
          Clouds, DevOps, AI/ML Ops, blockchain infra, and CI/CD—high-level experience across domains.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 80}>
            <article className="rounded-lg border border-border/50 bg-surface-900/50 p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
              <h3 className="text-accent font-mono text-sm font-medium mb-1">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-zinc-500 text-xs mb-4">{category.description}</p>
              )}
              <ul className="space-y-2 text-zinc-400 text-sm">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent/60 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
