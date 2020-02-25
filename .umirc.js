// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/Contact',
          component: './Contact',
        },
        {
          path: '/EducationBackground',
          component: './EducationBackground',
        },
        {
          path: '/Home',
          component: './Home',
        },
        {
          path: '/MoreAboutMe',
          component: './MoreAboutMe',
        },
        {
          path: '/WorkExperiences',
          component: './WorkExperiences',
        },
        {
          path: '/MySkills',
          component: './MySkills',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        history: 'hash',
        dynamicImport: false,
        title: 'my_website',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
