function getMonth(date: any): number | undefined {
    if (date instanceof Date) {
        return date.getMonth();
    }
    return null;
}

getMonth(new Date().toLocaleTimeString());
