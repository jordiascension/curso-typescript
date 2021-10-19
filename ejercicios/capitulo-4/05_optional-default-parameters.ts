function log(message: string, userId = 'Not signed in') {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
}

log('User signed out'); // 23:03:47 User signed out Not signed in
log('User clicked on a button', 'abc123'); // 23:03:47 User clicked on a button abc123
