import { baseOperations, baseRequest } from './baseTypes';
import { ApplyOperation, langs } from './utils/Types';
import { setParam } from './utils/Helpers';

export default function <T, Q, O extends baseOperations, R>(request: baseRequest<Q, T, O, R>, lang: langs): ApplyOperation<'lang', Q, T, O, R> {
    // @ts-ignore
    return setParam(request, 'c:lang', lang);
}
