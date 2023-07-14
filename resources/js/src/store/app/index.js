import { $themeBreakpoints } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    windowWidth       : 0,
    userData          : JSON.parse(localStorage.getItem('userData')),
    shallShowOverlay  : false,
    userValidation  : false,
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    UPDATE_USERDATA(state, val) {
      state.userData = val
    },
    UPDATE_USERVALIDATION(state, val) {
      state.userValidation = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
  },
  actions: {},
}
