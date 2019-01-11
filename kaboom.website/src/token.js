let token = null;

const saveToken = function saveToken(id_token) {
    token = id_token;
}

const removeToken = function removeToken() {
    token = null;
}

const getToken = function getToken() {
    return token;
}

const isAuthenticated = function isAuthenticated() {
    return gapi.auth2.isSignedIn.get();
}

exports.saveToken = saveToken;
exports.getToken = getToken;
exports.isAuthenticated = isAuthenticated;
exports.removeToken = removeToken;