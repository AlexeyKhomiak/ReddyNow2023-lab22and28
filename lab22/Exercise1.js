// Exercise 1: show all records from Bookshelf table in the
// following format:
// "Name" by Author, <instances>

var bookGr = new GlideRecord("x_965246_library_c_bookshelf");
bookGr.query();
var results = [];
while (bookGr.next()) {
  var str = "'" + bookGr.getValue("name") + "' by " + bookGr.getValue("author"); //+", <"+ bookGr.getValue('instances') + ">";
  results.push(str);
  gs.info(str);
}
