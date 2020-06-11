// use `jslint fifteen.js && jshint fifteen.js` for validation

/*jshint strict:true */
/*jshint esversion: 6 */
/*jslint node: true */
// see https://jshint.com/docs/options/#esversion

/*global window */
/*global document */
/*global console */
/*global $ */
// SEE http://linterrors.com/js/a-was-used-before-it-was-defined#why-do-i-get-this-error-

// /*jslint es6 */
// // https://stackoverflow.com/a/36265255
// DOES NOT WORK!
(function (window, document, $) {
    "use strict";

    var getXY = function (prop) {
        var x = prop.x,
            y = prop.y;
        return {x: x / 100, y: y / 100};
    },
        getEmptyCell = function () {
            var i, j,
                xy,
                puzzleArea = document.getElementById('puzzlearea'),
                divs = puzzleArea.getElementsByTagName("div"),
                emptyX = -1,
                emptyY = -1,
                vis = new Array(4).fill(false).map(function () {
                    return [false, false, false, false];
                });

            for (i = 0; i < divs.length; i += 1) {
                xy = getXY(divs[i]);
                vis[xy.x][xy.y] = true;
            }

            for (i = 0; i < 4; i += 1) {
                for (j = 0; j < 4; j += 1) {
                    // console.log(i,j, vis[i][j]);
                    if (!vis[i][j]) {
                        emptyX = i;
                        emptyY = j;
                    }
                }
            }
            return {
                x: emptyX,
                y: emptyY
            };
        },
        getNeighbors = function () {
            var i, x, y,
                emptyCell = getEmptyCell(),
                dx = [0, 1, 0, -1],
                dy = [1, 0, -1, 0],
                neighbors = [];

            for (i = 0; i < 4; i += 1) {
                x = emptyCell.x + dx[i];
                y = emptyCell.y + dy[i];
                if (0 <= x && x < 4 &&
                        0 <= y && y < 4) {
                    neighbors.push({x : x, y : y});
                }
            }

            return neighbors;
        },
        onPieceClick = function (e) {
            console.log('onPieceClick', e.target);
            var i, x, y, n,
                div = e.target,
                xy = getXY(div),
                emptyCell = getEmptyCell(),
                neighbors = getNeighbors();

            console.log(emptyCell.x, emptyCell.y);

            for (i = 0; i < neighbors.length; i += 1) {
                n = neighbors[i];
                if (n.x === xy.x && n.y === xy.y) {
                    x = emptyCell.x * 100;
                    y = emptyCell.y * 100;
                    div.x = x;
                    div.y = y;
                    div.style.left = x + 'px';
                    div.style.top = y + 'px';
                }
            }
        },
        shuffle = function () {
            var i,
                r = Math.random() * 100,
                x,
                y,
                n,
                emptyCell = getEmptyCell(),
                neighbors = getNeighbors(),
                shuffleOnce = function () {
                    emptyCell = getEmptyCell();
                    neighbors = getNeighbors();

                    console.log(emptyCell.x, emptyCell.y);

                    var randomNumber = Math.floor(Math.random() * neighbors.length);
                    n = neighbors[randomNumber % neighbors.length];
                    x = emptyCell.x * 100;
                    y = emptyCell.y * 100;

                    $('#puzzlearea .puzzlepiece').each(function (ii, div) {
                        console.log('i', ii);
                        if (div.x === n.x * 100 && div.y === n.y * 100) {
                            div.x = x;
                            div.y = y;
                            div.style.left = x + 'px';
                            div.style.top = y + 'px';
                        }
                    });
                };

            for (i = 0; i < r; i += 1) {
                shuffleOnce();
            }
        },
        onPieceHover = function (e) {
            console.log('onPieceHover', e.target);
            var i, n,
                div = e.target,
                xy = getXY(div),
                emptyCell = getEmptyCell(),
                neighbors = getNeighbors();

            $('#puzzlearea .puzzlepiece').each(function (ii, iDiv) {
                console.log(ii, iDiv);
                iDiv = $(iDiv);
                iDiv.css('color', 'black');
                iDiv.css('border-color', 'black');
            });

            console.log(emptyCell.x, emptyCell.y);

            for (i = 0; i < neighbors.length; i += 1) {
                n = neighbors[i];
                if (n.x === xy.x && n.y === xy.y) {
                    $(div).css('color', 'red');
                    $(div).css('border-color', 'red');
                }
            }
        },
        init = function () {
            var i,
                div,
                x,
                y,
                puzzleArea = document.getElementById('puzzlearea'),
                divs = puzzleArea.getElementsByTagName("div");

            // initialize each piece
            for (i = 0; i < divs.length; i += 1) {
                div = divs[i];

                // calculate x and y for this piece
                x = ((i % 4) * 100);
                y = (Math.floor(i / 4) * 100);

                // set basic style and background
                div.className = "puzzlepiece";
                div.style.left = x + 'px';
                div.style.top = y + 'px';
                div.style.backgroundImage = 'url("background.jpg")';
                div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

                // store x and y for later
                div.x = x;
                div.y = y;
            }

            // window.document.getElementById('shufflebutton').onclick = onPieceClick;
            $('.puzzlepiece').click(onPieceClick);
            $('.puzzlepiece').hover(onPieceHover);
            $('#shufflebutton').click(shuffle);
        };

    window.onload = init;
}(window, document, $));