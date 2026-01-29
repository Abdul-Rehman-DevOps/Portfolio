const groups = [
  {
    label: 'Cloud & IaC',
    items: [
      'AWS (EC2, EKS, ECS, RDS, S3, VPC, IAM, ECR, Amplify)',
      'Azure (AKS, VMs, Blob, App Service)',
      'Terraform, CloudFormation, Ansible',
    ],
  },
  {
    label: 'CI/CD & Automation',
    items: [
      'GitHub Actions, Jenkins (Pipeline as Code)',
      'GitLab CI/CD, Azure DevOps, CodePipeline, CodeBuild',
      'ArgoCD, GitOps',
    ],
  },
  {
    label: 'Containers & Orchestration',
    items: [
      'Docker, Docker Swarm, multi-stage builds',
      'Kubernetes, Helm',
      'Nginx, Traefik, Ingress',
    ],
  },
  {
    label: 'Monitoring & Security',
    items: [
      'Prometheus, Grafana, CloudWatch, Zabbix',
      'ELK Stack, CloudTrail',
      'SonarQube, OWASP, Trivy, SSL/TLS, SELinux, IAM',
    ],
  },
  {
    label: 'Languages & Runtimes',
    items: ['Python, Bash, YAML, JSON', 'PHP (Laravel), React, Next.js', '.NET'],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="section-container border-t border-border/50">
      <h2 className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
        Tech Stack
      </h2>
      <p className="text-zinc-500 text-sm mb-10 max-w-xl">
        Tools and platforms I use to build and operate systems.
      </p>
      <div className="flex flex-wrap gap-6">
        {groups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border/50 bg-surface-900/50 px-5 py-4 min-w-[200px]"
          >
            <h3 className="text-accent font-mono text-sm font-medium mb-3">
              {group.label}
            </h3>
            <ul className="text-zinc-400 text-sm space-y-1.5">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
