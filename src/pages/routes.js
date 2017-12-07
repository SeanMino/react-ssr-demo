// Hook for server
if (typeof require.ensure !== 'function') {
  require.ensure = function (dependencies, callback) {
    callback(require)
  }
}

const routes = {
  path: '/',
  component: require('./index'),
  indexRoute: {
    getComponent(nextState, callback) {
      require.ensure([], require => {
        callback(null, require('./test/index'))
      }, 'test')
    }
  },
  childRoutes: [
    {
      path: '/article/:pathName',
      getComponent(nextState, callback) {
        require.ensure([], require => {
          callback(null, require('./article/index'))
        }, 'article')
      }
    },
    {
      path: '/test(/:count)',
      getComponent(nextState, callback) {
        require.ensure([], require => {
          callback(null, require('./test/index'))
        }, 'test')
      }
    },
  ]
};

export default routes
