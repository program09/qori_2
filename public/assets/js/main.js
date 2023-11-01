/* ------------------------------- MODO OSCURO ------------------------------ */
$(document).ready(function () {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        $('body').addClass(currentTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        $('body').addClass("dark-theme");
    }

    $('#toggle-theme-button').click(function () {
        let theme = 'light-theme';
        if ($('body').hasClass('light-theme')) {
            $('body').removeClass('light-theme').addClass('dark-theme');
            theme = 'dark-theme';
        } else {
            $('body').removeClass('dark-theme').addClass('light-theme');
        }
        localStorage.setItem('theme', theme);
    });
});




/* ------------------------------- MODO OSCURO ------------------------------ */


/* --------------------------------- menubar -------------------------------- */

function checkWindowSize() {
    if ($(window).width() > 800) {
        $('.aside_main').removeClass('show-aside');
    }
}

$(document).ready(function () {
    $('#btn_usermenu').click(function (event) {
        $('.menu_user_header').slideToggle();
        $('.aside_main').removeClass('show-aside');
        event.stopPropagation();
    });

    $(document).click(function (event) {
        var menuUser = $('.menu_user_header');

        if (!menuUser.is(event.target) && menuUser.has(event.target).length === 0) {
            menuUser.fadeOut();
        }
    });

    $('#btn_aside').click(function (event) {
        $('.menu_user_header').slideUp('fast');
        $('.aside_main').toggleClass('show-aside');
        event.stopPropagation();
    });

    $(document).click(function () {
        $('.aside_main').removeClass('show-aside');
    });

    $('.aside_main').click(function (event) {
        event.stopPropagation();
    });

    checkWindowSize(); // Para verificar el tamaño inicial de la ventana.

    $(window).resize(function () {
        checkWindowSize(); // Para verificar el tamaño cada vez que la ventana cambia de tamaño.
    });

    $('.item_btn').click(function (e) {
        e.preventDefault();
        $(this).css('color', '#ff3d65');
        var sublista = $(this).parent().find('.sublista');
        if (sublista.is(":visible")) {
            sublista.slideUp('fast');
            $(this).css('color', 'black');
        } else {
            $('.sublista').slideUp('fast');
            sublista.slideDown('fast');

        }
    });
});


/* ----------------------------- LIMPIAR INPPUTS ---------------------------- */
function resetForm(id) {
    document.getElementById(id).reset();
}



/* --------------------- FORMULADIOS DE CONFIGURACIONES --------------------- */

// Función para mostrar el modal con el formulario respectivo
function displayForm(formId) {
    var myModal = new bootstrap.Modal(document.getElementById('modal_edit_campos'));
    var modal = document.getElementById("modal_edit_campos");
    var modalContent = document.getElementById("modalContent");
    var formContent = getFormContent(formId);
    myModal.show();
    modalContent.innerHTML = formContent;
}

// Función para obtener el contenido del formulario según el botón presionado
function getFormContent(formId) {
    switch(formId) {
        case 'form1':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_name">
                        <div class="group_form">
                            <label for="name_user">Nombre*</label>
                            <input type="text" id="name_user" name="name_user" placeholder="Nombre">
                        </div>
                        <div class="group_form">
                            <label for="lastname_user">Apellidos completo*</label>
                            <input type="text" id="lastname_user" name="lastname_user" placeholder="Apellidos*">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_name')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `;
        case 'form2':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_cell">
                        <div class="group_form">
                            <label for="cell_user">Celular*</label>
                            <input type="text" id="cell_user" name="cell_user" placeholder="Celular">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_cell')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `;
        case 'form3':

            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_address">
                        <div class="group_form">
                            <label for="address_user">Dirección*</label>
                            <input type="text" id="address_user" name="address_user" placeholder="Dirección">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_address')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `
        ;
        case 'form4':

            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_estado_shop">
                        estado_shop de la tienda
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_estado_shop')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `
        ;
        case 'form5':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_shop_name">
                        <div class="group_form">
                            <label for="name_shop">Nombre de la tienda*</label>
                            <input type="text" id="name_shop" name="name_shop" placeholder="Nombre de la tienda">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_shop_name')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `;
        case 'form6':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_shop_cell">
                        <div class="group_form">
                            <label for="cell_shop">Celular de la tienda*</label>
                            <input type="text" id="cell_shop" name="cell_shop" placeholder="Celular de la tienda">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_shop_cell')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `;
        case 'form7':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_shop_address">
                        <div class="group_form">
                            <label for="address_shop">Dirección de la tienda*</label>
                            <input type="text" id="address_shop" name="address_shop" placeholder="Dirección de la tienda">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_shop_address')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `
        ;
        case 'form8':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_password">
                        <div class="group_form">
                            <label for="password_user">Contraseña nueva*</label>
                            <input type="password" id="password_user" name="password_user" placeholder="Contraseña nueva">
                        </div>
                        <div class="group_form">
                            <label for="password_user">Contraseña actual*</label>
                            <input type="password" id="password_user" name="password_user" placeholder="contraseña actual">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_password')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `
        ;
        case 'form9':
            return `
                <div class="modal-body">
                    <form action="" class="formulario" id="form_user_correo">
                        <div class="group_form">
                            <label for="correo_user">Correo*</label>
                            <input type="text" id="correo_user" name="correo_user" placeholder="Correo">
                        </div>
                        <div class="group_form">
                            <label for="correo_user">Comprobar contraseña*</label>
                            <input type="password" id="correo_user" name="correo_user" placeholder="Contraseña">
                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_correo')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Actualizar</button>
                </div>
            `
        ;
        case 'form10':
            return `
                <div class="modal-body">
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Alerta: </strong> Si eliminas tu cuenta, se perderán todos tus datos y no podras recuperarlos.
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" onclick="resetForm('form_user_address')" class="btn_modal btn_modal_cancelar"
                        data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn_modal color-1">Eliminar</button>
                </div>
            `
        ;
        default:
            // Acción predeterminada si no se cumplen ninguno de los casos anteriores
            break;
    }
    
    // Agrega más casos según sea necesario para más formularios
}