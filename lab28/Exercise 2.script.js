function onLoad() {
  //Type appropriate comment here, and begin script below

  if (g_form.isNewRecord()) {
    g_form.addInfoMessage(
      "You can take a book for " +
        g_scratchpad.possession_days +
        " days (by default)."
    );
  }
}
