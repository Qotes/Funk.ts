var S = require('systemjs')

S
    .import('dist/test.js')
    .then(function (m) {
        console.log('testing...\n')
        S.import('test/test.test')
            .then(function () {
                console.log('All tests passed.')
            })
    })
