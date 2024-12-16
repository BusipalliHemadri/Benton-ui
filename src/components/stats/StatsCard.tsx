import React from 'react';

interface StatsCardProps {
  title: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  countColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  count,
  isActive,
  countColor,
  onClick,
  icon,
}) => {
  return (
    <div
      className={`flex flex-col items-center m-[1px_10px] p-[5px_0] rounded-lg border-none shadow-none transition-all duration-400 ease-in-out cursor-pointer transform hover:scale-105 ${
        isActive
          ? 'ring-2  scale-105 font-bold tx text-white'
          : 'text-black'
      }`}
      style={{
        backgroundColor: isActive ? '#2eaef0' : '#D3D3D3',
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full px-4">
        <div>
          <div className="text-xl mb-2">{title}</div>
          <div className={`text-xl font-semibold ${countColor}`}>{count}</div>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
