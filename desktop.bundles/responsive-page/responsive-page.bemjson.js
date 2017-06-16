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
    content: [
        {
            block: 'page-wrap',
            content: [
                /*- header */
                {
                    block: 'header',
                    content: [
                        {
                            elem: 'inner'
                        }
                    ]
                },
                /*- content-wrap */
                {
                    block: 'content-wrap',
                    mix: { block: 'clearfix' },
                    content: [
                        {
                            elem: 'inner',
                            content: [
                                {
                                    block: 'aside-nav-wrap'
                                },
                                {
                                    block: 'base-page-cnt',
                                    mix: { block: 'content' },
                                    content: [
                                        {
                                            block: 'col',
                                            mods: { persons: true },
                                            content: []
                                        },
                                        {
                                            block: 'col',
                                            mods: { content: true },
                                            content: []
                                        },
                                        {
                                            block: 'col',
                                            mods: { aux: true },
                                            content: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'aux-space',
                            attrs: { style: 'background-color: red' }
                        }
                    ]
                },
                /*- footer */
                {
                    block: 'footer',
                    content: [
                        {
                            elem: 'inner'
                        }
                    ]
                }
            ]
        }
    ]
};
