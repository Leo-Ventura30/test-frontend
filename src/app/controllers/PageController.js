class PageController {
  index(req, res) {
    //this variable is related to pagination and options
    const limitOfItems = 3;
    var quantityOfItems = req.query.quantity || limitOfItems;
    var optionsOfItems = req.query.option || "A";
    var totalPages = Math.ceil(quantityOfItems / limitOfItems);
    var actualPageNumber = req.query.page || 1;
    res.render("pages/home", {
      actualPageNumber,
      quantityOfItems,
      totalPages,
      optionsOfItems,
      limitOfItems,
    });
  }
}

module.exports = new PageController();
