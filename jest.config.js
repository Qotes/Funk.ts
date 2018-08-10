module.exports = {
    "testEnvironment": "node",
    "roots": [
        "<rootDir>/test"
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "testRegex": "(/tests/.*|(\\.|/)(test|spec))\\.ts$",
    "moduleFileExtensions": [
        "ts",
        "js",
        "node"
    ],
    "moduleNameMapper": {
        "^src/(.*)": "<rootDir>/src/$1"
    },
    "collectCoverageFrom": [
        // "src/*.ts",
        "src/impl/*.ts",
        "!test/util.ts"
    ]
}