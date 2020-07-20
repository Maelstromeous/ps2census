import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    weapon_id: string,
    weapon_slot_index: string,
    clip_size: string,
    capacity: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('weaponAmmoSlot');

