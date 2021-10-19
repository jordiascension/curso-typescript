type Context = {
    appId?: string
    userId?: string
}

function log(message: string, context: Context = {}) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, context.userId);
}

const login: Context = {
    userId: 'def456'
};

const login2: Context = {
    appId: 'xxxxxx',
    userId: 'def456'
};

const login3: Context = {
    appId: 'xxxxxx'
};

log('User signed out'); // 23:29:13 User signed out undefined
log('User clicked on a button', login); // 23:29:13 User clicked on a button def456
log('User clicked on a button', login2); // 23:29:13 User clicked on a button def456
log('User clicked on a button', login3); // 23:29:13 User clicked on a button undefined
