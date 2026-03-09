'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Search, Component, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
const navItems = [
  { label: 'Accueil', href: '/', icon: LayoutDashboard },
  { label: 'Nouvel Audit DS', href: '/audit/new', icon: Search },
  { label: 'Composants', href: '/components', icon: Component },
  { label: 'Rapports', href: '/reports', icon: FileText },
];
export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen bg-dark-100 border-r border-dark-200 flex flex-col shrink-0">
      <div className="p-6 border-b border-dark-200">
        <h1 className="text-xl font-bold text-white">Skapa Design System</h1>
        <p className="text-xs text-gray-500 mt-1">Audit IA de Design System</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (<Link key={item.href} href={item.href} className={cn('flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors', isActive ? 'bg-accent text-white' : 'text-gray-400 hover:text-white hover:bg-dark-200')}><Icon className="w-5 h-5" />{item.label}</Link>);
        })}
      </nav>
    </aside>
  );
}
