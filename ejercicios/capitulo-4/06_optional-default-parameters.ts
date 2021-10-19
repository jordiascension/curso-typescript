function log(userId: string = 'Not signed in', message: string) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}

log('', 'User signed out'); // 23:11:50 User signed out
log('abc123', 'User clicked on a button'); // 23:11:50 User clicked on a button abc123
