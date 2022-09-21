module.exports = {
    beautify: true,
    prefix: "//some-cdn",
    relative: true,
    basePath: false,
    scripts: {
        bundle: [
            "backend/server.js",
            "frontend/js/home.js",
        ],
        main: "scripts/main.js"
    },
    styles: {
        bundle: [
            "frontend/css/home.css",
            "frontend/css/main.css"
        ],
    },
    sections: {
        views: "frontend/public/home.html",
        templates: "",
        layout: {
            header: "",
            footer: ""
        }
    },
    data: {
        // Data to pass to templates
        version: "0.1.0",
        title: "test",
    }
};