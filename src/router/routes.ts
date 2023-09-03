export const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'home',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'House',
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Monitor',
    },
  },
  {
    path: '/access-control',
    component: () => import('@/views/home/index.vue'),
    name: 'access-control',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    // 要将组件渲染到这个嵌套的 router-view 中，我们需要在路由中配置 children
    children: [
      {
        //以‘/’开头的路径将被视为根路径
        path: '/access-control/user',
        component: () => import('@/views/access-control/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          icon: 'User',
        },
      },
      {
        path: '/access-control/role',
        component: () => import('@/views/access-control/role/index.vue'),
        name: 'role',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
        },
      },
      {
        path: '/access-control/menu',
        component: () => import('@/views/access-control/menu/index.vue'),
        name: 'menu',
        meta: {
          title: '菜单管理',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/views/home/index.vue'),
    name: 'product',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'ShoppingCart',
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'trademark',
        meta: {
          title: '品牌管理',
          icon: 'GoodsFilled',
        },
      },
      {
        path: '/product/attributes',
        component: () => import('@/views/product/attributes/index.vue'),
        name: 'attributes',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'spu',
        meta: {
          title: 'SPU',
          icon: 'Menu',
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'sku',
        meta: {
          title: 'SKU',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'any',
    meta: {
      title: '错误路由',
      hidden: true,
    },
  },
];
