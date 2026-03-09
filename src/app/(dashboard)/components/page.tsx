'use client';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Header } from '@/components/layout/Header';
const data = [
  { id:'1',name:'Button',type:'atom',status:'compliant' as const,issues:0 },
  { id:'2',name:'Input',type:'atom',status:'compliant' as const,issues:0 },
  { id:'3',name:'Select',type:'atom',status:'non_compliant' as const,issues:3 },
  { id:'4',name:'Card',type:'molecule',status:'compliant' as const,issues:0 },
  { id:'5',name:'Modal',type:'molecule',status:'non_compliant' as const,issues:2 },
  { id:'6',name:'Toast',type:'atom',status:'missing' as const,issues:0 },
  { id:'7',name:'Navbar',type:'organism',status:'compliant' as const,issues:0 },
  { id:'8',name:'DataTable',type:'organism',status:'non_compliant' as const,issues:5 },
  { id:'9',name:'Tooltip',type:'atom',status:'missing' as const,issues:0 },
  { id:'10',name:'Accordion',type:'molecule',status:'compliant' as const,issues:0 },
  { id:'11',name:'Tabs',type:'molecule',status:'compliant' as const,issues:0 },
];
const sv = { compliant:'success',non_compliant:'error',missing:'warning' } as const;
export default function ComponentsPage() {
  const [search, setSearch] = useState('');
  const [sf, setSf] = useState('all');
  const filtered = data.filter((c)=>{
    if(search&&!c.name.toLowerCase().includes(search.toLowerCase())) return false;
    if(sf!=='all'&&c.status!==sf) return false;
    return true;
  });
  return (<div className="flex flex-col h-full">
    <Header title="Composants" breadcrumbs={[{label:'Accueil',href:'/'},{label:'Composants'}]} />
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"/>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="input w-full pl-10" placeholder="Rechercher..."/></div>
        <Filter className="w-4 h-4 text-gray-400"/>
        <select value={sf} onChange={(e)=>setSf(e.target.value)} className="input text-sm">
          <option value="all">Tous</option><option value="compliant">Conforme</option><option value="non_compliant">Non-conforme</option><option value="missing">Manquant</option></select></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{filtered.map((c)=>(
        <Card key={c.id}><div className="space-y-3"><div className="flex items-center justify-between"><h3 className="text-white font-medium">{c.name}</h3>
          <StatusBadge label={c.status.replace('_',' ')} variant={sv[c.status]}/></div>
          <p className="text-xs text-gray-500 uppercase tracking-wider">{c.type}</p>
          {c.issues>0&&<p className="text-xs text-red-400">{c.issues} issues</p>}</div></Card>))}</div>
    </div></div>);
}
