import {range} from './range';

export const rangeRight = (firstPos, lastPos, step) => {
    return range(firstPos, lastPos, step, true);
}