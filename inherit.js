/**
 * Created by Witcher on 06.08.2016.
 */
function Inherit(child, parent) {
    function F() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = parent;
}