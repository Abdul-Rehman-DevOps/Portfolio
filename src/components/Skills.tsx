'use client';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    title: 'Clouds',
    description: 'Platforms I design and operate on.',
    items: ['AWS', 'Azure', 'Digital Ocean', 'GCP', 'Hetzner', 'Vultr', 'cPanel'],
  },
  {
    title: 'DevOps & Orchestration',
    description: 'Production-grade infrastructure patterns.',
    items: [
      'Kubernetes & Docker at scale',
      'Helm, Ingress (Nginx, Traefik)',
      'Prometheus, Grafana, CloudWatch',
      'ELK Stack, Zabbix',
    ],
  },
  {
    title: 'AI/ML Ops',
    description: 'Model deployment and inference infrastructure.',
    items: [
      'GPU workloads on EKS & AKS',
      'Python AI apps & model serving',
      'Containerized inference pipelines',
      'ML observability & scaling',
    ],
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Nodes, RPC, and data pipelines.',
    items: [
      'Node & RPC high availability',
      'Backup & secure key handling',
      'API gateways & rate limiting',
      'Indexing & sync pipelines',
    ],
  },
  {
    title: 'CI/CD & Security',
    description: 'Pipelines and security in the loop.',
    items: [
      'Jenkins, GitHub Actions, GitLab CI',
      'Azure DevOps, CodePipeline',
      'ArgoCD, GitOps, FluxCD',
      'SonarQube, Trivy, OWASP',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container section-rule">
      <Reveal>
        <SectionHeader
          id="skills-heading"
          title="Platforms & experience"
          lead="Cloud, DevOps, AI/ML Ops, blockchain, and delivery—broad, with depth where production demands it."
          className="mb-8 sm:mb-10"
        />
      </Reveal>
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 50}>
            <article className="h-full card-surface p-5 sm:p-6">
              <h3 className="text-brand/95 dark:text-accent/95 font-mono text-sm font-medium mb-0.5">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-subtle text-xs mb-3 leading-relaxed">{category.description}</p>
              )}
              <ul className="space-y-1.5 text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                {category.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand/35 dark:text-accent/40 shrink-0">·</span>
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
