function laadOverzicht() {
  $("#articles").removeClass("show");
  $("#articles").load(
    "articledata.html #article1, #article2, #article3",
    function () {
      startAnimatie();
      Popup();
    },
  );
}
function startAnimatie() {
  $("article").each(function (i) {
    $(this)
      .delay(200 * i)
      .animate({ opacity: 1 }, 800);
  });
}

function Popup() {
  $(".popup-link").magnificPopup({
    type: "image",
  });
}

$(document).ready(function () {
  laadOverzicht();
  $(`#articles`).on(`click`, `.read-more`, function () {
    let id = $(this).data("id");
    $("#articles").addClass("show");
    $("#articles").load("articledata.html #" + id, function () {
      $(`#articles article`).css(`opacity`, 0);
      $(`#articles article img`).css(`width`, `45%`);
      startAnimatie();
      Popup();

      $("#articles .read-more").remove();
      $("#articles").append('<button id="back">Terug naar overzicht</button>');
    });
  });

  $(document).on("click", "#back", function () {
    console.log("Terug-knop ingedrukt!");
    laadOverzicht();
  });

  $(`#add-article-form`).on(`submit`, function (e) {
    let titel = $(`#title`).val();
    let inhoud = $(`#content`).val();
    let intro = $(`#intro`).val();
    let formulierOk = true;

    $(`.error-message`).text(``);

    if (titel.length < 5) {
      e.preventDefault();
      $(`#error-title`).text(`De titel moet minimaal 5 tekens lang zijn`);
      formulierOk = false;
      console.log(`titel te kort.`);
    }

    if (intro.length > 150) {
      e.preventDefault();
      $(`#error-intro`).text(
        `Uw bericht is te lang. Het mag maximaal uit 150 tekens bestaan.`,
      );
      formulierOk = false;
    }

    if (inhoud.length < 50 || content.length > 5000) {
      e.preventDefault();
      $(`#error-content`).text(
        `Het bericht moet tussen de 50 en 5000 tekens bevatten.`,
      );
      formulierOk = false;
    }

    if (formulierOk) {
      e.preventDefault();
      alert(`Artikel succesvol toegevoegd!`);
      $(this).trigger("reset");
    }
  });

  $(function () {
    $("#datepicker").datepicker();
  });

  $("article").each(function (i) {
    $(this)
      .delay(200 * i)
      .animate({ opacity: 1 }, 800);
  });
});
