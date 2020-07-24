import { requestFactory } from '../utils/Helpers';
import { commands, operations } from '../utils/Types';
import playerState from '../types/playerState';

export type typeData = playerState;

export type query = Partial<{
    description: string,
    player_state_id: string
}>;

export type resolve = never;

export default requestFactory<operations, query, typeData[], commands, resolve>('player_state');