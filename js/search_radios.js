/**
 * @file
 *  Frontend functionality for search radios.
 */

(function ($) {
  $(document).ready(function() {
    var path = window.location.pathname;
    var arg = path.split('/')[2];
    // Unset advanced form.
    if (arg === 'search') {
      $('#search-block-form #edit-advanced').remove();
    }

    $('#search-block-form').submit(function(event) {
      var $advanced_search = $('fieldset#edit-advanced');
      var $search_radios = $('div[id^="search-radios"]').find('input');
      if ($advanced_search.hasClass('collapsed')) {
        event.preventDefault();
        var $query_string = $('input[id^="edit-search-block-form"][type="text"]').val();
        var selected_search;
        var current_url = window.location.origin;

        $($search_radios).each(function (index, element) {
          if ($(element).is(":checked")) {
            selected_search = $(element).val();
          }
        });

        window.location.assign(current_url + '/' + selected_search + '/' + $query_string);
      }
    });
  });
})(jQuery);
