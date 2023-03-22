// Exercise 9: show list of Books where number of Feedbacks
// equal or greater than System Property (created in Task #3)
gs.info("\n");
gs.info("Exercise #9: ");
gs.info("");
var feedbackGA = new GlideAggregate("x_965246_library_c_feedback");
feedbackGA.addAggregate("COUNT", "book");
feedbackGA.query();
var subscriberCount = 0;
while (feedbackGA.next()) {
  var bookName = feedbackGA.book.name;
  var feedbackCount = feedbackGA.getAggregate("COUNT", "book") * 1;
  var numberAllowedFeedbacks =
    gs.getProperty("x_965246_library_c.number_allowed_feedbacks") * 1;
  if (feedbackCount >= numberAllowedFeedbacks) {
    gs.info(bookName + ": " + feedbackCount);
  }
}
