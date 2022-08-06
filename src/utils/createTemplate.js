export const createTemplate = (comp, data) => {
    const tml = document.createElement('div');
    tml.innerHTML = comp(data);
    return tml;
}