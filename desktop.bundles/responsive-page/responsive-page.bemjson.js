module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '../merged/merged.min.css' }
    ],
    scripts: [{ elem: 'js', url: '../merged/merged.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                {
                    block: 'colored-block'
                },
                {
                    tag: 'p',
                    content: [
                        'This is a demo page'
                    ]
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        }
    ]
};
