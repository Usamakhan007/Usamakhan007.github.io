// use `jslint script.js && jshint script.js` for validation

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

(function ($, window) {

    "use strict";

    var httpInterceptor = {
            mRequestCount: 0,
            onRequest: function () {
                this.mRequestCount += 1;
                $('#loader').show();
            },
            onResponse: function () {
                httpInterceptor.mRequestCount -= 1;
                if (httpInterceptor.mRequestCount <= 0) {
                    $('#loader').hide();
                }
            }
        },
        Service = {
            getPosts: function (userId) {
                return new Promise(function (resolve, reject) {
                    httpInterceptor.onRequest();
                    $.ajax({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/posts',
                        // Tell jQuery we're expecting JSONP
                        dataType: "jsonp",
                        data: {
                            userId: userId
                        },
                        success: resolve,
                        error: reject,
                        complete: httpInterceptor.onResponse
                    });
                });
            },
            getComments: function (postId) {
                return new Promise(function (resolve, reject) {
                    httpInterceptor.onRequest();
                    $.ajax({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/comments',
                        // Tell jQuery we're expecting JSONP
                        dataType: "jsonp",
                        data: {
                            postId: postId
                        },
                        success: resolve,
                        error: reject,
                        complete: httpInterceptor.onResponse
                    });
                });
            },
            getUser: function (userId) {
                return new Promise(function (resolve, reject) {
                    httpInterceptor.onRequest();
                    $.ajax({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/users/' + userId,
                        // Tell jQuery we're expecting JSONP
                        dataType: "jsonp",
                        success: resolve,
                        error: reject,
                        complete: httpInterceptor.onResponse
                    });
                });
            }
        };

    function toCommentElm(comment) {

        var html = $('#template-comment').html(),
            el = $('<div>').html(html),
            body = comment.body,
            name = comment.name,
            email = comment.email;

        el.addClass('comment');
        el.find('.body').text(body);
        el.find('.name').text(name);
        el.find('.email').text(email);

        return el;
    }

    function renderPost(post) {

        var html = $('#template-post').html(),
            el = $('<div>').html(html),
            title = post.title,
            body = post.body,
            postId = post.id,
            userId = post.userId;

        el.addClass('post');
        el.find('.title').text(title);
        el.find('.body').text(body);

        Service.getUser(userId).then(function (user) {
            el.find('.author .name').text(user.name);
            el.find('.author .email').text(user.email);
        });

        el.find('.show-comments').click(function () {
            console.log('show comments', this, postId);
            var container = $(this).parent('.comments-container');
            container.html('');
            Service.getComments(postId).then(function (comments) {
                comments.map(toCommentElm).forEach(function (elm) {
                    el.find('.comments-container').append(elm);
                });
            });
        });

        $('#posts-container').append(el);
    }

    function onSubmit(e) {
        e.preventDefault(); //to abort a form submit

        var userId = parseInt($('#userid').val(), 10);
        $('#posts-container').html('');

        Service.getPosts(userId).then(function (posts) {
            posts.forEach(renderPost);
        });

        return false;
    }

    function init() {
        $('#submit').click(onSubmit);
    }
    window.onload = init;

}($, window));
