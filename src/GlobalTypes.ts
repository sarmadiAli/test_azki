export type Useage = {
  id: number;
  title: string;
};

export interface VehicleType {
  id: number;
  title: string;
  usages: Useage[];
}
