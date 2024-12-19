import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Building2,
  PlusCircle
} from 'lucide-react';
import { SidebarNavItem } from './sidebar/SidebarNavItem';
import { SidebarSubmenu } from './sidebar/SidebarSubmenu';

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [expanded, setExpanded] = useState(false);
  const [showPropertySubmenu, setShowPropertySubmenu] = useState(false);
  const [showRentersSubmenu, setShowRentersSubmenu] = useState(false); // New state for Renters submenu
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "h-screen left-0 top-0 z-40 flex flex-col transition-all duration-300 shadow-sm bg-card",
        expanded ? "w-60" : "w-16",
        className
      )}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false);
        setShowPropertySubmenu(false);
        setShowRentersSubmenu(false); // Collapse Renters submenu
      }}
    >
      <nav className="flex items-center flex-col gap-2 p-4">
        <SidebarNavItem
          icon={<LayoutDashboard className="w-4 h-4 text-[#000]" />}
          label="Dashboard"
          onClick={() => navigate('/')}
          expanded={expanded}
        />

        <SidebarSubmenu
          icon={<Building2 className="w-4 h-4 text-[#000]" />}
          label="Properties"
          expanded={expanded}
          showSubmenu={showPropertySubmenu}
          onToggle={() => expanded && setShowPropertySubmenu(!showPropertySubmenu)}
          items={[
            {
              icon: <Building2 className="w-4 h-4 text-[#000]" />,
              label: "View All Properties",
              onClick: () => navigate('/properties')
            },
            {
              icon: <PlusCircle className="w-4 h-4 text-[#000]" />,
              label: "Add Property",
              onClick: () => navigate('/properties/add')
            }
          ]}
        />

        <SidebarSubmenu
          icon={<Building2 className="w-4 h-4 text-[#000]" />}
          label="Renters"
          expanded={expanded}
          showSubmenu={showRentersSubmenu}
          onToggle={() => expanded && setShowRentersSubmenu(!showRentersSubmenu)}
          items={[
            {
              icon: <Building2 className="w-4 h-4 text-[#000]" />,
              label: "All Renters",
              onClick: () => navigate('/renters')
            }
          ]}
        />
      </nav>
    </div>
  );
};
