import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import fireGroup from '../types/fireGroup';

export type typeData = fireGroup;

export type query = Partial<{
    can_chamber_ironsights: string,
    chamber_duration_ms: string,
    fire_group_id: string,
    spool_up_initial_refire_ms: string,
    spool_up_ms: string,
    transition_duration_ms: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('fire_group');