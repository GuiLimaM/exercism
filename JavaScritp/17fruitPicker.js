// PARA USAR AS API'S TERÁ QUE FAZER TESTAR NO PROPRIO SITE DO EXERCISM
// API'S USADA NOS EXERCICIOS
// import { notify } from './notifier';
// import { order } from './grocer';

function onSuccess() {
    notify({ message: 'SUCCESS' });
}

function onError() {
    notify({ message: 'ERROR' });
}

function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
    order(query, onSuccessCallback, onErrorCallback);
}

function postOrder(variety, quantity) {
    orderFromGrocer({ variety, quantity }, onSuccess, onError)
}
