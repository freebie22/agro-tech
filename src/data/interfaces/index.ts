export interface Crop {
  id: number;
  name: string;
  type: string;
  plantingDate: string;
  harvestDate: string | null;
  area: number;
  status: string;
  yield: number | null;
}
