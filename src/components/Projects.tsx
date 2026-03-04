'use client';

import Reveal from './Reveal';

const projects = [
  {
    title: 'Multi-cloud CI/CD & DevSecOps pipeline',
    context: 'Forbmax',
    stack: 'Jenkins, SonarQube, Trivy, OWASP, ArgoCD, Kubernetes, Helm',
    problem: 'Manual deployments and inconsistent quality/security gates.',
    solution: 'End-to-end pipeline: checkout → build → tests → SonarQube → Trivy/OWASP → image → integration tests → deployment; GitOps with ArgoCD.',
    impact: 'Automated, repeatable releases with security and quality at every stage.',
  },
  {
    title: 'GPU AI workloads on EKS & AKS',
    context: 'IKONIC',
    stack: 'AWS EKS, Azure AKS, Docker, GitHub Actions',
    problem: 'AI bots and Python models needed reliable, scalable deployment.',
    solution: 'Containerized apps and GPU-based bots on managed Kubernetes; GPU node pools, resource limits, multi-environment promotion.',
    impact: 'Inference and training run reliably in production with clear rollout and scaling.',
  },
  {
    title: 'Laravel + Docker Swarm production stack',
    context: 'IKONIC',
    stack: 'Docker Swarm, Laravel, PHP, AWS/Azure',
    problem: 'Laravel apps required high availability and easy updates.',
    solution: 'Docker Swarm orchestration with health checks, rolling updates, and cloud networking/security groups.',
    impact: 'Stable, scalable web stack with minimal downtime on releases.',
  },
  {
    title: 'Observability & alerting stack',
    context: 'Forbmax',
    stack: 'Prometheus, Grafana, Kubernetes',
    problem: 'Limited visibility into cluster and application health.',
    solution: 'Prometheus metrics, Grafana dashboards, and alerting for SLOs and failures.',
    impact: 'Real-time visibility; issues caught before they affect users.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-container border-t border-border/50" aria-labelledby="projects-heading">
      <Reveal>
        <h2 id="projects-heading" className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
          Projects
        </h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl">
          Problem, solution, and impact—architecture-focused.
        </p>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <article className="group rounded-lg border border-border/50 bg-surface-900/50 p-6 card-hover hover:border-accent/30 hover:shadow-glow-cyan-sm">
              <p className="text-accent/90 font-mono text-xs mb-1">{project.context}</p>
              <h3 className="text-white font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-zinc-500 text-xs font-mono mb-4">{project.stack}</p>
              <div className="space-y-2 text-sm">
                <p className="text-zinc-400">
                  <span className="text-zinc-500 font-mono text-xs">Problem:</span> {project.problem}
                </p>
                <p className="text-zinc-400">
                  <span className="text-zinc-500 font-mono text-xs">Solution:</span> {project.solution}
                </p>
                <p className="text-zinc-300">
                  <span className="text-accent/80 font-mono text-xs">Impact:</span> {project.impact}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
