'use client';

import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Multi-cloud CI/CD & DevSecOps pipeline',
    context: 'Forbmax',
    stack: 'Jenkins, SonarQube, Trivy, OWASP, ArgoCD, Kubernetes, Helm',
    problem: 'Manual deployments and inconsistent quality/security gates.',
    solution: 'End-to-end pipeline: checkout → build → tests → SonarQube → Trivy/OWASP → image → integration tests → deployment; GitOps with ArgoCD.',
    impact: 'Repeatable releases with quality and security validated every merge.',
  },
  {
    title: 'GPU AI workloads on EKS & AKS',
    context: 'IKONIC',
    stack: 'AWS EKS, Azure AKS, Docker, GitHub Actions',
    problem: 'AI and Python services needed production-grade K8s with GPU and clear promotion paths.',
    solution: 'Containerized apps and GPU pools on EKS/AKS; resource limits, node affinity, and CI-driven promotion to staging and production.',
    impact: 'Stable inference and training with predictable rollouts and fewer capacity surprises.',
  },
  {
    title: 'Laravel + Docker Swarm production stack',
    context: 'IKONIC',
    stack: 'Docker Swarm, Laravel, PHP, AWS/Azure',
    problem: 'Laravel required HA and low-downtime updates without a large ops team.',
    solution: 'Swarm services with health checks, rolling updates, and network/security group design aligned to the app’s failure modes.',
    impact: 'Predictable operations and calmer releases for customer-facing web stacks.',
  },
  {
    title: 'Observability & alerting stack',
    context: 'Forbmax',
    stack: 'Prometheus, Grafana, Kubernetes',
    problem: 'Cluster and app health was mostly reactive.',
    solution: 'Prometheus + Grafana with alerts tied to real symptoms (latency, error rate, saturation), not just “CPU high.”',
    impact: 'Earlier detection and faster root-cause isolation.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container section-rule" aria-labelledby="projects-heading">
      <Reveal>
        <SectionHeader
          id="projects-heading"
          title="Projects"
          lead="Selected problem → solution → impact work—architectural, not a feature list."
          className="mb-8 sm:mb-10"
        />
      </Reveal>
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 50}>
            <article className="group h-full card-surface p-5 sm:p-6 card-hover">
              <p className="text-brand/85 dark:text-accent/85 font-mono text-xs mb-1">{project.context}</p>
              <h3 className="text-heading font-semibold font-display text-lg mb-1.5 group-hover:text-brand/95 dark:group-hover:text-accent/95 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-subtle text-xs font-mono mb-4 leading-relaxed">{project.stack}</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  <span className="text-subtle font-mono text-xs">Problem</span> {project.problem}
                </p>
                <p>
                  <span className="text-subtle font-mono text-xs">Solution</span> {project.solution}
                </p>
                <p className="text-slate-800 dark:text-zinc-300">
                  <span className="text-brand/80 dark:text-accent/80 font-mono text-xs">Impact</span> {project.impact}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
