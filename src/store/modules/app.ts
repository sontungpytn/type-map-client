import { AppState, RootState } from '@/store/types';
import { ActionContext, Module } from 'vuex';


const mutations = {
  OPEN_SIDEBAR: (state: AppState) => {
    state.sidebar = true;
  },

  CLOSE_SIDEBAR: (state: AppState) => {
    state.sidebar = false;
  },
  TOGGLE_SIDEBAR: (state: AppState) => {
    state.sidebar = !state.sidebar;
  },
  SET_IS_MOBILE: (state: AppState, isMobile: boolean) => {
    state.isMobile = isMobile;
  },
};

const actions = {
  toggleSidebar({ commit }: ActionContext<AppState, RootState>) {
    commit('TOGGLE_SIDEBAR');
  },
};


const appModule: Module<AppState, RootState> = {
  state: {
    isMobile: false,
    sidebar: true,
  },
  mutations,
  actions,
};

export default appModule;
