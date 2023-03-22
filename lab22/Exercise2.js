// Exercise 2: show information from Possessions as:
// "User.first_name" "User.last_name" reads these books:
// Book.name between Book.taken and Book.return_expected
gs.info(" ");
gs.info("Exercise #2: ");
var possessionGr = new GlideRecord("x_965246_library_c_possession");
possessionGr.query();

while (possessionGr.next()) {
  var strUserInfo =
    '"' +
    possessionGr.subscriber.first_name +
    '" "' +
    possessionGr.subscriber.last_name +
    '" reads these books:';

  gs.info(strUserInfo);

  var strBookInfo =
    "     - " +
    possessionGr.book.name +
    " between " +
    possessionGr.taken +
    " and " +
    possessionGr.return_expected;

  gs.info(strBookInfo);
}
