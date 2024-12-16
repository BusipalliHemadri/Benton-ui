import React from 'react';
import { cn } from '../../../lib/utils';

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  expanded: boolean;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  icon,
  label,
  onClick,
  expanded
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        // "flex items-center cursor-pointer gap-2 p-2 hover:text-[#fff] rounded-lg transition-all",
        "flex items-center cursor-pointer gap-2 p-2 rounded-lg hover:bg-[#2eaef0] transition-all duration-300",
        !expanded && "justify-center"
      )}
    >
      {icon}
      <span className={cn("overflow-hidden transition-all text-[#] hover:text-[#000]", expanded ? "w-32" : "w-0")}>
        {label}
      </span>
    </button>
  );
};