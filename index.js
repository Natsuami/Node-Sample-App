const statement = ['What', 'is', 'Your', 'Plant', 'Sign?'];
const greeting = statement.join(' ');
console.log(greeting);

const plantMonth = {
    01: {
        month: 'January',
        plant: 'Pothos'
    },
    02: {
        month: 'February',
        plant: 'Monstera'
    },
    03: {
        month: 'March',
        plant: 'Philodendron'
    },
    04: {
        month: 'April',
        plant: 'ZZ Plant'
    },
    05: {
        month: 'May',
        plant: 'Snake Plant'
    },
    06: {
        month: 'June',
        plant: 'Lucky Bamboo'
    },
    07: {
        month: 'July',
        plant: 'Chinese Evergreen'
    },
    08: {
        month: 'August',
        plant: 'Fiddle Leaf Fig'
    },
    09: {
        month: 'September',
        plant: 'Rubber Plant'
    },
    10: {
        month: 'October',
        plant: 'Dracaena'
    },
    11: {
        month: 'November',
        plant: 'Money Plant'
    },
    12: {
        month: 'December',
        plant: 'Poinsettia'
    },
};
console.table(plantMonth)

const yourPlant = n => {
    if (n === 1) {
        return (n + ' is January. ' + 'You are a  Pothos!');
    } else if (n === 2) {
        return (n + ' is February. ' + 'You are a Monstera!');
    } else if (n === 3) {
        return (n + ' is March. ' + 'You are a Philodendron!');
    } else if (n === 4) {
        return (n + ' is April. ' + 'You are a ZZ Plant!');
    } else if (n === 5) {
        return (n + ' is May. ' + 'You are a Snake Plant!');
    } else if (n === 6) {
        return (n + ' is June. ' + 'You are a Lucky Bamboo!');
    } else if (n === 7) {
        return (n + ' is July. ' + 'You are a Chinese Evergreen!');
    } else if (n === 8) {
        return (n + ' is August. ' + 'You are a Fiddle Leaf Fig!');
    } else if (n === 9) {
        return (n + ' is September. ' + 'You are a Rubber Plant!');
    } else if (n === 10) {
        return (n + ' is October. ' + 'You are a Dracaena!');
    } else if (n === 11) {
        return (n + ' is November. ' + 'You are a Money Plant!');
    } else if (n === 12) {
        return (n + ' is December. ' + 'You are a Poinsettia!');
    } else {
        return ('Please enter a number between 1-12!')
    }
}
const thisMonth = () => {
    let month = new Date().getMonth() + 1;
    if (month === 1) {
        return ('We are in January. ' + 'The Plant of the Month is Pothos!');
    } else if (month === 2) {
        return ('We are in February. ' + 'The Plant of the Month is Monstera!');
    } else if (month === 3) {
        return ('We are in March. ' + 'The Plant of the Month is Philodendron!');
    } else if (month === 4) {
        return ('We are in April. ' + 'The Plant of the Month is Plant!');
    } else if (month === 5) {
        return ('We are in May. ' + 'The Plant of the Month is Plant!');
    } else if (month === 6) {
        return ('We are in June. ' + 'The Plant of the Month is Lucky Bamboo!');
    } else if (month === 7) {
        return ('We are in July. ' + 'The Plant of the Month is Chinese Evergreen!');
    } else if (month === 8) {
        return ('We are in August. ' + 'The Plant of the Month is Fiddle Leaf Fig!');
    } else if (month === 9) {
        return ('We are in September. ' + 'The Plant of the Month is Rubber Plant!');
    } else if (month === 10) {
        return ('We are in October. ' + 'The Plant of the Month is Dracaena!');
    } else if (month === 11) {
        return ('We are in November. ' + 'The Plant of the Month is Money Plant!');
    } else if (month === 12) {
        return ('We are in December. ' + 'The Plant of the Month is Poinsettia!');
    }
}
console.log(yourPlant(2))
console.log(thisMonth())