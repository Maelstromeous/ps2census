import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import projectileFlightType from '../types/projectileFlightType';

export type typeData = projectileFlightType;

export type query = Partial<{
    description: string,
    projectile_flight_type_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('projectile_flight_type');