export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3e4f34bdf819d8393c438',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-m6z4nbdz',
                  apiId: 'f6b00be5-722c-4fc5-9c54-67e6666cce9c'
                },
                {
                  buildHookId: '5eb3e4f353d2df56dde2d0f7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sb2u17st',
                  apiId: '2ffcf474-4dcb-4b18-bdc8-eca19bd2dd00'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LukasIgn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sb2u17st.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
