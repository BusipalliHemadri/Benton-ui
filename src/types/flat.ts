export interface Flat {
  // roomId: number;
  // id: number;
  roomNumber:string;
  rentAmount: number;
  status: 'occupied' | 'vacant';
  buildingId: number;
  leaseStart:string;
  leaseEnd:string;
  // tenant: string | null;
}