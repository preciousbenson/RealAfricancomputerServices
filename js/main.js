
$(document).ready(function () {

    $navheader = $('.navheader');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $navheader.toggleClass('collapsenavbar');
    })

});