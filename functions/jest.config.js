// required to surpass the jest error ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string
module.exports = {
    testPathIgnorePatterns: ['lib/', 'node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node'
};