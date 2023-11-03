$(document).ready(function () {
  var uniOptions = "";
  var depOptions = "";
  var levelOptions = "";

  $.getJSON("/js/university.json", function (data) {
    $.each(data, function (key, uni) {
      uniOptions += `<label value=${uni.id}> <input type="radio" name="radio" /><span>${uni.university} unuversity </span></label>`;
    });
    $("#universities").html(uniOptions);
    // Fetch all the details element.
    const subDetails = document.querySelectorAll("#universities label span");

    // Add the onclick listeners.
    subDetails.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        subDetails.forEach((subDetail) => {
          if (subDetail == targetDetail) {
            let pare = subDetail.parentElement.parentElement.parentElement;
            var a = $(pare).find("h2").text($(subDetail).text());
          }
        });
      });
    });
  });

  $(document).on("change", "#universities", function () {
    let university_id;
    var header;

    header = $("#universities").parents("fieldset").find("h2").text().trim();

    $("#universities")
      .find("label")
      .each(function (index) {
        var a = $(this).text().trim();

        if (header == a) {
          university_id = $(this).attr("value");
        }
      });

    if (university_id != "") {
      $.getJSON("/js/department.json", function (data) {
        $.each(data, function (key, dep) {
          if (university_id == dep.uinversity_id) {
            depOptions += `<label value=${dep.id}> <input type="radio" name="radio" /> <span>${dep.department} </span> </label>`;
          }
        });

        $("#department").html(depOptions);
        depOptions = " ";

        const subDetails = document.querySelectorAll("#department label span");

        // Add the onclick listeners.
        subDetails.forEach((targetDetail) => {
          targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            subDetails.forEach((subDetail) => {
              if (subDetail == targetDetail) {
                let pare = subDetail.parentElement.parentElement.parentElement;
                var a = $(pare).find("h2").text($(subDetail).text());
              }
            });
          });
        });
      });
    }
    $("#department").parents("fieldset").find("h2").text("set department");
    $("#level").parents("fieldset").find("h2").text("set level");
    $("#level").html(" ");
  });

  $(document).on("change", "#department", function () {
    let level_id;
    var h2;

    h2 = $("#department").parents("fieldset").find("h2").text().trim();

    $("#department")
      .find("label")
      .each(function (index) {
        var a = $(this).text().trim();

        if (h2 == a) {
          level_id = $(this).attr("value");

          console.log(level_id);
        }
      });

    if (level_id != "") {
      $.getJSON("/js/level.json", function (data) {
        $.each(data, function (key, lev) {
          // console.log(level_id,lev.department_id);
          if (level_id == lev.department_id) {
            for (var i = 0; i < lev.level.length; i++)
              levelOptions += `<label> <input type="radio" name="radio" /> <span>${lev.level[i]} </span> </label>`;
          }
        });

        $("#level").html(levelOptions);
        levelOptions = " ";
        const subDetails = document.querySelectorAll("#level label span");

        // Add the onclick listeners.
        subDetails.forEach((targetDetail) => {
          targetDetail.addEventListener("click", () => {
            // Close all the details that are not targetDetail.
            subDetails.forEach((subDetail) => {
              if (subDetail == targetDetail) {
                let pare = subDetail.parentElement.parentElement.parentElement;
                var a = $(pare).find("h2").text($(subDetail).text());
              }
            });
          });
        });
      });
    }
    $("#level").parents("fieldset").find("h2").text("set level");
  });
});

// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      detail.removeAttribute("open");
    });
  });
});


$(document).ready(function(){
  $("#serach_main").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".sec").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});