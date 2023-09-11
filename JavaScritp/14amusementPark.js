function createVisitor(name, age, ticketId) {
    const newVisit = {
        name: name,
        age: age,
        ticketId: ticketId
    }

    return newVisit;
}

function revokeTicket(visitor) {
    visitor.ticketId = null;
    return visitor;
}

function ticketStatus(tickets, ticketId) {
    if (tickets[ticketId] === undefined) {
        return 'unknown ticket id';
    } else if (tickets[ticketId] === null) {
        return 'not sold'
    } else {
        return 'sold to ' + tickets[ticketId];
    }
}

function simpleTicketStatus(tickets, ticketId) {
    const result = tickets[ticketId] ?? 1;
    if (result === 1) {
        return 'invalid ticket !!!'
    } else {
        return tickets[ticketId];
    }
}

function gtcVersion(visitor) {
    // const result = visitor.gtc.version ?? 1;
    if (visitor.gtc?.version === undefined) {
        return undefined;
    } else {
        return visitor.gtc.version;
    }
}

const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
        signed: true,
        version: '2.1',
    },
};

const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
};

console.log(gtcVersion(visitorOld));