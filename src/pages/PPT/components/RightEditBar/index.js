/*
 * @Author: zheng.jie
 * @Date: 2023-02-11
 * @Des: 演示文稿 右侧编辑页
 */
import React from 'react';
import { connect } from 'react-redux';
import ContentEditable from 'react-contenteditable';
import { get, cloneDeep, debounce } from 'lodash';
import styles from 'pages/PPT/index.less';

const RightEditBar = ({ activePage, pptPageList, dispatch }) => {
  const handleContentChange = e => {
    const copyPageList = cloneDeep(pptPageList);
    copyPageList.forEach(item => {
      if (item.key === activePage.key) {
        item.content = get(e, 'target.value');
      }
    });
    dispatch({ type: 'pptModel/save', payload: { pptPageList: copyPageList, activePage: copyPageList.find(item => item.key === activePage.key) } });
  };
  return (
    <div className={styles.rightContent}>
      <ContentEditable html={activePage?.content} disabled={false} onChange={debounce(handleContentChange, 1000)} tagName="article" />
    </div>
  );
};

export default connect(({ pptModel }) => ({
  activePage: pptModel.activePage,
  pptPageList: pptModel.pptPageList,
}))(RightEditBar);
