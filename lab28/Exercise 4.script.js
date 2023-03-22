function onChange() {
  //Type appropriate comment here, and begin script below
  var possessionDays = g_scratchpad.possession_days * 1;
  var takenValue = g_form.getValue("taken");
  var takenDate = new Date(takenValue);
  g_form.addInfoMessage(takenValue);
  takenDate.setDate(takenDate.getDate() + possessionDays);
  var futureDate = takenDate.toISOString().substring(0, 10);

  g_form.setValue("return_expected", futureDate);
}
