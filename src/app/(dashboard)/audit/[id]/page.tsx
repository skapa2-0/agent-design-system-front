'use client';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';
const audit = { id:'1', name:'Acme Design System', score:87 };
const comps = [
  { id:'1',name:'Button',type:'atom',status:'compliant' as const,issues:0 },
  { id:'2',name:'Input',type:'atom',status:'compliant' as const,issues:0 },
  { id:'3',name:'Select',type:'atom',status:'non_compliant' as const,issues:3 },
  { id:'4',name:'Card',type:'molecule',status:'compliant' as const,issues:0 },
  { id:'5',name:'Modal',type:'molecule',status:'non_compliant' as const,issues:2 },
  { id:'6',name:'Toast',type:'atom',status:'missing' as const,issues:0 },
  { id:'7',name:'Navbar',type:'organism',status:'compliant' as const,issues:0 },
  { id:'8',name:'DataTable',type:'organism',status:'non_compliant' as const,issues:5 },
];
const issues = [
  { id:'1',comp:'Select',sev:'high' as const,msg:'Missing keyboard navigation' },
  { id:'2',comp:'Modal',sev:'high' as const,msg:'Focus trap not implemented' },
  { id:'3',comp:'DataTable',sev:'medium' as const,msg:'Not responsive on mobile' },
];
const sv = { compliant:'success',non_compliant:'error',missing:'warning' } as const;
const sevV = { low:'info',medium:'warning',high:'error' } as const;
export default function AuditDetailPage() {
  const sc = audit.score>=80?'text-emerald-400':'text-amber-400';
  return (<div className="flex flex-col h-full">
    <Header title={audit.name} breadcrumbs={[{label:'Accueil',href:'/'},{label:'Audits'},{label:audit.name}]} />
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center"><div className={`text-5xl font-bold ${sc}`}>{audit.score}%</div><p className="text-sm text-gray-400 mt-1">Score de conformite</p></div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-400"/><div><p className="text-white font-medium">{comps.filter(c=>c.status==='compliant').length}</p><p className="text-xs text-gray-500">Conformes</p></div></div>
          <div className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-400"/><div><p className="text-white font-medium">{comps.filter(c=>c.status==='non_compliant').length}</p><p className="text-xs text-gray-500">Non-conformes</p></div></div>
          <div className="flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-amber-400"/><div><p className="text-white font-medium">{comps.filter(c=>c.status==='missing').length}</p><p className="text-xs text-gray-500">Manquants</p></div></div>
        </div>
      </div>
      <div><h2 className="text-lg font-semibold text-white mb-4">Composants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">{comps.map((c)=>(
          <Card key={c.id} className="!p-4"><div className="flex items-center justify-between"><div><h3 className="text-white font-medium text-sm">{c.name}</h3><p className="text-xs text-gray-500">{c.type}</p></div>
            <div className="flex items-center gap-2">{c.issues>0&&<span className="text-xs text-red-400">{c.issues} issues</span>}<StatusBadge label={c.status.replace('_',' ')} variant={sv[c.status]}/></div></div></Card>))}</div></div>
      <div><h2 className="text-lg font-semibold text-white mb-4">Issues ({issues.length})</h2>
        <div className="space-y-3">{issues.map((i)=>(
          <Card key={i.id} className="!p-4"><div className="flex items-center gap-3"><StatusBadge label={i.sev} variant={sevV[i.sev]}/><span className="text-sm text-accent">{i.comp}</span><span className="text-sm text-gray-300">{i.msg}</span></div></Card>))}</div></div>
    </div></div>);
}
