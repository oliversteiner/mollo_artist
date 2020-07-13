(function($, Drupal, drupalSettings) {
  Drupal.behaviors.molloArtist = {
    attach(context, settings) {
      console.log("Mollo Artist");

        $('#mollo-artist', context)
          .once('mollo-artist')
          .each(() => {});

    },
  };
})(jQuery, Drupal, drupalSettings);
