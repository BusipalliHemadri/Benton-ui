export interface Flat {
  // id: number;
  roomNumber:string;
  rentAmount: number;
  status: 'occupied' | 'vacant';
  buildingId: number;
  leaseEnd:string;
  // tenant: string | null;
}