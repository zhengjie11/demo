export default {
  namespace: 'pptModel',
  state: {
    pptPageList: [
      { key: 1, content: '第一页' },
      { key: 2, content: '第二页' },
    ],
    activePage: {}, // 选中的页
  },

  effects: {},

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
