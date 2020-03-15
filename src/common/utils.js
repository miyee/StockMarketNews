export function convertISODateToMMDDYYY(isoDate) {
    const dateObject = new Date(isoDate);
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getUTCDate() - 1;
    const year = dateObject.getUTCFullYear();

    return month + '/' + day + '/' + year;
}