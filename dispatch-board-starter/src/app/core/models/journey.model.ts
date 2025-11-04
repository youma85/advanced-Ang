/**
 * Journey model
 */
export interface Journey {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  status: 'Scheduled' | 'InProgress' | 'Finished';
  assignedVehicleId: number | null;
}
