


export const LOGIN_INFO_ID = 'login-info';

export function LoginInfo() {
    var loginInfo = document.createElement('div');
    loginInfo.id = LOGIN_INFO_ID;
    loginInfo.innerText = 'Log in or create an account here';

    return loginInfo;
}