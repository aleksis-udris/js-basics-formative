const visitor_one = {
    'age': 12,
    'is_student': true
}

const visitor_two = {
    'age': 35,
    'is_student': false
}

const visitor_three = {
    'age': 5,
    'is_student': true,
}


function check_ticket(visitor) {
    if (visitor.age < 7) {
        console.log('entry is free');
        return;
    }

    if (visitor.is_student) {
        console.log('entry fee is 5 EUR')
        return
    }

    console.log('entry fee is 10 EUR')
}

check_ticket(visitor_one);
check_ticket(visitor_two);
check_ticket(visitor_three);