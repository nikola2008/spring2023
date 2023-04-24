application.get('/echo/:value', (req,res) => {
    res.send(req.params)
})