// Exercise 5: generate 10 feedbacks for all the books from all
// Subscribers (without activating Business Rules)

//Task 5
gs.info("Exercise #5: ");
function generateRandomFeedback() {
  const feedbackOptions = [
    "Great book, highly recommended!",
    "Interesting book, but not an easy read",
    "Did not like the book, would not recommend",
    "Terrible book, boring and uninteresting",
  ];
  const markOptions = ["Awesome", "Good", "Just OK", "Ugly"];
  var randNum = Math.floor(Math.random() * feedbackOptions.length);
  var feedback = feedbackOptions[randNum];
  var mark = markOptions[randNum];
  return { feedback: feedback, mark: mark };
}

var bookShelf = new GlideRecord("x_965246_library_c_bookshelf");
bookShelf.query();

var groupMember = new GlideRecord("sys_user_grmember");
groupMember.addQuery("group.name", "Subscribers");
groupMember.addQuery("user.active", true);
groupMember.query();

var subscribers = [];
while (groupMember.next()) {
  subscribers.push(groupMember.user.sys_id);
}

while (bookShelf.next()) {
  for (var j = 0; j < subscribers.length; j++) {
    for (var i = 0; i < 10; i++) {
      var feedback = generateRandomFeedback();
      var feedbackGr = new GlideRecord("x_965246_library_c_feedback");
      feedbackGr.newRecord();
      feedbackGr.setValue("text", feedback.feedback);
      feedbackGr.setValue("mark", feedback.mark);
      feedbackGr.setValue("book", bookShelf.getUniqueValue());
      feedbackGr.setValue("subscriber", subscribers[j]);
      feedbackGr.insert();
    }
  }
}
