import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    item_id: string,
    vehicle_id: string,
    faction_id: string,
    description: string,
    slot_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('vehicleAttachment');

