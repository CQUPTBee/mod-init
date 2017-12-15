import Tpl from '../index.hbs';
import Data from '../data/data.json';
import ModuleData from '../../package.json';
import './index.scss';

let moduleName = ModuleData.description;
let originTemplate = Tpl(Data);
let randomNum = parseInt(Math.random()*1000000);
let nowTemplate = `
    <li id="${randomNum}" data-module-name="${moduleName}" class="test">
        ${originTemplate}
    </li>
`
document.getElementById('modsWrap').innerHTML = nowTemplate;