import Tpl from '../index.hbs';
import Data from '../data/data.json';

document.getElementById('modsWrap').innerHTML = Tpl(Data);