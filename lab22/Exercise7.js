// Exercise 7: show a list of feedbacks grouped by Subscriber
gs.info("\n");
gs.info("Exercise #7: ");

var feedbackGr = new GlideAggregate("x_965246_library_c_feedback");
feedbackGr.groupBy("subscriber");
feedbackGr.query();
while (feedbackGr.next()) {
  var subscriber = feedbackGr.subscriber;
  gs.info("\n\nSubscriber: " + subscriber.name + "\n");

  var feedbackRecord = new GlideRecord("x_965246_library_c_feedback");
  feedbackRecord.addQuery("subscriber", subscriber);
  feedbackRecord.query();

  while (feedbackRecord.next()) {
    var feedbackText = feedbackRecord.getValue("text");
    var feedbackDate = feedbackRecord.getValue("date");
    gs.info("Feedback: " + feedbackText + ", Date: " + feedbackDate);
  }
}
