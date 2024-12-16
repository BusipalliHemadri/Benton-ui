export interface Property {
  id: number;
  name:string;
  phone:string;
  buildingId:number;
  address: string;
  status: 'occupied' | 'vacant';
}

export type PropertyStatus = 'all' | 'occupied' | 'vacant';