$(document).ready(function() {

  $('#form-submit').click(function(e) {

    $("#contactForm").validate({
        ignore: ':hidden:not(.captcha-control)',
        rules: {
            'entry.122701191': {
                required: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            'entry.560386344': {
                required: true
            },
            reCaptchaControl: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }  
        },
        messages: {
            'entry.122701191': {
                required: "Proszę wpisać Imię"
            },
            emailAddress: {
                required: "Proszę wpisać Email",
                email: "Musisz wpisać email w formacie nazwa@domena"
            },
            'entry.560386344': {
                required: "Proszę napisać wiadomość"
            },
            reCaptchaControl: {
                required: "Proszę zaznaczyć Nie jestem robotem"
            }
        },
        submitHandler: function(form) {
                form.submit();
        }
    });
    
            });

});

$(document).ready(function() {

    $('#form-submit-project').click(function(e) {
  
      $("#submitForm").validate({
        ignore: ':hidden:not(.captcha-control)',
          rules: {
              'entry.1730560742': {
                  required: true
              },
              emailAddress: {
                  required: true,
                  email: true
              },
              'entry.174369693': {
                  required: true
              },
              'entry.209624869': {
                required: true
            },
              reCaptchaControl: {
                  required: function () {
                      if (grecaptcha.getResponse() == '') {
                          return true;
                      } else {
                          return false;
                      }
                  }
              }  
          },
          messages: {
              'entry.1730560742': {
                  required: "Proszę wpisać Imię i Nazwisko"
              },
              emailAddress: {
                  required: "Proszę wpisać Email",
                  email: "Musisz wpisać email w formacie nazwa@domena"
              },
              'entry.174369693': {
                required: "Proszę wpisać nazwę instytucji"
            },
            'entry.209624869': {
                  required: "Proszę wpisać miejscowość"
              },
              reCaptchaControl: {
                  required: "Proszę zaznaczyć Nie jestem robotem"
              }
          },
          submitHandler: function(form) {
                  form.submit();
          }
      });
      
              });
  
  });