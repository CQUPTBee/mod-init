import Tpl from '../index.hbs';
import Data from '../data/data.json';
import './index.scss';

document.getElementById('modsWrap').innerHTML = Tpl(Data);