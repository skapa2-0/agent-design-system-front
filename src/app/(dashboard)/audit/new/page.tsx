'use client';
import { useState } from 'react';
import { Search, Rocket } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Header } from '@/components/layout/Header';
export default function NewAuditPage() {
  const [url, setUrl] = useState('');
  const [fw, setFw] = useState('react');
  return (<div className="flex flex-col h-full">
    <Header title="Nouvel Audit" breadcrumbs={[{label:'Accueil',href:'/'},{label:'Nouvel Audit DS'}]} />
    <div className="p-6 max-w-2xl"><Card><CardHeader><CardTitle>Lancer un audit de Design System</CardTitle></CardHeader>
      <CardContent><div className="space-y-6">
        <div><label className="block text-sm font-medium text-gray-300 mb-2">URL du Design System ou Storybook</label>
          <div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"/>
            <input type="url" value={url} onChange={(e)=>setUrl(e.target.value)} className="input w-full pl-10" placeholder="https://storybook.example.com"/></div></div>
        <div><label className="block text-sm font-medium text-gray-300 mb-2">Framework</label>
          <div className="grid grid-cols-2 gap-3">{['react','vue','angular','web-components'].map((f)=>(
            <button key={f} onClick={()=>setFw(f)} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${fw===f?'border-accent bg-accent/10 text-accent':'border-dark-200 text-gray-400 hover:border-gray-500'}`}>
              {f==='web-components'?'Web Components':f.charAt(0).toUpperCase()+f.slice(1)}</button>))}</div></div>
        <button className="btn-primary w-full flex items-center justify-center gap-2"><Rocket className="w-4 h-4"/>{"Lancer l'audit"}</button>
      </div></CardContent></Card></div></div>);
}
