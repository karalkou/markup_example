block('nav').elem('item-link')(
    tag()('a'),
    attrs()(function () {
            return { href: this.ctx.url }
        }
    )
);