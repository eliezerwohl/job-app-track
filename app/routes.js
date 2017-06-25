module.exports = function(app) {
        app.get('/api/test', function(req, res) {
        	debugger
            res.send("json data will go here"); // load our public/index.html file
        });
};