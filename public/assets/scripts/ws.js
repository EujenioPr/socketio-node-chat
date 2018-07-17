const socket = io('http://localhost:8080');

socket.on('connected', (msg) => {
   console.log(msg);
});

socket.on('message', (msg) => {
    console.log(msg);
});

const user = {
    name: 'Torey Caylor',
    nickname: 'caylor'
};

socket.emit('userArrived', user);