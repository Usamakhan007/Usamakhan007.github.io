// use `jslint output.js && jshint output.js` for validation

/*jshint strict:true */
/*jshint esversion: 6 */
/*jslint node: true */
// see https://jshint.com/docs/options/#esversion

/*global window */
/*global document */
/*global console */
/*global Promise */
/*global $ */
// SEE https://linterrors.com/js/a-was-used-before-it-was-defined#why-do-i-get-this-error-

// /*jslint es6 */
// // https://stackoverflow.com/a/36265255
// DOES NOT WORK!
"use strict";

function ajaxSuccess(data) {
    $('#output').val(data);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}

$(function () {

    $('#hw').change(function () {
        var file = 'homeworks/' + $('#hw').val();
        $.ajax({
            'url': file,
            'type': 'GET',
            'success': ajaxSuccess,
            'error': ajaxFailure
        });
    });
});

$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');