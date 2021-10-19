function log(message: string, userId?: string) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
}

log('Page loaded'); // 22:02:05 Page loaded Not signed in
log('User signed in', 'abc123'); // 22:02:05 User signed in abc123
