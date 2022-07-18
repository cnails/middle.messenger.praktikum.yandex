export const range = (firstPos, lastPos, step, fromRight = false) => {
    const res = [];
    if (lastPos === undefined) {
        lastPos = firstPos;
        firstPos = 0;
    }
    if (step === undefined) {
        step = lastPos < 0 ? -1 : 1;
    }
    let len = Math.max(Math.ceil((lastPos - firstPos) / (step || 1)), 0);

    let ind = 0;
    while (len--) {
        res[fromRight ? len : ind++] = firstPos;
        firstPos += step;
    }

    return res;
}