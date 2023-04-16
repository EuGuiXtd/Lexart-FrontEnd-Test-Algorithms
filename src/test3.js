const string = 'abcdefghijklmnopqrstuvwxyz0123456789'
const round = () => {
    return string[Math.round(Math.random() * 35)];
};
const roundGroup = () => {
    return round() + round() + round() + round();
};
const generateId = () => {
    return `${roundGroup()}-${roundGroup()}-${roundGroup()}-${roundGroup()}`
};
const id = generateId()
console.log(id)