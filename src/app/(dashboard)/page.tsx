'use client';
import { LayoutDashboard, Component, CheckCircle, XCircle, Search } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';
import { formatDate } from '@/lib/utils';
const stats = [
  { label: 'Audits DS', value: '12', icon: LayoutDashboard, color: 'text-blue-400' },
  { label: 'Composants', value: '284', icon: Component, color: 'text-purple-400' },
  { label: 'Conformes', value: '210', icon: CheckCircle, color: 'text-emerald-400' },
  { label: 'Non-Conformes', value: '74', icon: XCircle, color: 'text-red-400' },
];
const audits = [
  { id: '1', name: 'Acme DS', score: 87, comps: 45, status: 'completed' as const, date: '2024-01-15' },
  { id: '2', name: 'Nova UI', score: 62, comps: 32, status: 'completed' as const, date: '2024-01-12' },
  { id: '3', name: 'Pulse', score: 0, comps: 0, status: 'in_progress' as const, date: '2024-01-10' },
];
const bars = [{l:'Buttons',v:95},{l:'Forms',v:78},{l:'Cards',v:88},{l:'Nav',v:65},{l:'Typography',v:92}];
const sv = { pending:'default',in_progress:'warning',completed:'success',failed:'error' } as const;
export default function DashboardPage() {
  return (<div className="flex flex-col h-full"><Header title="Tableau de bord" />
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s)=>{const I=s.icon;return(<Card key={s.label}><div className="flex items-center justify-between"><div><p className="text-sm text-gray-400">{s.label}</p><p className="text-2xl font-bold text-white mt-1">{s.value}</p></div><I className={`w-8 h-8 ${s.color}`}/></div></Card>);})}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div><div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold text-white">Audits recents</h2>
          <Link href="/audit/new" className="btn-primary flex items-center gap-2 text-sm"><Search className="w-4 h-4"/>Nouvel Audit</Link></div>
          <div className="space-y-3">{audits.map((a)=>(<Card key={a.id}><div className="flex items-center justify-between"><div><h3 className="text-white font-medium">{a.name}</h3><p className="text-xs text-gray-500 mt-1">{formatDate(a.date)} - {a.comps} composants</p></div>
            <div className="flex items-center gap-3">{a.score>0&&<span className={`text-lg font-bold ${a.score>=80?'text-emerald-400':'text-amber-400'}`}>{a.score}%</span>}<StatusBadge label={a.status.replace('_',' ')} variant={sv[a.status]}/></div></div></Card>))}</div></div>
        <div><h2 className="text-lg font-semibold text-white mb-4">Conformite</h2>
          <Card><div className="space-y-4">{bars.map((d)=>(<div key={d.l}><div className="flex justify-between text-sm mb-1"><span className="text-gray-400">{d.l}</span><span className={d.v>=80?'text-emerald-400':'text-amber-400'}>{d.v}%</span></div>
            <div className="w-full bg-dark-200 rounded-full h-2"><div className={`rounded-full h-2 ${d.v>=80?'bg-emerald-500':'bg-amber-500'}`} style={{width:`${d.v}%`}}/></div></div>))}</div></Card></div>
      </div>
    </div></div>);
}
