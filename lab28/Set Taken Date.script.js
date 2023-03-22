function onLoad() {
  //Type appropriate comment here, and begin script below
  if (g_form.isNewRecord()) {
    var new_date = new Date();
    var months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    var day = new_date.getDate();
    var monthIndex = new_date.getMonth();
    var year = new_date.getFullYear();

    var formattedDate = year + "-" + months[monthIndex] + "-" + day;

    g_form.setValue("taken", formattedDate);
    g_form.flash("taken", "#ff0000", 0);
    g_form.showFieldMsg(
      "x_965246_library_c_possession.taken",
      "a message",
      "info",
      false
    );
  }
}
