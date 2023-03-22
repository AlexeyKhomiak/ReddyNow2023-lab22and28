// Exercise 3: show Posessions that must be returned this week
gs.info("\n");
gs.info("Exercise #3: ");
var possessionGr = new GlideRecord('x_965246_library_c_possession');
possessionGr.addEncodedQuery('return_expected<=javascript:gs.endOfThisWeek()^return_expected>=javascript:gs.beginningOfToday()');
possessionGr.query();

while (possessionGr.next()) {
  var book = possessionGr.book.getDisplayValue();
  var returnDate = possessionGr.return_expected.getDisplayValue();
  gs.info("Book: " + book + " - Return expected: " + returnDate);
}