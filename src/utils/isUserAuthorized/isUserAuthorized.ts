export function isUserAuthorized() {
    return !!localStorage.getItem('token');
}
