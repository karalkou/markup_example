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
                            elem: 'inner',
                            content: [
                                {
                                    block: 'list',
                                    mix: { block: 'nav' },
                                    wrapper: 'none',
                                    mods: { inline: true },
                                    list: [
                                        {
                                            mix: { block: 'nav', elem: 'item' },
                                            content: []
                                        },
                                        {
                                            mix: { block: 'nav', elem: 'item' },
                                            content: []
                                        },
                                        {
                                            mix: { block: 'nav', elem: 'item' },
                                            content: []
                                        },
                                        {
                                            mix: { block: 'nav', elem: 'item' },
                                            content: []
                                        }
                                    ]
                                }
                            ]
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
                                            content: [
                                                {
                                                    elem: 'inner',
                                                    content: [
                                                        {
                                                            elem: 'header'
                                                        },
                                                        {
                                                            elem: 'content'
                                                        },
                                                        {
                                                            elem: 'footer'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'col',
                                            mods: { content: true },
                                            content: [
                                                {
                                                    elem: 'header'
                                                },
                                                {
                                                    elem: 'content',
                                                    mix: { block: 'overflow', mods: { y: 'overlay' } },
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque corporis culpa cumque, cupiditate dignissimos dolorum eius enim est ex excepturi explicabo incidunt iste labore maiores minima minus modi mollitia nihil nulla officia quidem quo sunt tempora unde vitae, voluptate! Alias cumque debitis deleniti eius ex natus nemo quo rem saepe voluptatibus. Doloribus ea, eaque enim ex id non pariatur sequi vero. Asperiores assumenda at consequuntur enim expedita facere fuga modi molestiae molestias neque nisi, numquam obcaecati odio ratione repellendus tempore, voluptas voluptatibus. Deserunt iste magnam natus numquam possimus soluta voluptatum. A ab, accusantium ad amet animi assumenda commodi consectetur consequuntur culpa cum cupiditate distinctio dolore dolores eos esse eum exercitationem itaque laborum magnam maiores natus, necessitatibus nemo neque obcaecati perspiciatis placeat praesentium quaerat, quasi qui quisquam quo quod ratione repudiandae sequi sit unde voluptates. Asperiores blanditiis, impedit. Assumenda beatae deleniti doloribus et hic id minima molestiae nam non officiis recusandae rem, voluptates? Adipisci aliquid aperiam commodi cum cumque deserunt dolore doloribus et expedita facere fuga fugiat harum illum, inventore molestiae natus nisi nulla obcaecati omnis quae quia quibusdam quos sequi sint tempora veritatis voluptatibus? Adipisci alias aliquam aliquid, animi assumenda atque blanditiis consequatur culpa dignissimos doloribus dolorum earum enim et expedita fugit maiores mollitia nihil numquam officia perferendis quibusdam quo recusandae, repellat sint velit veniam, vitae voluptas. A alias doloribus eaque eum iusto similique vero. A adipisci amet, aperiam aspernatur atque aut autem consectetur, corporis debitis dolore eveniet ex exercitationem harum iste maxime mollitia nisi obcaecati possimus praesentium quas quibusdam quos rerum veritatis voluptate voluptatibus. A asperiores dignissimos dolorem eius enim ex id illo in maiores molestiae, mollitia nam obcaecati odit officiis quas repellat suscipit unde veritatis voluptas, voluptatem. Architecto asperiores aut, cumque cupiditate delectus doloribus ducimus ea esse, exercitationem illum labore non, possimus qui reiciendis rerum sequi ut veniam voluptatibus. Cumque molestias neque soluta unde voluptate! Accusamus animi atque blanditiis commodi cum dolores doloribus earum eius est id impedit maiores maxime, molestias mollitia nam nesciunt officiis porro quas quasi similique sit veritatis vero. A consequuntur doloribus eligendi, ipsam iste, labore laudantium magni neque, nihil nulla numquam officiis omnis quod reiciendis repudiandae rerum saepe! Ab accusamus asperiores assumenda cum, dolor eius eos eveniet explicabo fuga fugiat id illo in ipsa libero molestiae natus neque nihil non numquam quibusdam quidem quos ratione sint soluta suscipit ullam unde ut vitae voluptas voluptatem! Asperiores assumenda atque aut culpa deserunt excepturi, harum incidunt, iure maiores natus nisi quae quaerat quam quos vitae! Aliquam asperiores assumenda consectetur delectus deserunt dignissimos, dolorem doloremque enim ex expedita ipsum iste natus nisi nobis, optio perferendis quam reiciendis repudiandae sed voluptatum. Accusamus architecto aut commodi consectetur corporis eius enim eos explicabo fuga fugit iusto labore laudantium magnam modi nemo nisi, odio omnis possimus quas qui quia quibusdam quis quisquam ratione ullam! At autem facilis impedit necessitatibus quis, quisquam unde. Accusamus culpa, fuga fugiat nihil perspiciatis quas quidem recusandae sapiente sint unde? Alias asperiores cupiditate ipsam omnis quisquam. Accusantium aliquid consectetur ea eaque enim eos impedit itaque nihil, obcaecati odit omnis praesentium, quia tempore totam unde veniam, voluptate voluptatibus? Ad alias, atque debitis dignissimos illo in itaque, magni molestiae neque quasi saepe sapiente sed similique. Aperiam facere, laborum. Accusamus architecto corporis culpa delectus ducimus earum eveniet, incidunt itaque perspiciatis possimus quasi, quos repellat repellendus sed sunt tempore veniam. Ex id ipsam iste modi natus rerum voluptatem? Animi non veritatis voluptates. A at blanditiis commodi consequatur delectus dicta doloremque doloribus ducimus eius eos error esse fuga harum illo ipsum laborum laudantium magnam maiores maxime minima mollitia nesciunt numquam officiis placeat possimus quia quidem recusandae, reiciendis repudiandae sapiente sed sint tenetur totam! A aut consequatur deleniti doloremque dolorum ea, eum exercitationem libero maxime molestias odio quae qui? Aspernatur consectetur, deleniti deserunt dolor eligendi exercitationem minima nemo nisi praesentium quas qui reprehenderit. Blanditiis commodi dicta ea iusto maiores modi praesentium quaerat quibusdam quisquam sequi sit tempora tenetur ut, velit voluptatum. Aliquam consequuntur dolorem dolorum incidunt minima odit quasi, quod sequi sint! Alias animi, aperiam atque aut blanditiis consequatur dolorem eos est ex expedita harum, incidunt ipsum laborum libero maxime, nemo non possimus quidem quis reiciendis rem sed tenetur voluptates! Accusantium architecto aspernatur at debitis deleniti dicta dolor doloribus eius eligendi esse est et eum eveniet excepturi exercitationem explicabo facilis incidunt ipsum labore laudantium, magnam maiores, maxime minima molestiae nobis possimus, quam quibusdam quod ratione sed tempora vel voluptate voluptatem. Accusantium, amet aspernatur, autem consequatur culpa cupiditate dicta doloribus earum eius facilis fuga itaque libero officia omnis optio possimus praesentium provident quas quasi quod tenetur ut vel voluptatum! Architecto blanditiis eligendi laboriosam nemo rerum. Cumque dignissimos itaque pariatur voluptas! Ab alias animi assumenda at atque commodi consequatur deleniti deserunt dolor ducimus est ex facere illum, ipsum iure minima molestiae nihil nostrum nulla placeat porro, praesentium, quas recusandae repellendus sed sit suscipit tenetur totam vero voluptatum? Delectus, et eum harum inventore ipsam iusto nemo nisi odio officia optio, quidem sequi, sit! Ab adipisci at aut consequuntur deserunt dolor dolorum eligendi est ex expedita explicabo facere facilis harum hic id in itaque laborum magni, minima minus molestias neque qui quia quibusdam quidem quis recusandae sint totam vel voluptates. Assumenda at autem laboriosam optio saepe. Aliquam at blanditiis dolor in, iure laudantium sed ut. Animi asperiores aspernatur at culpa debitis delectus dolore enim est eum, id inventore itaque libero mollitia officia, perspiciatis placeat quasi quidem quod recusandae repudiandae rerum suscipit voluptate? Animi est exercitationem quo unde voluptas. Asperiores at debitis dignissimos libero necessitatibus quam quas. Ad autem doloribus eos itaque nam, officiis placeat unde. Ab accusamus at consequuntur cum delectus dolorem ducimus ea eum, fugiat fugit ipsam laborum magni minus modi molestias mollitia officia perferendis, porro praesentium quam quis quos sequi sunt tempore temporibus vel vitae. A alias aperiam obcaecati odit, omnis perferendis quae quod veniam veritatis voluptatem! Adipisci asperiores aspernatur, dolor est ipsa libero magni, maxime minus nostrum quasi recusandae rerum sed? Accusantium aperiam architecto beatae dicta ea eius est et facilis, ipsa laboriosam laborum neque quaerat qui quia quidem quisquam, saepe sequi vitae!'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        },
                                        {
                                            block: 'col',
                                            mods: { aux: true },
                                            content: [
                                                {
                                                    elem: 'header'
                                                },
                                                {
                                                    elem: 'content',
                                                    mix: { block: 'overflow', mods: { y: 'overlay' } },
                                                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda atque corporis culpa cumque, cupiditate dignissimos dolorum eius enim est ex excepturi explicabo incidunt iste labore maiores minima minus modi mollitia nihil nulla officia quidem quo sunt tempora unde vitae, voluptate! Alias cumque debitis deleniti eius ex natus nemo quo rem saepe voluptatibus. Doloribus ea, eaque enim ex id non pariatur sequi vero. Asperiores assumenda at consequuntur enim expedita facere fuga modi molestiae molestias neque nisi, numquam obcaecati odio ratione repellendus tempore, voluptas voluptatibus. Deserunt iste magnam natus numquam possimus soluta voluptatum. A ab, accusantium ad amet animi assumenda commodi consectetur consequuntur culpa cum cupiditate distinctio dolore dolores eos esse eum exercitationem itaque laborum magnam maiores natus, necessitatibus nemo neque obcaecati perspiciatis placeat praesentium quaerat, quasi qui quisquam quo quod ratione repudiandae sequi sit unde voluptates. Asperiores blanditiis, impedit. Assumenda beatae deleniti doloribus et hic id minima molestiae nam non officiis recusandae rem, voluptates? Adipisci aliquid aperiam commodi cum cumque deserunt dolore doloribus et expedita facere fuga fugiat harum illum, inventore molestiae natus nisi nulla obcaecati omnis quae quia quibusdam quos sequi sint tempora veritatis voluptatibus? Adipisci alias aliquam aliquid, animi assumenda atque blanditiis consequatur culpa dignissimos doloribus dolorum earum enim et expedita fugit maiores mollitia nihil numquam officia perferendis quibusdam quo recusandae, repellat sint velit veniam, vitae voluptas. A alias doloribus eaque eum iusto similique vero. A adipisci amet, aperiam aspernatur atque aut autem consectetur, corporis debitis dolore eveniet ex exercitationem harum iste maxime mollitia nisi obcaecati possimus praesentium quas quibusdam quos rerum veritatis voluptate voluptatibus. A asperiores dignissimos dolorem eius enim ex id illo in maiores molestiae, mollitia nam obcaecati odit officiis quas repellat suscipit unde veritatis voluptas, voluptatem. Architecto asperiores aut, cumque cupiditate delectus doloribus ducimus ea esse, exercitationem illum labore non, possimus qui reiciendis rerum sequi ut veniam voluptatibus. Cumque molestias neque soluta unde voluptate! Accusamus animi atque blanditiis commodi cum dolores doloribus earum eius est id impedit maiores maxime, molestias mollitia nam nesciunt officiis porro quas quasi similique sit veritatis vero. A consequuntur doloribus eligendi, ipsam iste, labore laudantium magni neque, nihil nulla numquam officiis omnis quod reiciendis repudiandae rerum saepe! Ab accusamus asperiores assumenda cum, dolor eius eos eveniet explicabo fuga fugiat id illo in ipsa libero molestiae natus neque nihil non numquam quibusdam quidem quos ratione sint soluta suscipit ullam unde ut vitae voluptas voluptatem! Asperiores assumenda atque aut culpa deserunt excepturi, harum incidunt, iure maiores natus nisi quae quaerat quam quos vitae! Aliquam asperiores assumenda consectetur delectus deserunt dignissimos, dolorem doloremque enim ex expedita ipsum iste natus nisi nobis, optio perferendis quam reiciendis repudiandae sed voluptatum. Accusamus architecto aut commodi consectetur corporis eius enim eos explicabo fuga fugit iusto labore laudantium magnam modi nemo nisi, odio omnis possimus quas qui quia quibusdam quis quisquam ratione ullam! At autem facilis impedit necessitatibus quis, quisquam unde. Accusamus culpa, fuga fugiat nihil perspiciatis quas quidem recusandae sapiente sint unde? Alias asperiores cupiditate ipsam omnis quisquam. Accusantium aliquid consectetur ea eaque enim eos impedit itaque nihil, obcaecati odit omnis praesentium, quia tempore totam unde veniam, voluptate voluptatibus? Ad alias, atque debitis dignissimos illo in itaque, magni molestiae neque quasi saepe sapiente sed similique. Aperiam facere, laborum. Accusamus architecto corporis culpa delectus ducimus earum eveniet, incidunt itaque perspiciatis possimus quasi, quos repellat repellendus sed sunt tempore veniam. Ex id ipsam iste modi natus rerum voluptatem? Animi non veritatis voluptates. A at blanditiis commodi consequatur delectus dicta doloremque doloribus ducimus eius eos error esse fuga harum illo ipsum laborum laudantium magnam maiores maxime minima mollitia nesciunt numquam officiis placeat possimus quia quidem recusandae, reiciendis repudiandae sapiente sed sint tenetur totam! A aut consequatur deleniti doloremque dolorum ea, eum exercitationem libero maxime molestias odio quae qui? Aspernatur consectetur, deleniti deserunt dolor eligendi exercitationem minima nemo nisi praesentium quas qui reprehenderit. Blanditiis commodi dicta ea iusto maiores modi praesentium quaerat quibusdam quisquam sequi sit tempora tenetur ut, velit voluptatum. Aliquam consequuntur dolorem dolorum incidunt minima odit quasi, quod sequi sint! Alias animi, aperiam atque aut blanditiis consequatur dolorem eos est ex expedita harum, incidunt ipsum laborum libero maxime, nemo non possimus quidem quis reiciendis rem sed tenetur voluptates! Accusantium architecto aspernatur at debitis deleniti dicta dolor doloribus eius eligendi esse est et eum eveniet excepturi exercitationem explicabo facilis incidunt ipsum labore laudantium, magnam maiores, maxime minima molestiae nobis possimus, quam quibusdam quod ratione sed tempora vel voluptate voluptatem. Accusantium, amet aspernatur, autem consequatur culpa cupiditate dicta doloribus earum eius facilis fuga itaque libero officia omnis optio possimus praesentium provident quas quasi quod tenetur ut vel voluptatum! Architecto blanditiis eligendi laboriosam nemo rerum. Cumque dignissimos itaque pariatur voluptas! Ab alias animi assumenda at atque commodi consequatur deleniti deserunt dolor ducimus est ex facere illum, ipsum iure minima molestiae nihil nostrum nulla placeat porro, praesentium, quas recusandae repellendus sed sit suscipit tenetur totam vero voluptatum? Delectus, et eum harum inventore ipsam iusto nemo nisi odio officia optio, quidem sequi, sit! Ab adipisci at aut consequuntur deserunt dolor dolorum eligendi est ex expedita explicabo facere facilis harum hic id in itaque laborum magni, minima minus molestias neque qui quia quibusdam quidem quis recusandae sint totam vel voluptates. Assumenda at autem laboriosam optio saepe. Aliquam at blanditiis dolor in, iure laudantium sed ut. Animi asperiores aspernatur at culpa debitis delectus dolore enim est eum, id inventore itaque libero mollitia officia, perspiciatis placeat quasi quidem quod recusandae repudiandae rerum suscipit voluptate? Animi est exercitationem quo unde voluptas. Asperiores at debitis dignissimos libero necessitatibus quam quas. Ad autem doloribus eos itaque nam, officiis placeat unde. Ab accusamus at consequuntur cum delectus dolorem ducimus ea eum, fugiat fugit ipsam laborum magni minus modi molestias mollitia officia perferendis, porro praesentium quam quis quos sequi sunt tempore temporibus vel vitae. A alias aperiam obcaecati odit, omnis perferendis quae quod veniam veritatis voluptatem! Adipisci asperiores aspernatur, dolor est ipsa libero magni, maxime minus nostrum quasi recusandae rerum sed? Accusantium aperiam architecto beatae dicta ea eius est et facilis, ipsa laboriosam laborum neque quaerat qui quia quidem quisquam, saepe sequi vitae!'
                                                },
                                                {
                                                    elem: 'footer'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'aux-space'
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
