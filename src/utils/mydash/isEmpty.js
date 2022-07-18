export const isEmpty = (value) => {
    if (!value) {
        return true;
    }
    if (value.length || value.size) {
        return false;
    }
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false
        }
    }
    return true;
}