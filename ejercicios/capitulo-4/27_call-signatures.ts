// function log(message: string, userId?: string)
type Log = (message: string, userId?: string) => void

const log: Log = ( // 1
    message, // 2
    userId = 'Not signed in' // 3
) => { // 4
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
};

log('User'); // 13:51:59 User Not signed in
