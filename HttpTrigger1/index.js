module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    context.log('JavaScript HTTP trigger funtion 2.');
    // const responseMessage = name
    //     ? "Hello, " + name
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    if (name)
    {
        context.res = {
            status = 200,
            body: "Welcome, " + name
        };
    }
    else {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "pass a name in the query string ot in the request body."
        };
    }
}