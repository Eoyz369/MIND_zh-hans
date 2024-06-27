const translations = {
    en: {
        "title": "Admin - MIND",
        "auth-title": "Authentication",
        "allow-new-accounts-label": "Allow New Accounts",
        "allow-new-accounts-desc": "Allow users to register a new account. The admin can always add a new account from this panel.",
        "login-time-label": "Login Time",
        "login-time-desc1": "For how long users stay logged in before having to authenticate again. Between 1 minute and 1 month.",
        "login-time-desc2": "New values are applied for newly authenticated users.",
        "login-time-reset-label": "Login Time Trigger",
        "login-time-reset-desc": "For when the login timer should start: starting from the last time MIND was used or from when the user has authenticated.",
        "after-last-use": "After Last Use",
        "after-login": "After Login",
        "logging-title": "Logging",
        "log-level-label": "Logging Level",
        "log-level-info": "Info",
        "log-level-debug": "Debug",
        "download-logs-button": "Download Debug Logs",
        "hosting-title": "Hosting",
        "host-label": "Host",
        "host-desc": "Valid IPv4 address (default is '0.0.0.0' for all available interfaces).",
        "port-label": "Port",
        "port-desc": "The port used to access the web UI (default is '8080').",
        "url-prefix-label": "URL Prefix",
        "url-prefix-desc": "For reverse proxy support (default is empty).",
        "save-hosting-button": "Save and Restart",
        "hosting-note1": "IMPORTANT: After saving the hosting settings, it is required to log into the admin panel within 1 minute (60 seconds) in order to keep the new hosting settings. Otherwise, MIND will revert the changes and go back to the old hosting settings.",
        "hosting-note2": "See the documentation for more information.",
        "user-management-title": "User Management",
        "user-table-user": "User",
        "user-table-actions": "Actions",
        "database-title": "Database",
        "download-db-button": "Download Database",
        "database-file-label": "Database File",
        "copy-hosting-label": "Keep Hosting Settings",
        "copy-hosting-desc": "Keep the current hosting settings instead of using the settings in the uploaded database.",
        "upload-db-button": "Import Database",
        "upload-note1": "IMPORTANT: After uploading the backup, it is required to log into the admin panel within 1 minute (60 seconds) in order to keep the new database file. Otherwise, MIND will revert the upload and go back to the old database.",
        "upload-note2": "See the documentation for more information.",
        "power-title": "Power",
        "restart-button": "Restart",
        "shutdown-button": "Shutdown",
        "save-button-title": "Save Settings",
        "logout-button-title": "Logout",
        "logout-button-aria": "Log out of MIND"
    },
    zh: {
        "title": "管理 - MIND",
        "auth-title": "身份验证",
        "allow-new-accounts-label": "允许新账户",
        "allow-new-accounts-desc": "允许用户注册新账户。管理员始终可以从此面板添加新账户。",
        "login-time-label": "登录时间",
        "login-time-desc1": "用户在重新验证之前保持登录状态的时间。介于1分钟到1个月之间。",
        "login-time-desc2": "新值适用于新验证的用户。",
        "login-time-reset-label": "登录时间触发器",
        "login-time-reset-desc": "登录计时器应从何时开始：从上次使用MIND开始或从用户验证时开始。",
        "after-last-use": "上次使用后",
        "after-login": "登录后",
        "logging-title": "日志记录",
        "log-level-label": "日志级别",
        "log-level-info": "信息",
        "log-level-debug": "调试",
        "download-logs-button": "下载调试日志",
        "hosting-title": "托管",
        "host-label": "主机",
        "host-desc": "有效的IPv4地址（默认是'0.0.0.0'用于所有可用接口）。",
        "port-label": "端口",
        "port-desc": "用于访问Web UI的端口（默认是'8080'）。",
        "url-prefix-label": "URL前缀",
        "url-prefix-desc": "用于反向代理支持（默认是空的）。",
        "save-hosting-button": "保存并重启",
        "hosting-note1": "重要：保存托管设置后，必须在1分钟（60秒）内登录管理面板以保持新托管设置。否则，MIND将恢复更改并返回旧托管设置。",
        "hosting-note2": "查看更多信息，请参阅文档。",
        "user-management-title": "用户管理",
        "user-table-user": "用户",
        "user-table-actions": "操作",
        "database-title": "数据库",
        "download-db-button": "下载数据库",
        "database-file-label": "数据库文件",
        "copy-hosting-label": "保留托管设置",
        "copy-hosting-desc": "保留当前托管设置，而不是使用上传的数据库中的设置。",
        "upload-db-button": "导入数据库",
        "upload-note1": "重要：上传备份后，必须在1分钟（60秒）内登录管理面板以保持新数据库文件。否则，MIND将恢复上传并返回旧数据库。",
        "upload-note2": "查看更多信息，请参阅文档。",
        "power-title": "电源",
        "restart-button": "重启",
        "shutdown-button": "关机",
        "save-button-title": "保存设置",
        "logout-button-title": "登出",
        "logout-button-aria": "登出MIND"
    }

};

function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.innerText = translations[lang][key];
    });
}