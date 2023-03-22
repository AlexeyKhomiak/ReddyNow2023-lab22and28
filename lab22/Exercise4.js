// Exercise 4: generate 6 feedback for one book from one user
gs.info("\n");
gs.info("Exercise #4: ");
var bookName = 'JavaScript for children';
var subscriber = 'abel.tuter';
var bookGr = new GlideRecord('x_965246_library_c_bookshelf');
bookGr.get('name', bookName);
bookGr.query();

if (bookGr.next()) {
  var feedbackGr = new GlideRecord('x_965246_library_c_feedback');
  for (var i = 0; i < 6; i++) {
    feedbackGr.initialize();
    feedbackGr.book = bookGr.sys_id;
    feedbackGr.subscriber = subscriber;
    feedbackGr.text = 'I really enjoyed this book! Highly recommend reading!';
    feedbackGr.mark = 'Just OK';
    feedbackGr.insert();
  }
}
gs.info("done");