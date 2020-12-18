const WordSplit = require('../solution');


test('WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])', ()=> {
    expect(WordSplit(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])).toBe('base,ball');
});

test('WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])', ()=> {
    expect(WordSplit(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])).toBe('abcg,efd');
});