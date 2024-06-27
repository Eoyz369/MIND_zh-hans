const translations = {
    en: {
        "title": "Login - MIND",
        "login-title": "Login",
        "username-error": "*Username not found",
        "password-error": "*Password incorrect",
        "switch-create": "Or create an account",
        "login-button": "Login",
        "create-title": "Create",
        "new-username-error": "*Username invalid",
        "taken-username-error": "*Username already taken",
        "switch-login": "Or log into an account",
        "create-button": "Create",
        "noscript":"Javascript is disabled. The web-ui of MIND does not work with JavaScript disabled."
    },
    zh: {
        "title": "登录 - MIND",
        "login-title": "登录",
        "username-error": "*用户名未找到",
        "password-error": "*密码错误",
        "switch-create": "或者创建一个账户",
        "login-button": "登录",
        "create-title": "创建",
        "new-username-error": "*用户名无效",
        "taken-username-error": "*用户名已被使用",
        "switch-login": "或者登录一个账户",
        "create-button": "创建",
        "noscript":"Javascript 已禁用。禁用 JavaScript 后，MIND 的 Web-ui 无法运行。"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerText = translations[lang][key];
    });
}