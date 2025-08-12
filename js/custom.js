// DROPDOWN

$(document).ready(function () {
    $('.drop-btn .lesson-data h2 button').click(function () {
        $(this).toggleClass('active');
        $(this).parent().parent().parent().parent().find('.drop-btn').toggleClass('active');
        $(this).closest('.assessment-result').find('.drop-list').first().slideToggle('fast');
        event.stopPropagation();
    });
});

$(document).ready(function () {
    $('.lessons-btn').click(function () {
        $(this).toggleClass('active');
        $('.lessons-list').slideToggle('fast');
        event.stopPropagation();
    });
});

$(document).ready(function () {
    // Toggle Main Dropdown
    $('.influ-more-drop-btn').click(function (event) {
        event.stopPropagation();

        // Close all inner dropdowns
        $('.influ-drop-list').slideUp('fast');
        $('.far').removeClass('active');

        // Toggle only this main dropdown
        const $targetList = $(this).siblings('.influ-more-drop-list');
        $('.influ-more-drop-list').not($targetList).slideUp('fast');
        $targetList.slideToggle('fast');
    });

    // Toggle Inner Dropdowns
    $('.influ-drop-btn').click(function (event) {
        event.stopPropagation(); // <- prevents outer dropdown from closing

        // Close outer main dropdown
        $('.influ-more-drop-list').not($(this).closest('.influ-more-drop-list')).slideUp('fast');

        // Toggle this inner dropdown
        const $targetList = $(this).siblings('.influ-drop-list');
        $('.influ-drop-list').not($targetList).slideUp('fast');
        $targetList.slideToggle('fast');

        // Toggle icon
        const $icon = $(this).find('.far');
        $('.far').not($icon).removeClass('active');
        $icon.toggleClass('active');
    });

    // Prevent closing when clicking inside dropdowns
    $('.influ-drop-list, .influ-more-drop-list, .influ-more-drop-list-inner').click(function (event) {
        event.stopPropagation();
    });

    // Click outside closes everything
    $(document).click(function () {
        $('.influ-drop-list, .influ-more-drop-list').slideUp('fast');
        $('.far').removeClass('active');
    });
});

// DROPDOWN


// TEACHERS-STUDENTS-LIST

$('.teachers-item a').click(function () {
    event.stopPropagation();
});

$(document).ready(function () {
    $('.teachers-item').click(function (event) {
        event.stopPropagation(); // prevent bubbling

        // Toggle active class on clicked item
        $(this).toggleClass('active');

        // Remove active class from all other items
        $(".teachers-item").not(this).removeClass('active');

        // Check if the clicked item is active
        if ($(this).hasClass('active')) {
            $('.students-list').show();
            $('.no-data-wrap').hide();
        } else {
            $('.students-list').hide();
            $('.no-data-wrap').show();
        }
    });
});

// TEACHERS-STUDENTS-LIST


// TOGGLE SIDEBAR

const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})

// TOGGLE SIDEBAR



