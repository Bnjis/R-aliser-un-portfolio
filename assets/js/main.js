$(document).ready(function() {
  let $body = $("body");

  $body.on("click", ".menu-btn", function(event) {
    event.preventDefault();
    $body.toggleClass("is-opened");
  });

  const myEffect = {
    animeOptions: {
      duration: 800,
      easing: [0.2, 1, 0.3, 1],
      delay: function(t, i) {
        return i * 150 + 800;
      },
      opacity: {
        value: [0, 1],
        easing: "linear"
      },
      scale: [0.5, 1]
    }
  };

  function renderAnimation(effect) {
    let grid = document.querySelector(".grid");
    let gridItems = grid.querySelectorAll(".gridItem > .gridImg");

    let effectSettings = effect,
      animeOptions = effectSettings.animeOptions;

    grid.classList.add("gridLoading");
    $body.imagesLoaded(function() {
      loadingTimeout = setTimeout(function() {
        grid.classList.add("willDelete-gridLoading");

        animeOptions.targets = gridItems;
        anime(animeOptions);

        setTimeout(function() {
          grid.classList.remove("gridLoading");
          grid.classList.remove("willDelete-gridLoading");
        }, 200);
      }, 200);
    });
  }

  renderAnimation(myEffect);
});
