export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (credentials) => {
    return {type: USER_LOGIN, credentials: credentials}
}