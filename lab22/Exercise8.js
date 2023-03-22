// Exercise 8: show COUNT of Possessions (total and per user),
// max left instances for Book
gs.info("\n");
gs.info("Exercise #8: ");
gs.info("");
var possessionGACount = new GlideAggregate("x_965246_library_c_possession");
possessionGACount.addAggregate("COUNT");
possessionGACount.query();
var possessionsCount = 0;
if (possessionGACount.next()) {
  possessionsCount = possessionGACount.getAggregate("COUNT");
  gs.info("COUNT of possessions: " + possessionsCount);
}
gs.info("");
var possessionGA = new GlideAggregate("x_965246_library_c_possession");
possessionGA.addAggregate("COUNT", "subscriber");
possessionGA.query();
var subscriberCount = 0;
while (possessionGA.next()) {
  var subscriber = possessionGA.subscriber.name;
  subscriberCount = possessionGA.getAggregate("COUNT", "subscriber");
  gs.info(subscriber + ": " + subscriberCount);
}
gs.info("");
var bookGA = new GlideAggregate("x_965246_library_c_bookshelf");
bookGA.addAggregate("COUNT");
bookGA.addAggregate("MAX", "instances");
bookGA.query();
while (bookGA.next()) {
  bookInstances = bookGA.getAggregate("MAX", "instances");
  gs.info(bookGA.getValue("name") + ": " + bookInstances + " " + book);
  //   for (var key in bookGA) {
  //     gs.info(key + " " + bookGA[key]);
  //   }
}
