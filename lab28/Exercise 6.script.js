function onLoad() {
  //Type appropriate comment here, and begin script below

  if (g_form.isNewRecord()) {
    g_form.setValue("subscriber", g_user.userID);
  }
}
