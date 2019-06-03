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

    if (grid != null) {
      window.links = grid.querySelectorAll("a");

      window.photos = [];
      let $link;

      window.links.forEach(function(item, i) {
        $link = item;

        window.photos.push({
          msrc: $link.querySelector("img").getAttribute("src"),
          src: $link.getAttribute("href"),
          w: parseInt($link.getAttribute("data-w")),
          h: parseInt($link.getAttribute("data-h"))
        });

        this.addEventListener("click", function(event) {
          event.preventDefault();
          let downloadButtonLabel = "Télécharger";

          // console.log(
          //   [].find.call(
          //     window.links,
          //     link => link.href === event.target.parentNode.href
          //   )
          // );

          let getIndex;
          window.links.forEach((link, index) => {
            if (link.href.indexOf(event.target.parentNode.href) !== -1) {
              getIndex = index;
            }
          });

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
              index: getIndex,
              getThumbBoundsFn: function(index) {
                let $link = window.links.item(index);
                let $image = $link.querySelector("img");
                let offset = $image.getBoundingClientRect();
                return {
                  x: offset.left + document.body.scrollLeft,
                  y: offset.top + document.body.scrollTop,
                  w: $image.offsetWidth
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
