exports.seed = (knex) => {
  return knex('snacks').truncate()
    .then(() => {
      return knex('snacks').insert([
        {
          name: 'Poisen Snacks',
          image_url: 'https://i5.walmartimages.com/dfw/4ff9c6c9-affc/k2-_93c14d95-aadf-4ba9-9d95-7aaba1d38835.v1.jpg',
          review_description: "Amber said that these are wack, yo",
          my_rating: "1"
        },
        {
          name: 'Crunchy Crickets',
          image_url: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d18d/k2-_f44b820e-f46e-4eea-a087-f4098d6e8144.v1.jpg',
          review_description: "Really good stuff",
          my_rating: "5"
        },
        {
          name: 'Puffin Crackers',
          image_url: 'http://pixel.nymag.com/imgs/daily/grub/2016/08/25/healthy-snacks/healthy-snacks-4.w710.h473.2x.jpg',
          review_description: "Really good stuff",
          my_rating: "5",
        }
      ])
    })
}
