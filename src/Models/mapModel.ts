export interface map {
  id: number;
  clusterRaduis: string;
  isGeoFencing: boolean;
  timeBuffer: number;
  locationBuffer: number;
  duration: number;
  mapTypeId: number;
  mapType: MapType;
  mapSubTypeId: number;
  mapSubType: MapSubType;
}
export interface MapType {
  id: number;
  name: string;
}
export interface MapSubType {
  id: number;
  name: string;
}