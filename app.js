
const validate = new window.JustValidate('#form2');
const {form} = document.forms;
function formValue (e) {
         e.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

}
validate.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введіть імя',
    },
    {
        rule: 'minLength',
        errorMessage: 'мінімум 2 слова',
        value: 2,
    }
])