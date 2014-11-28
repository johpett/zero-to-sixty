window.onload = function() {
    console.log("Step 1.");
    var foo = 'breaking a jshint rule';

    console.log("Step 2.");
    var bar = foo + "by mixing qoute types";

    console.log("Step 3.");
    console.error(bar);
};