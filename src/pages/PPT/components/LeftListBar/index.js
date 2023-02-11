/*
 * @Author: zheng.jie
 * @Date: 2023-02-11
 * @Des: 演示文稿 左侧列
 */
import React from 'react';
import { connect } from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import styles from 'pages/PPT/index.less';

const LeftListBar = ({ pptPageList, dispatch, activePage: { key } }) => {
  const handlePageClick = value => {
    dispatch({ type: 'pptModel/save', payload: { activePage: value } });
  };

  const handlePlusClick = () => {
    const _key = pptPageList.length;
    dispatch({
      type: 'pptModel/save',
      payload: { pptPageList: [...pptPageList, { key: _key + 1, content: '' }], activePage: { key: _key + 1, content: '' } },
    });
  };
  return (
    <div className={styles.leftContent}>
      {pptPageList.map(item => (
        <li onClick={() => handlePageClick(item)} key={item?.index} className={key === item?.key ? styles.active : ''}>
          <span>{item?.key}</span>
          <div className={styles.pageItem}>{item?.content}</div>
        </li>
      ))}
      <div className={styles.plusBtn} onClick={handlePlusClick}>
        <PlusOutlined className={styles.plusIcon} />
      </div>
    </div>
  );
};

export default connect(({ pptModel }) => ({
  activePage: pptModel.activePage,
  pptPageList: pptModel.pptPageList,
}))(LeftListBar);
