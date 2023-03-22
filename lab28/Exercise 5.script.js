function onSubmit() {
  //Type appropriate comment here, and begin script below
  var instances = g_form.getValue("instances") * 1;
  if (instances < 0 || instances == null || instances == "") {
    g_form.addErrorMessage(
      "The Error MessageInstances field must be filled and greater than 0!"
    );
    return false;
  }
}
