//  календарные импуты
$(function () {
  $("#datepicker-from,#datepicker-to").datepicker({
    buttonImageOnly: true,
  });
});

//Сменим язык календаря на русский
$.datepicker.setDefaults({
  closeText: "Закрыть",
  prevText: "",
  currentText: "Сегодня",
  monthNames: [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ],

  dateFormat: "dd MM",
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
});

//  цифровые инпуты
$(function () {
  $("#rooms, #adults, #children").spinner({
    classes: {
      "ui-spinner": "my-spinner",
      "ui-spinner-input": "my-input",
      "ui-spinner-down": "my-btn my-btn-down",
      "ui-spinner-up": "my-btn my-btn-up"

      
    },
    spin: function (event, ui) {
      if (ui.value > 10) {
        $(this).spinner("value", 0);
        return false;
      } else if (ui.value < 0) {
        $(this).spinner("value", 10);
        return false;
      }
    },
  });
});
