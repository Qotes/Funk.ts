/**
 * @deprecated only for specific native test jobs
 */
var S = require('systemjs')

S
    .import('dist/test.js')
    .then(function (m) {
        console.log('testing...\n')
        S.import('test/zelta')
            .then(function () {
                console.log('All tests passed.')
            })
    })
