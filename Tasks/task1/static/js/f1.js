
// Функционал №1

let idToEdit = '';
let objToEdit = {};
let valToEdit = '';
let newValue = '';

function startUpdateForm(e) {
    // Init
    idToEdit = e.target.id.slice(0, -5);
    objToEdit = $('#' + idToEdit);
    valToEdit = idToEdit != 'avatar' ? objToEdit.text() : objToEdit.attr('src');

    // Clear form
    $('#profile-update__old-value')
        .html(valToEdit);
    $('#profile-update__new-value')
        .html('...');
    $('#profile-update__value')
        .val('');

    // Show form
    $('#profile-info')
        .fadeOut(500, () =>
            $('#profile-update')
                .fadeIn(500)
        );
}
function hideUpdateForm() {
    $('#profile-update')
        .fadeOut(500, () =>
            $('#profile-info')
                .fadeIn(500)
        );
}
function updateInfo() {
    if (idToEdit == 'avatar') {
        objToEdit.attr('src', newValue);
    } else {
        objToEdit.html(newValue);
    }

    hideUpdateForm();
}

$(() => {
    $('#profile-info .btn')
        .click(startUpdateForm);
    $('#profile-update .btn')
        .click(updateInfo);
    $('#profile-update__value')
        .on('input', (e) => {
            newValue = e.target.value;
            $('#profile-update__new-value').html(newValue);
        })
});
