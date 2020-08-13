$(document).ready(function () {
  $("#contact").validate({
    debug: true,
    errorClass: "alert alert-danger",
    errorLabelContainer: "#output-area",
    errorElement: "div",

    rules: {
      contactName: {
        required: true
      },
      contactEmail: {
        email: true,
        required: true
      },
      contactMessage : {
        required: true,
        maxlength: 2000
      }
    },
    messages: {
      contactName: {
        required: "Name is a required field"
      },
      contactEmail: {
        required: "Email is a required field",
        email: "Please provide a valid email address"
      },
      contactMessage: {
        required: "Message is a required field",
        maxlength: "Message is limited to 2000 characters"
      },
    },
    submitHandler: function (form) {
      $("#contact").ajaxSubmit({
        type: "POST",
        url: $('#contact').attr('action'),
        success: function  (ajaxOutput) {
          $("#output-area").css("display", "")
          $("#output-area").html(ajaxOutput)

          if($(".alert-success").length >= 1) {
            $("#contact")[0].reset()
          }
        }
      })
    }
  })
})