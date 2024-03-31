const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()  

const methodOverride = require('method-override');
// Other imports and app configuration...

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => { 
  const shortUrls = await ShortUrl.find() 
  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
});

// DELETE route to delete a specific short URL entry
app.delete('/shortUrls/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUrl = await ShortUrl.findByIdAndDelete(id);
      if (!deletedUrl) {
        return res.status(404).json({ error: 'URL not found' });
      }
      res.status(200).json({ message: 'URL deleted successfully' });
    } catch (error) {
      console.error('Error deleting URL:', error);
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
  

app.listen(process.env.PORT || 8001);  