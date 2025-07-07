
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Users,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  BarChart3,
  Activity,
  Shield,
  Heart
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const navigationItems = [
  { title: 'Dashboard', url: '/', icon: BarChart3 },
  { title: 'Patients', url: '/patients', icon: Users },
  { title: 'Communications', url: '/communications', icon: MessageSquare },
  { title: 'Care Coordination', url: '/care-coordination', icon: Activity },
  { title: 'Appointments', url: '/appointments', icon: Calendar },
  { title: 'Reports & Billing', url: '/reports', icon: FileText },
  { title: 'Compliance', url: '/compliance', icon: Shield },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className="w-64 border-r">
      <SidebarContent>
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold">AI Care Nexus</h2>
              <p className="text-sm text-muted-foreground">Patient Engagement Platform</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive
                          ? 'flex items-center gap-3 px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium'
                          : 'flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700'
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
