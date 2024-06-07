console.log(document.forms.myForm);
let myForm = document.forms.myForm;

console.log(myForm.colour);
console.log(myForm.biking.value);
console.log(myForm.colour.value);
console.log(myForm.siking.value);

console.log(myForm.button)

myForm.biking.onfocus = function () {
    myForm.biking.style.border = "4px solid pink";
    myForm.biking.style.outline = "none";
}
