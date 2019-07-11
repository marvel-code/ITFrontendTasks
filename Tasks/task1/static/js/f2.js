
// Функционал №2


function getMatchOrEmpty(source, regex) {
    const matches = source.match(regex);
    if (matches)
        return matches[1];
    else
        return '';
}

function showAlertBriefly(isSuccess, msg) {
    $('#vk-upload .alert')
        .animate({
            opacity: 0
        }, 200)
        .html(msg)
        .removeClass('alert-success alert-danger')
        .addClass(isSuccess ? 'alert-success' : 'alert-danger')
        .animate({
            opacity: 1
        }, 1000);
    setTimeout(() => {
        $('#vk-upload .alert')
            .animate({
                opacity: 0
            },1000);
    }, 3000);
}

function vkUpload() {
    vkUrl = $('input[name=vk-url]').val();
    console.log('Uploading VK data from ', vkUrl);

    $.ajax({
        url: vkUrl, // адрес, на который будет отправлен запрос
        type: 'GET',
        success: html => {
            const avatar_url =  $(html).find('.page_avatar_img').attr('src');
            const full_name =   $(html).find('.page_name').text();
            const status =      $(html).find('#page_current_info .current_text').text();
            const birthday =    $(html).find('.clear_fix.profile_info_row').children()[1];
            const about_me =    '#';

            $('#avatar').attr('src', avatar_url);
            $('#full-name').html(full_name);
            $('#status').html(status);
            $('#birthday').html(birthday);
            $('#about-me').html(about_me);

            console.log('Загадка:', avatar_url);    // Загадка: почему изображение загружается на странице корректно? :)

            showAlertBriefly(true, 'Данные успешно обновились!');
        },
        error: (request, status, error) => {
            console.log('Ошибка загрузки с ВК:', error);
            showAlertBriefly(false, 'Ошибка :-(');
        },
    });
}
