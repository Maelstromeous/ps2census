import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    fire_group_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('fireGroup');

