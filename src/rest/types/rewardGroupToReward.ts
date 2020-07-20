import { baseOperations } from '../baseTypes';
import { requestFactory } from '../utils/Helpers';


export type typeData = {
    reward_group_id: string,
    reward_id: string,
};

export type query = Partial<typeData>

export type resolve = never;

export const request = requestFactory<query, typeData[], baseOperations, resolve>('rewardGroupToReward');

