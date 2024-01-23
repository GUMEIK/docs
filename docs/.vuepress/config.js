const sidebar = require("./sidebar");
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:"/docs/",
    themeConfig: {
        sidebar: sidebar
    }
}