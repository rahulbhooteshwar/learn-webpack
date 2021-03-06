import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now included via import
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}



document.addEventListener("DOMContentLoaded", function (event) {
    // Your code to run since DOM is loaded and ready
    document.body.appendChild(component());
});