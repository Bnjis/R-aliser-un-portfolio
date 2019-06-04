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

    if (grid != null) {
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

      window.links = grid.querySelectorAll("a");

      window.photos = [];
      let $link;
      for (let i = 0; i < window.links.length; i++) {
        $link = window.links[i];

        if ($link.nodeType !== 1) {
          continue;
        }

        window.photos.push({
          msrc: $link.children[0].getAttribute("src"),
          src: $link.getAttribute("href"),
          w: parseInt($link.getAttribute("data-w")),
          h: parseInt($link.getAttribute("data-h"))
        });
      }

      window.links.forEach((item, index) => {
        item.addEventListener("click", function(event) {
          event.preventDefault();
          let downloadButtonLabel = "Télécharger";

          window.gallery = new PhotoSwipe(
            document.querySelector(".pswp"),
            PhotoSwipeUI_Default,
            window.photos,
            {
              shareEl: true,
              fullscreenEl: false,
              focus: false,
              historyEnabled: false,
              shareButtons: [
                {
                  id: "download",
                  label: downloadButtonLabel,
                  url: "{{raw_image_url}}",
                  download: true
                }
              ],
              index: index,
              getThumbBoundsFn: function(index) {
                let thumbnail = window.links[index],
                  pageYScroll =
                    window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect();
                return {
                  x: rect.left,
                  y: rect.top + pageYScroll,
                  w: rect.width
                };
              }
            }
          );

          window.gallery.init();
        });
      });
    }
  }
  renderAnimation(myEffect);
});
