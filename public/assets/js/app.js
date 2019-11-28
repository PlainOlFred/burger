$(document).ready(() => {
  $('.devour-burger-btn').on('click', (e) => {
    let 
      id = e.target.dataset.id;
    console.log(id);


    $.ajax(`api/burgers/${id}`, {
            type: 'PUT'

          }).then(
            function() {
              console.log('devoured')
              location.reload();
            }
          );


  })
})




