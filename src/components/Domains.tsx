const domains = [
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    tagline: 'Infrastructure as code, pipelines, orchestration',
    points: [
      'Multi-cloud (AWS, Azure) design and operations: EKS, AKS, ECS, RDS, VPC, IAM, security groups.',
      'CI/CD from scratch: GitHub Actions, Jenkins (Pipeline as Code), artifact builds, security scans, multi-environment deployments.',
      'Containers at scale: Docker, Docker Swarm, Kubernetes. Helm, Ingress (Nginx, Traefik), autoscaling, resource tuning.',
      'IaC and config: Terraform, CloudFormation, Ansible. GitOps with ArgoCD for declarative K8s rollouts.',
    ],
  },
  {
    id: 'ai',
    title: 'AI Infrastructure',
    tagline: 'Model serving, inference, MLOps',
    points: [
      'GPU-based AI workloads on AWS EKS and Azure AKS: scheduling, node pools, and resource isolation for training and inference.',
      'End-to-end deployment of Python AI applications and bots: containerization, image builds, and rollout automation.',
      'Observability for ML pipelines: metrics, logging, and alerting so model deployments are as reliable as any other service.',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain Systems',
    tagline: 'Nodes, RPC, indexing, security',
    points: [
      'Infrastructure patterns for node operations: high availability, backup, and secure key handling.',
      'RPC and API gateways: rate limiting, auth, and scaling for public or internal endpoints.',
      'Indexing and data pipelines: reliable sync, monitoring, and failure recovery for chain data.',
    ],
  },
];

export default function Domains() {
  return (
    <section id="domains" className="section-container border-t border-border/50">
      <h2 className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
        Domains
      </h2>
      <p className="text-zinc-500 text-sm mb-10 max-w-xl">
        Where I design, build, and operate systems.
      </p>
      <div className="space-y-10">
        {domains.map((domain, i) => (
          <article
            key={domain.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'backwards' }}
          >
            <div className="rounded-lg border border-border/50 bg-surface-900/50 p-6 sm:p-8 hover:border-border transition-colors">
              <h3 className="text-lg font-semibold text-white font-mono mb-1">
                {domain.title}
              </h3>
              <p className="text-accent/90 text-sm font-mono mb-4">
                {domain.tagline}
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm leading-relaxed">
                {domain.points.map((point, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent/70 mt-1.5 shrink-0">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
