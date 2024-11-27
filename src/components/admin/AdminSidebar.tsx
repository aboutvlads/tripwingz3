import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Package, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

export function AdminSidebar() {
  const location = useLocation();
  const signOut = useAuthStore((state) => state.signOut);

  const links = [
    { to: '/admin/deals', label: 'Deals', icon: Package },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="p-6">
        <div className="flex items-center">
          <Plane className="h-8 w-8 text-primary-500" />
          <span className="ml-2 text-xl font-display font-bold">Admin</span>
        </div>
      </div>
      <nav className="mt-6">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center px-6 py-3 text-sm font-medium ${
                isActive
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {link.label}
            </Link>
          );
        })}
        <button
          onClick={() => signOut()}
          className="w-full flex items-center px-6 py-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50"
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}