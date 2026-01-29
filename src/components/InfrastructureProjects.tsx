'use client';

import Reveal from './Reveal';

const projects = [
  {
    id: 'cicd',
    title: 'Secure Enterprise CI/CD Platform',
    stack: 'Terraform, Jenkins, HashiCorp Vault',
    accent: 'security',
    problem:
      'CI/CD ran on shared runners with no secret isolation, inconsistent env parity, and no audit trail for pipeline config changes.',
    architecture:
      'Terraform-provisioned Jenkins controllers per env (dev/stage/prod) in private subnets; Vault for dynamic secrets (DB, API keys). State in S3 + DynamoDB; Jenkins config and job DSL versioned and applied via Terraform null_resource + local-exec where needed.',
    terraform:
      'Modules: vpc, jenkins-controller, vault-auth, s3-backend. Remote state (S3 + DynamoDB lock). Providers: aws, hashicorp/vault. Env separation via workspaces + tfvars per env. IAM roles for Jenkins nodes (least-privilege); no long-lived creds in config.',
    security:
      'Secrets in Vault only; Jenkins nodes assume IAM roles. Network: private subnets, security groups allow only required egress. Pipeline logs and config changes in CloudTrail/config. RBAC in Jenkins and Vault.',
    impact:
      'Single pipeline definition, three isolated envs, zero secrets in code. Rollbacks and audits are traceable; releases are repeatable and compliant.',
  },
  {
    id: 'k8s-multicloud',
    title: 'Multi-Cloud Kubernetes Platform',
    stack: 'Terraform, AWS EKS, GKE',
    accent: 'cloud',
    problem:
      'Teams needed a single pattern to run workloads on AWS and GCP without duplicating ops playbooks or losing env parity.',
    architecture:
      'Terraform modules abstract EKS and GKE: node pools, add-ons (CoreDNS, metrics), IRSA / workload identity. Shared modules for VPC (AWS), VPC (GCP), and app-level Helm releases. State per cloud + per env in S3 and GCS with locking.',
    terraform:
      'Modules: eks-cluster, eks-nodegroup, gke-cluster, gke-nodepool, vpc-aws, vpc-gcp, helm-release. Backend: S3 + DynamoDB (AWS), GCS + bucket (GCP). Providers: aws, google. Env separation via directories (envs/dev, envs/prod) and tfvars. IAM/Service accounts scoped per cluster.',
    security:
      'Private endpoints where possible; node groups in private subnets. Pod-level IAM (IRSA / workload identity). Encryption at rest and in transit; security groups and firewall rules from Terraform. No broad wildcards.',
    impact:
      'Same Terraform patterns for EKS and GKE; new envs are a copy of tfvars and a plan/apply. Reduced drift and consistent networking and RBAC across clouds.',
  },
  {
    id: 'ai-mlops',
    title: 'AI Infrastructure & MLOps Platform',
    stack: 'Terraform, GPU node pools, model serving',
    accent: 'ai',
    problem:
      'ML teams needed dedicated GPU capacity, reproducible envs for training and inference, and a clear path from experiment to production without manual infra tickets.',
    architecture:
      'Terraform-managed GPU node pools (EKS/GKE) with taints and tolerations; separate namespaces for training vs serving. S3/GCS buckets for artifacts and models; optional Kubeflow or custom operators applied via Helm. Inference deployed as K8s services with HPA and resource limits.',
    terraform:
      'Modules: gpu-nodegroup, artifact-bucket, namespace-ml, helm-ml-stack. Remote state S3/GCS + lock. Providers: aws, google, helm, kubernetes. Env separation: dev/stage/prod via tfvars and workspace or directory. IAM and RBAC for data access and node identity.',
    security:
      'GPU nodes in private subnets; no direct internet. Model artifacts in encrypted buckets; access via IAM/service account. Network policies restrict pod-to-pod; secrets for model registry and API keys in Vault or K8s secrets (encrypted).',
    impact:
      'ML teams get GPU capacity and namespaces on demand; training and serving envs are reproducible. Model promotion is a config change and apply, not a ticket queue.',
  },
  {
    id: 'blockchain',
    title: 'Blockchain Infrastructure Platform',
    stack: 'Terraform, nodes, RPC infra',
    accent: 'blockchain',
    problem:
      'Node operators needed repeatable, secure deployment for full nodes and RPC endpoints with high availability and clear backup/restore.',
    architecture:
      'Terraform provisions VMs or K8s workloads per chain; dedicated storage and networking. RPC layer (load balancer + health checks) in front of node group; optional read replicas. State and backups in object storage with lifecycle rules.',
    terraform:
      'Modules: node-instance, rpc-lb, storage-volume, backup-bucket. Remote state S3/GCS + DynamoDB/GCS lock. Providers: aws or google, optional helm for K8s-based nodes. Env separation via tfvars (mainnet vs testnet). IAM/service accounts for node and backup access only.',
    security:
      'Nodes in private subnets; RPC exposed via LB with rate limiting and optional WAF. Key material in Vault or KMS; no keys in Terraform state. Backups encrypted; access logged. Network segmentation between node and RPC layers.',
    impact:
      'New chains or regions are a module instantiation and apply. Node and RPC availability improved; recovery from backup is documented and tested.',
  },
  {
    id: 'chaos-resilience',
    title: 'Chaos Engineering & Resilience Platform',
    stack: 'Terraform, observability, fault injection',
    accent: 'security',
    problem:
      'Outages were found in production; there was no systematic way to test failure modes or validate SLOs under load and faults.',
    architecture:
      'Terraform defines the observability stack (Prometheus, Grafana, alerting) and the chaos namespace and RBAC. Fault injection runs as scheduled or on-demand jobs (e.g. Litmus, Chaos Mesh, or custom pods). Dashboards and alerts are code; runbooks referenced in Terraform outputs.',
    terraform:
      'Modules: prometheus-stack, grafana-dashboards, alertmanager-config, chaos-namespace, chaos-rbac. Remote state S3 + DynamoDB. Providers: aws, kubernetes, helm. Env separation: dev/stage/prod with separate state and tfvars. IAM and K8s RBAC limit who can run chaos and what they can target.',
    security:
      'Chaos scope limited by RBAC and network policies; blast radius contained to non-prod or approved targets. Observability data access controlled; no PII in metrics. Audit log of who ran which experiment and when.',
    impact:
      'Failure modes are exercised before production; SLOs and runbooks are validated. Incidents decreased and MTTR improved because failure paths are known and documented.',
  },
];

