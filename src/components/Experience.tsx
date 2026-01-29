'use client';

import Reveal from './Reveal';

const roles = [
  {
    company: 'IKONIC',
    title: 'DevOps Engineer',
    period: 'Mar 2025 – Present',
    location: 'Islamabad, Pakistan',
    description:
      'IKONIC Dev Pvt Ltd builds custom web and mobile software for scalable digital products.',
    highlights: [
      'Designed and maintained Laravel/PHP apps on Docker Swarm with high availability and scalable orchestration.',
      'Built and supported React/Python AI applications, including GPU-based AI bots, on AWS EKS and Azure AKS.',
      'Implemented CI/CD with GitHub Actions: automated build, security checks, and multi-environment deployments.',
      'Managed and secured AWS and Azure (ECS, EKS, RDS, Amplify); configured network security, firewalls, and access controls.',
      'Optimized containerized workloads for performance, cost, and reliability in production.',
    ],
  },
  {
    company: 'Forbmax',
    title: 'DevOps Engineer',
    period: 'Aug 2023 – Mar 2025',
    location: 'Islamabad, Pakistan',
    description:
      'Technology company focused on cloud infrastructure and DevOps practices.',
    highlights: [
      'Architected end-to-end Jenkins pipelines: checkout → build → unit tests → SonarQube → Trivy/OWASP → artifact → image → integration tests → deployment.',
      'Implemented DevSecOps with security at every stage; GitOps with ArgoCD for declarative Kubernetes deployments.',
      'Deployed containerized apps on Kubernetes with Docker and Helm; enhanced observability with Prometheus and Grafana.',
      'Configured Ingress (Nginx, Traefik), autoscaling, and resource tuning; managed EC2, ECR, IAM, and AWS security best practices.',
    ],
  },
  {
    company: 'Onyx Tech',
    title: 'Linux System Administrator',
    period: '2022 – 2023',
    location: 'Lahore',
    description: 'Enterprise Linux and infrastructure operations.',
    highlights: [
      'Administered RHEL 7/8: configurations, patches, YUM/RPM; storage with LVM, partitioning, RAID.',
      'Configured and maintained Apache, DNS, NFS, FTP in production; backup and recovery with rsync and tape backups.',
      'Monitoring and tuning with top, htop, iostat, netstat, pidstat, custom scripts; user access and permissions (SUID, SGID, sticky bits).',
      'Network config: IP, routing, firewall (iptables).',
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
          Roles and impact, CV-style.
        </p>
      </Reveal>
      <div className="space-y-10">
        {roles.map((role, i) => (
          <Reveal key={`${role.company}-${role.period}`} delay={i * 80}>
            <article
              className="rounded-lg border border-border/50 bg-surface-900/30 p-6 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-accent/5"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 className="text-lg font-semibold text-white" itemProp="title">
                  {role.title}
                </h3>
                <span className="text-accent font-mono text-sm" itemProp="hiringOrganization">{role.company}</span>
                <span className="text-zinc-500 text-sm">
                  {role.period} · {role.location}
                </span>
              </div>
              <p className="text-zinc-500 text-sm mb-4">{role.description}</p>
              <ul className="space-y-2 text-zinc-400 text-sm">
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
