export default defineAppConfig({
  docus: {
    title: 'Nuxt Layers List',
    description: 'A list of great nuxt layers to use immediately',
    socials: {
      github: 'davidmeirlevy/nuxt-layers',
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
