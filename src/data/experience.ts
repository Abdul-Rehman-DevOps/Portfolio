/**
 * Work history for the portfolio. Most recent first.
 * ChainGPT: AI + Web3 platform (APIs, SDK, AI hub, on-chain adjacent workloads).
 * Funavry: IT / blockchain / client delivery.
 */

export type ExperienceRole = {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export const experienceRoles: ExperienceRole[] = [
  {
    company: 'ChainGPT',
    title: 'DevSecOps Engineer',
    period: '2026 – Present',
    location: 'Remote',
    description:
      'Web3–native AI company: a Crypto AI hub (LLM apps, smart-contract tooling, trading and news), B2B APIs and SDKs, and ecosystem products (e.g. launchpad, Labs). High-traffic, security-sensitive services at the intersection of AI inference and blockchain.',
    highlights: [
      'Engineer secure, repeatable delivery for AI and Web3-facing services: CI/CD (GitHub Actions) with test gating, container builds, and image/dependency scanning so releases stay auditable and fast to roll back.',
      'Operate and harden container platforms for APIs and data-heavy jobs: Kubernetes patterns (RBAC, network policies, secrets management) to isolate public ingress from internal inference and back-office paths.',
      'Build observability into product SLOs: metrics, logs, and tracing for latency-sensitive AI routes and long-running jobs—tighter MTTR and clearer ownership between platform and app teams.',
      'Automate infrastructure and scaling: node pools, autoscaling, and cost-aware capacity so GPU/CPU pools track traffic and batch load without over-provisioning shared environments.',
      'Strengthen security posture: least-privilege IAM, secret rotation, edge/WAF and rate-limiting where needed, and alignment with data-handling practices for user- and partner-facing GenAI features.',
    ],
  },
  {
    company: 'Funavry Technologies',
    title: 'Senior DevOps Engineer',
    period: 'Jan 2026 – Present',
    location: 'Islamabad, Pakistan',
    description:
      'IT services and product delivery for global clients: Kubernetes on AWS, GitOps, and client-specific compliance and release expectations.',
    highlights: [
      'Own production Kubernetes on AWS (EKS, ECS, supporting RDS/EC2/ECR): HA patterns, autoscaling (Karpenter, KEDA), and cost-aware right-sizing for multi-tenant and dedicated client stacks.',
      'Run GitOps (Argo CD, Flux) across environments to remove snowflake clusters: declarative rollouts, drift detection, and faster, safer promotions from staging to production.',
      'Deliver CI/CD (GitHub Actions, CodePipeline) with test and security stages, artifact promotion, and deployment strategies (rolling/blue–green) matched to each client’s risk profile.',
      'Service mesh (Istio, Kiali) for mTLS, traffic policy, and service-level visibility—clearer canaries, fewer ambiguous incidents during app and infra changes.',
      'Run Web3 / blockchain style workloads: reliable nodes and RPC-style paths, tight network and secret boundaries, and runbooks for failure modes that differ from standard CRUD services.',
      'Security engineering in practice: IAM/RBAC, Defguard for remote access, and defense-in-depth (network, identity, and runtime) on shared and dedicated AWS accounts.',
      'Selective automation (Lambda, APIs) to replace one-off console work: scaling hooks, maintenance tasks, and integrations that reduce toil and human error in operations.',
    ],
  },
  {
    company: 'IKONIC',
    title: 'DevOps Engineer',
    period: 'Mar 2025 – Jan 2026',
    location: 'Islamabad, Pakistan',
    description: 'Custom web and mobile software for scalable digital products.',
    highlights: [
      'Designed, deployed, and maintained Laravel/PHP on Docker Swarm with health checks, rolling updates, and cloud networking that supported predictable releases.',
      'Delivered containerized React/Python AI workloads and GPU services on AWS EKS and Azure AKS: node pools, resource limits, and promotion through CI (GitHub Actions) into production-like environments.',
      'Hardened multi-cloud footprint (AWS, Azure): network controls, access boundaries, and operational runbooks for incidents affecting container and data tiers.',
      'Tuned images and schedulers for cost and reliability—fewer OOMs and noisy-neighbor issues on shared clusters.',
    ],
  },
  {
    company: 'Forbmax',
    title: 'DevOps Engineer',
    period: 'Aug 2023 – Mar 2025',
    location: 'Islamabad, Pakistan',
    description: 'Cloud infrastructure and DevSecOps-focused technology company.',
    highlights: [
      'Architected end-to-end Jenkins pipelines: checkout → build → unit tests → SonarQube → Trivy/OWASP → image → integration tests → deploy—with quality and security as merge gates, not afterthoughts.',
      'Paired every pipeline with GitOps (Argo CD): Kubernetes state matched repo truth; rollbacks and audits became routine rather than fire drills.',
      'Operated Kubernetes + Helm in production: ingress (Nginx, Traefik), autoscaling, and resource baselines that matched actual load patterns.',
      'Shaped observability (Prometheus, Grafana) so on-call time went to known failure modes instead of undifferentiated "something is slow."',
    ],
  },
  {
    company: 'Onyx Tech',
    title: 'Linux System Administrator',
    period: '2022 – 2023',
    location: 'Lahore, Pakistan',
    description: 'Enterprise Linux and infrastructure operations.',
    highlights: [
      'Administered RHEL 7/8: security patches, LVM, RAID, and disciplined change windows for business-critical services.',
      'Operated core network services (Apache, DNS, NFS, FTP) and backup/restore (rsync, tape) with tested recovery steps.',
      'Performance and monitoring (standard tooling + scripts); firewall and network configuration for clear trust boundaries.',
    ],
  },
];
