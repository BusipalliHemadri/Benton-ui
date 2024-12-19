import React from 'react';
import { cn } from '../../../lib/utils';
import { ChevronRight } from 'lucide-react';

interface SubmenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface SidebarSubmenuProps {
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  showSubmenu: boolean;
  onToggle: () => void;
  items: SubmenuItem[];
}

export const SidebarSubmenu: React.FC<SidebarSubmenuProps> = ({
  icon,
  label,
  expanded,
  showSubmenu,
  onToggle,
  items
}) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[#2eaef0] transition-all duration-300",
          !expanded && "justify-center"
        )}
      >
        {icon}
        <span
          className={cn(
            "overflow-hidden text-[#000] hover:text-[#000] transition-all flex-1 text-left",
            expanded ? "w-32" : "w-0"
          )}
        >
          {label}
        </span>
        {expanded && (
          <ChevronRight className={cn("w-4 h-4 transition-transform", showSubmenu && "rotate-90")} />
        )}
      </button>

      {expanded && showSubmenu && (
        <div className="ml-4 mt-2 flex flex-col gap-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className="flex items-center gap-2 p-2 text-[#000] rounded-lg hover:text-[#000] hover:bg-[#2eaef0] transition-all duration-300"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
