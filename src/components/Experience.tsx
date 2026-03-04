'use client';

import Reveal from './Reveal';

const roles = [
  {
    company: 'Funavry Technologies',
    title: 'Senior DevOps Engineer',
    period: 'Jan 2026 – Present',
    location: 'Islamabad, Pakistan',
    description: 'IT services company delivering software development, blockchain, and digital solutions for global clients.',
    highlights: [
      'Designed and managed scalable Kubernetes infrastructure on AWS (ECR, ECS, EC2, RDS) with high availability and performance.',
      'Implemented GitOps-based deployment workflows using ArgoCD and FluxCD for automated, reliable delivery across multiple environments.',
      'Optimized cluster scalability with Karpenter and KEDA for dynamic node provisioning and event-driven workload scaling.',
      'Built and maintained secure CI/CD pipelines with GitHub Actions and AWS CodePipeline (build, test, deployment automation).',
      'Implemented service mesh with Istio and Kiali for traffic observability and service monitoring within Kubernetes clusters.',
      'Deployed and supported Web3 / blockchain-based infrastructure for reliable operation of distributed workloads in cloud.',
      'Strengthened cloud security: IAM policies, RBAC, network security across AWS; Defguard VPN for secure remote access.',
      'Developed automation and operational workflows using AWS Lambda for infrastructure management and scaling.',
    ],
  },
  {
    company: 'IKONIC',
    title: 'DevOps Engineer',
    period: 'Mar 2025 – Jan 2026',
    location: 'Islamabad, Pakistan',
    description: 'Custom web and mobile software for scalable digital products.',
    highlights: [
      'Designed, deployed, and maintained Laravel/PHP applications on Docker Swarm with high availability and scalable orchestration.',
      'Built and supported React/Python AI applications and GPU-based AI bots on AWS EKS and Azure AKS.',
      'Implemented CI/CD pipelines with GitHub Actions (automated build, security checks, multi-environment deployments).',
      'Managed and secured cloud infrastructure across AWS and Azure (ECS, EKS, RDS, Amplify); network security, firewalls, access controls.',
      'Optimized containerized workloads for performance, cost efficiency, and operational reliability in production.',
    ],
  },
  {
    company: 'Forbmax',
    title: 'DevOps Engineer',
    period: 'Aug 2023 – Mar 2025',
    location: 'Islamabad, Pakistan',
    description: 'Cloud infrastructure and DevOps-focused technology company.',
    highlights: [
      'Architected end-to-end Jenkins pipelines: checkout → build → unit tests → SonarQube → Trivy/OWASP → artifact → image → integration tests → deployment.',
      'Implemented DevSecOps at every pipeline stage; GitOps with ArgoCD for declarative Kubernetes deployments.',
      'Deployed and automated containerized applications on Kubernetes with Docker and Helm for scalable delivery.',
      'Enhanced observability with Prometheus and Grafana for real-time monitoring and alerting.',
      'Configured Ingress (Nginx, Traefik), autoscaling, resource tuning; managed EC2, ECR, IAM, and AWS security best practices.',
    ],
  },
  {
    company: 'Onyx Tech',
    title: 'Linux System Administrator',
    period: '2022 – 2023',
    location: 'Lahore',
    description: 'Enterprise Linux and infrastructure operations.',
    highlights: [
      'Administered RHEL 7/8: system configurations, security patches, updates (YUM/RPM); LVM, partitioning, RAID for storage.',
      'Configured and maintained Apache, DNS, NFS, FTP in production; backup and recovery with rsync and tape backups.',
      'System monitoring and performance optimization (top, htop, iostat, netstat, pidstat, custom scripts); SUID, SGID, sticky bits.',
      'Network configuration: IP addressing, routing, firewall rules (iptables).',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-container border-t border-border/50" aria-labelledby="experience-heading">
      <Reveal>
        <h2 id="experience-heading" className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight">
          Experience
        </h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl">
          Senior DevOps to Linux systems—platform reliability, security, and automation across production environments.
        </p>
      </Reveal>
      <div className="space-y-8 sm:space-y-10">
        {roles.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 60}>
            <article
              className="experience-card rounded-xl border border-border/50 bg-surface-900/40 p-5 sm:p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-glow-cyan-sm hover:bg-surface-800/50"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-white" itemProp="title">
                  {role.title}
                </h3>
                <span className="text-accent font-mono text-sm" itemProp="hiringOrganization">{role.company}</span>
                <span className="text-zinc-500 text-xs sm:text-sm">
                  {role.period} · {role.location}
                </span>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm mb-4">{role.description}</p>
              <ul className="space-y-2 text-zinc-400 text-xs sm:text-sm">
                {role.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-accent/70 shrink-0">·</span>
                    <span>{h}</span>
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
