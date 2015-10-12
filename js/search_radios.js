/**
 * @file
 *  Frontend functionality for search radios.
 */

(function ($) {
  $(document).ready(function() {
    $('#search-block-form').submit(function(event) {
      event.preventDefault();
      var $search_radios = $('#edit-searches');
      var $query_string = $('input[id^="edit-search-block-form"][type="text"]').val();
      var selected_search;
      var current_url = window.location.origin;

      $($search_radios).children('div').each(function (index, element) {
        var $elem = $(element).children('input');
        if ($($elem).is(":checked")) {
          selected_search = $($elem).val();
        }
      });

      window.location.assign(current_url + '/' + selected_search + '/' + $query_string);
    });
  });
})(jQuery);
