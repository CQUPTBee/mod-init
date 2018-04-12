import Tpl from '../index.hbs';
import Data from '../data/data.json';
import ModuleData from '../../package.json';
import Mod from '../index.js'
import './index.scss';

let moduleName = ModuleData.description;
let originTemplate = Tpl(Data);
let randomNum = parseInt(Math.random()*1000000);
let nowTemplate = `
    <li id="${randomNum}" data-module-name="${moduleName}" class="test">
        ${originTemplate}
    </li>
`
let $dom = $(nowTemplate)
$('#modsWrap').append($dom[0])
let ModObject = new Mod($dom)

ModObject.componentDid()

$('#drag').click(() => {
  ModObject.componentDrag()
})




