// use `jslint ascii.js && jshint ascii.js` for validation
/*jshint strict:true */
/*jshint esversion: 6 */
/*jslint node: true */
// see https://jshint.com/docs/options/#esversion

/*global ANIMATIONS */
/*global document */
/*global window */
/*global setInterval */
/*global clearInterval */
// SEE http://linterrors.com/js/a-was-used-before-it-was-defined#why-do-i-get-this-error-

var Module = (function () {
    "use strict";

    var animatationName = 'Exercise',
        animation = ANIMATIONS[animatationName].split('=====\n'),
        timer = -1,
        speed = 250,
        animate_it = 0;

    function animate() {
        var ta = document.getElementById('ta');
        ta.value = animation[animate_it];
        animate_it = (animate_it + 1) % animation.length;
    }

    function start() {
        var play = document.getElementById('btn-play'),
            btnStop = document.getElementById('btn-stop');
        play.disabled = true;
        btnStop.disabled = false;
        timer = setInterval(animate, speed);
    }

    function stop() {
        var play = document.getElementById('btn-play'),
            btnStop = document.getElementById('btn-stop');
        play.disabled = false;
        btnStop.disabled = true;
        clearInterval(timer);
    }

    function onAnimationChange() {
        var sel = document.getElementById('sel-animation'),
            ta = document.getElementById('ta');
        stop();

        animatationName = sel.value;
        ta.value = ANIMATIONS[animatationName];
        animation = ANIMATIONS[animatationName].split('=====\n');
    }

    function onSizeChange() {
        var sel = document.getElementById('sel-size'),
            ta = document.getElementById('ta');
        ta.style.fontSize = sel.value;
    }

    function onSpeedChange() {
        var chk = document.getElementById('chk-speed');
        speed = chk.checked ? 50 : 250;

        stop();
        start();
    }

    return {
        onAnimationChange: onAnimationChange,
        onSizeChange: onSizeChange,
        onSpeedChange: onSpeedChange,
        start: start, //play
        stop: stop
    };
}());

var onAnimationChange = Module.onAnimationChange;
var onSizeChange = Module.onSizeChange;
var onSpeedChange = Module.onSpeedChange;
var start = Module.start;
var stop = Module.stop;

window.onload = function () {
    "use strict";
    Module.onAnimationChange();
};