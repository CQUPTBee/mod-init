import './index.less';
import Main from './main.js';
import Img from './img/test.png';

export default class Index {
  constructor ($box) {
    // $box.html('123');
  }
  componentDid ($box) {
    new Main()
  }
  componentWillUnmount() {
    console.log('销毁')
  }
}