$('#check-in-button').on('click', function (event) {
  event.preventDefault();
  var name = $('#customer-name-input').val();
  var size = $('#number-input').val();
  var time = (new Date).getTime();
  console.log({ name, size, time });
  $.post("/", { name, size, time }, function (result) {
    console.log(result);
    location.reload();
  });
});

$(document).on("click", "button.seat-button", function (event) {
  var customerId = $(this).data("customer-id");
  console.log('customerId', customerId);
  $.ajax({
    type: 'PUT',
    url: '/',
    contentType: 'application/json',
    data: JSON.stringify({ customerId }) // access in body
  }).done(function () {
    console.log('SUCCESS');
    location.reload();
  }).fail(function (msg) {
    console.log('FAIL');
  })
});

$(document).on("click", "button.checkout-button", function (event) {
  var customerId = $(this).data("customer-id");
  console.log('customerId', customerId);
  $.ajax({
    type: 'DELETE',
    url: '/',
    contentType: 'application/json',
    data: JSON.stringify({ customerId }) // access in body
  }).done(function () {
    console.log('SUCCESS');
    location.reload();
  }).fail(function (msg) {
    console.log('FAIL');
  })
});