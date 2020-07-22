import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';

export type typeData = {
    profile_id: string,
    resist_info_id: string,
    rank: string,
};

export type query = {
    profile_id: string,
    rank: string,
    resist_info_id: string
}

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('profileResistMap');