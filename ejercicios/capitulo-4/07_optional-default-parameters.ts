function log(message: string, userId: string = 'Not signed in') {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}

log('User signed out');
log('User clicked on a button', 'abc123');
