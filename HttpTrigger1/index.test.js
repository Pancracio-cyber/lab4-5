const functions = require('./index');
const context = require('../testing/Context');
const { test } = require('@jest/globals');

test('Http trigger Example', async () => {
    const request = {
        query: { name: 'ErnestoM' }
    };

    var iteration = 1000000;
    console.time('Function #1');
    for(var i = 0; i<iteration; i++){
        await functions(context, request);
    }
    console.timeEnd('Function #1');
    await httpFunctions(context, request);
    expect(context.res.body).toContain('W');
    expect(context.res.body).toEqual('Welcome, ErnestoM');
    //expect(context.log.mock.calls.length).toBe(200);

});