var page_mod = require("sdk/page-mod");

page_mod.PageMod({
    include: "*",
    contentScriptFile: "./degenderize.js"
});
