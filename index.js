
// sort
app.get('/services',logger, async(req,res)=>{
    const filter = req.query
    const query = {
        // price: {$lt: 100}
        // price: {$gt: 100}
        // price:{$gte:150}
        // price:{$lte:150}
        // price:{$ne:150}
        // price:{$lt:150,$gt:50}
    };
    const options = {
        sort:{
            price: filter.sort === 'asc' ? 1 : -1
            // range filter 100 - 300
        }
    };
    const cursor = bookCollection.find(query)
    const result = await cursor.toArray(options)
    res.send(result)
})

// indexing and search

app.get('/services',logger, async(req,res)=>{
    const filter = req.query
    const query = {
        title:{$regex: filter.search, $options: 'i'}
    };
    const options = {
        sort:{
            price: filter.sort === 'asc' ? 1 : -1
            // range filter 100 - 300
        }
    };
    const cursor = bookCollection.find(query)
    const result = await cursor.toArray(options)
    res.send(result)
})

app.put('/book/decrement/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updateBook = req.body;

        // const quantityBook = parseInt(quantityBook);
        const update = {
            $inc: {
                quantityBook: -1,
            }
        };

        // Convert quantityBook field to a numeric type using parseInt
        update.$inc.quantityBook = parseInt(update.$inc.quantityBook);

        // console.log(updateBook);
        const result = await bookCollection.updateOne(filter, update);
        res.send(result);
    } catch (error) {
        console.error('Error incrementing quantityBook:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});


// ------------ update increment ------------
// Increment the quantityBook field by 1
app.put('/book/increment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const updateBook = req.body;

        // const quantityBook = parseInt(quantityBook);
        const update = {
            $inc: {
                quantityBook: 1,
            }
        };

        // Convert quantityBook field to a numeric type using parseInt
        // update.$inc.quantityBook = parseInt(update.$inc.quantityBook);

        console.log(updateBook);
        const result = await bookCollection.updateOne(filter, update);
        res.send(result);
    } catch (error) {
        console.error('Error incrementing quantityBook:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});
