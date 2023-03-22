function onLoad() {
  //Type appropriate comment here, and begin script below

  var instances = g_form.getValue("instances") * 1;
  if (instances < 3 && instances > 0)
    g_form.addInfoMessage("Instance of the book is less than 3.");
}
