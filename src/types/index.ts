export interface DesignSystemAudit {
  id: string; name: string; url: string;
  framework: 'react' | 'vue' | 'angular' | 'web-components';
  complianceScore: number; totalComponents: number;
  compliantComponents: number; nonCompliantComponents: number; missingComponents: number;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  createdAt: string; completedAt?: string;
}
export interface DSComponent {
  id: string; name: string;
  type: 'atom' | 'molecule' | 'organism' | 'template';
  status: 'compliant' | 'non_compliant' | 'missing';
  issuesCount: number; auditId: string; details?: string;
}
