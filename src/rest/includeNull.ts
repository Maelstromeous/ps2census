import { ApplyOperation, baseRequest, commands, operations } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <O extends operations, T, Q, C extends commands, R>(request: baseRequest<O, Q, T, C, R>, field: string): ApplyOperation<'includeNull', O, Q, T, C, R> {
    // @ts-ignore
    return setParam(request, 'c:includeNull', field);
}
