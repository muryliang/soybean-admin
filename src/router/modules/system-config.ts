const systemConfig: AuthRoute.Route = {
  name: 'system-config',
  path: '/system-config',
  component: 'basic',
  children: [
    {
      name: 'system-config_network',
      path: '/system-config/network',
      component: 'self',
      meta: {
        title: '网络信息',
        requiresAuth: true,
        icon: 'icon-park-outline:database-network-point',
        i18nTitle: 'message.routes.system-config.network'
      }
    }
  ],
  meta: {
    title: '系统配置',
    icon: 'mdi:lan',
    order: 11,
    i18nTitle: 'message.routes.system-config._value'
  }
};

export default systemConfig;
