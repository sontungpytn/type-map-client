import { RootState } from '@/store/types';

export default {
  sidebar: (state: RootState) => state.app.sidebar,
  isMobile: (state: RootState) => state.app.isMobile,
};
