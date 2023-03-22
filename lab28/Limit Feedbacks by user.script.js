function onLoad() {
  //Type appropriate comment here, and begin script below
  var ajax = new GlideAjax("LBMClient");
  ajax.addParam("sysparm_name", "getAmountOfFeedbacksByUser");
  ajax.addParam("sysparm_user_name", g_user.userID);
  ajax.getXML(ajaxCallback);

  function ajaxCallback(response) {
    var answer =
      response.responseXML.documentElement.getAttribute("answer") * 1;
    console.log(answer);
    if (answer >= 5) {
      g_form.addErrorMessage(
        "!!! You are not alowed to create more than 5 feedbacks"
      );
    }
  }
}
