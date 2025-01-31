// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      */
    },
    {
      use: 'gridsome-source-directus',
      options: {
        apiUrl: 'http://xxxcms.kodius.com',
        project: 'kodius',
        email: 'xxx@kodius.com',
        password: 'xxxxxx',
        collections: [
          {
            name: 'technologies',
            status: 'published',
            fields: '*'
          }
        ]
      }
    }
  ]
}
