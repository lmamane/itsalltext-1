/**
 * Pass back the values that that the user selected.
 */
function onOK() {
    window['arguments'][0].out = {
        extension: document.getElementById('new_ext').value,
        do_save: document.getElementById('do_save').checked
    };
   return true;
}
