/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('viewhome', {
    title: 'Home'
  });
};
