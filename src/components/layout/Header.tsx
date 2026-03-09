'use client';

import { UserButton } from '@clerk/nextjs';

interface HeaderProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function Header({ title, breadcrumbs = [] }: HeaderProps) {
  return (
    <header className="h-16 border-b border-dark-200 bg-dark-100 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {breadcrumbs.length === 0 && <h1 className="text-lg font-semibold text-white">{title}</h1>}
      </div>
      <UserButton
        appearance={{
          elements: {
            avatarBox: 'w-8 h-8',
          },
        }}
      />
    </header>
  );
}
