function checkNumInputs(selector){
    const sel = document.querySelectorAll(selector);
    sel.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

}
export default checkNumInputs;