const accentClasses = {
  cloud: {
    text: 'text-domain-cloud',
    border: 'border-domain-cloud/30',
    hoverBorder: 'hover:border-domain-cloud/50',
    glow: 'hover:shadow-glow-cyan',
    label: 'text-domain-cloud',
  },
  ai: {
    text: 'text-domain-ai',
    border: 'border-domain-ai/30',
    hoverBorder: 'hover:border-domain-ai/50',
    glow: 'hover:shadow-glow-purple',
    label: 'text-domain-ai',
  },
  blockchain: {
    text: 'text-domain-blockchain',
    border: 'border-domain-blockchain/30',
    hoverBorder: 'hover:border-domain-blockchain/50',
    glow: 'hover:shadow-glow-green',
    label: 'text-domain-blockchain',
  },
  security: {
    text: 'text-domain-security',
    border: 'border-domain-security/30',
    hoverBorder: 'hover:border-domain-security/50',
    glow: 'hover:shadow-glow-orange',
    label: 'text-domain-security',
  },
};

function TerraformBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="mt-3">
      <span className="font-mono text-xs text-zinc-500">{label}</span>
      <p className="text-zinc-400 text-sm leading-relaxed mt-0.5">{content}</p>
    </div>
  );
}

export default function InfrastructureProjects() {
  return (
    <section
      id="infrastructure"
      className="section-container border-t border-border/50 section-gradient relative overflow-hidden"
      aria-labelledby="infrastructure-heading"
    >
      {/* Subtle animated gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-domain-cloud/10 via-domain-ai/5 to-domain-blockchain/10 animate-gradient-shift"
        aria-hidden
      />
      <div className="relative z-10">
      <Reveal>
        <h2
          id="infrastructure-heading"
          className="text-2xl font-semibold text-white mb-2 font-mono tracking-tight"
        >
          Infrastructure & DevOps Projects
        </h2>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl">
          Terraform-driven platforms: modules, remote state, env separation, and security by default.
        </p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        {projects.map((project, i) => {
          const styles = accentClasses[project.accent as keyof typeof accentClasses];
          return (
            <Reveal key={project.id} delay={i * 80}>
              <article
                className={`group rounded-xl border bg-surface-900/50 p-6 sm:p-8 card-glow ${styles.border} ${styles.hoverBorder} ${styles.glow} hover:bg-surface-800/50`}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className={`font-mono text-xs ${styles.label}`}>{project.stack}</span>
                </div>

                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-mono text-xs text-zinc-500">Problem</span>
                    <p className="text-zinc-400 leading-relaxed mt-0.5">{project.problem}</p>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-zinc-500">Architecture</span>
                    <p className="text-zinc-400 leading-relaxed mt-0.5">{project.architecture}</p>
                  </div>
                  <TerraformBlock label="Terraform" content={project.terraform} />
                  <div>
                    <span className="font-mono text-xs text-zinc-500">Security</span>
                    <p className="text-zinc-400 leading-relaxed mt-0.5">{project.security}</p>
                  </div>
                  <div>
                    <span className={`font-mono text-xs ${styles.label}`}>Impact</span>
                    <p className="text-zinc-300 leading-relaxed mt-0.5">{project.impact}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      </div>
    </section>
  );
}
