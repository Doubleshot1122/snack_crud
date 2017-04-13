var express = require('express');
var router = express.Router();
var db = require('../db/connections.js')

/* GET snack listing. */
router.get('/', (req, res, next) => {
  db('snacks').select('*').then(snacks => {
  res.render('snacks/index', { snacks })
  })
});

router.get('/new', (req, res, next) => {
  res.render('snacks/new')
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id
  db('snacks').where({ id }).first()
  .then(snack => {
    res.render('snacks/show', { snack })
  })
})

router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id
  db('snacks').where({ id }).first()
  .then(snack => {
    res.render('snacks/edit', { snack })
  })
})

router.post('/', (req, res, next) => {
  var snack = {
    name: req.body.name,
    image_url: req.body.image_url,
    review_description: req.body.review,
    my_rating: req.body.myrating
  }

  db('snacks').insert(snack, '*').then((newSnack) => {
    var id = newSnack[0].id;
    res.redirect(`/snacks/${id}`)
  })
})

router.put('/:id', (req, res, next) => {
  var id = req.params.id
  var snack = {
    name: req.body.name,
    image_url: req.body.image_url,
    review_description: req.body.review,
    my_rating: req.body.myrating
  }
  db('snacks').update(snack, '*').where({ id })
  .then(updatedSnack => {
    var id = updatedSnack[0].id
    res.redirect(`/snacks/${id}`)
  })
})


router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  db('snacks').del().where({ id }).then(() => {
    res.redirect('/snacks')
  })
})

module.exports = router;
