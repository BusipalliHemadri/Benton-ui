import React from 'react';
import { Home, UserCheck, UserX } from 'lucide-react';
import StatsCard from './StatsCard';
import { Property, PropertyStatus } from '../../types/property';
import { AddPropertyDialog } from '../forms/AddPropertyDialog';

interface StatsSectionProps {
  properties: Property[];
  activeFilter: PropertyStatus;
  propertyId: number;
  onFilterChange: (filter: PropertyStatus) => void;
}

const StatsSection: React.FC<StatsSectionProps> = ({
  properties,
  activeFilter,
  propertyId,
  onFilterChange,
}) => {
  const totalCount = properties.filter(p => p.buildingId == propertyId).length;
  const occupiedCount = properties.filter(p => (p.status === 'occupied' && p.buildingId == propertyId)).length;
  const vacantCount = properties.filter(p => (p.status === 'vacant' && p.buildingId == propertyId)).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      <StatsCard
        title="Total Rooms"
        count={totalCount}
        isActive={activeFilter === 'all'}
        onClick={() => onFilterChange('all')}
        color="bg-card"
        icon={<Home size={20} className="text-[#eb6e34] mt-[35px]" />}
        countColor="text-[#ffc013]"
      />
      <StatsCard
        title="Occupied Rooms"
        count={occupiedCount}
        isActive={activeFilter === 'occupied'}
        onClick={() => onFilterChange('occupied')}
        color="bg-green-600"
        icon={<UserCheck size={20} className="text-[#eb6e34] mt-[35px]" />}
        countColor="text-[#ffc013]"
      />
      <StatsCard
        title="Vacant Rooms"
        count={vacantCount}
        isActive={activeFilter === 'vacant'}
        onClick={() => onFilterChange('vacant')}
        color="bg-red-600"
        icon={<UserX size={20} className="text-[#eb6e34] mt-[35px]" />}
        countColor="text-[#ffc013]"
      />
      <AddPropertyDialog />
    </div>
  );
};

export default StatsSection;