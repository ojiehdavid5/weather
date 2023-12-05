const wrapper=document.querySelector(' .wrapper ');
const loginLink=document.querySelector('.login-link');
const  registerLink=document.querySelector('.btn');

registerLink.addEventListener('click',()=> {


    wrapper.classList.add('active');

});





loginLink.addEventListener('click',()=>{


    wrapper.classList.remove('active');
});

// $("button")[0].click(function(){
//     $(".body").classList.add("change");
// });