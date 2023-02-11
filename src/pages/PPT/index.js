/*
 * @Author: zheng.jie
 * @Date: 2023-02-11
 * @Des: 演示文稿
 */
import React from 'react';
import { connect } from 'react-redux';
import { LeftListBar, RightEditBar } from './components';
import styles from './index.less';

const PPT = () => (
  <div className={styles.wrap}>
    <LeftListBar />
    <RightEditBar />
  </div>
);

export default connect()(PPT);
