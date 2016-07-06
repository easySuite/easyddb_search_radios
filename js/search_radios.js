/**
 * @file
 * Frontend functionality for search radios.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.easyddb_search_radios = {
    attach: function () {
      $('#edit-searches').find('a').on('click', function() {
        $(this).parents('.form-item-searches').find('input[name="searches"]').prop("checked", true);

        return false;
      });

      // Redirect to the search page.
      $('#search-block-form').submit(function(event) {
        var search_radio = $('div[id^="search-radios"]').find('input').filter(":checked").val();

        if (search_radio != 'ting') {
          event.preventDefault();

          var query_string = $('input[id^="edit-search-block-form"][type="text"]').val();
          var current_url = window.location.origin;
          window.location.assign(current_url + '/search/' + search_radio + '/' + query_string);
        }
      });
    }
  };
})(jQuery);
