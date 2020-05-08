
const ACC_PRECURSOR = 'ACC_PRECURSOR:';


export function getAccountDataKey(username) {
    return ACC_PRECURSOR + username.toLowerCase();
}