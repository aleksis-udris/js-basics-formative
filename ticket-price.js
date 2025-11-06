const visitor_age = 12;
const is_student = true;

function check_ticket(age, is_student) {
    if (age < 7) {
        console.log('entry is free');
        return;
    }

    if (age < 21 && is_student) {
        console.log('entry fee is 5 EUR')
        return
    }

    console.log('entry fee is 10 EUR')
}

check_ticket(visitor_age, is_student);