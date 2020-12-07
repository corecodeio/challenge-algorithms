const KUniqueCharacters = require('../solution');


test('KUniqueCharacters("3aabacbebebe")', ()=> {
    expect(KUniqueCharacters("3aabacbebebe")).toBe('cbebebe');
});

test('KUniqueCharacters("2aabbcbbbadef")', ()=> {
    expect(KUniqueCharacters("2aabbcbbbadef")).toBe('bbcbbb');
});