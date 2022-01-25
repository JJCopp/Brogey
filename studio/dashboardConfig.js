export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61f03ca92c7b2262ab140171',
                  title: 'Sanity Studio',
                  name: 'brogey-studio',
                  apiId: 'cae50bd8-b500-4a05-9685-9495f8214686'
                },
                {
                  buildHookId: '61f03ca9b2525854403fd8cc',
                  title: 'Landing pages Website',
                  name: 'brogey',
                  apiId: '6f29b912-6795-453e-94d4-88aca9908298'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JJCopp/Brogey',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://brogey.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
