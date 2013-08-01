$(function() {

  $('.direct-upload').each(function() {
    /* For each file selected, process and upload */

    var form = $(this)

    $(this).fileupload({
      url: form.attr('action'), // Grabs form's action src
      type: 'POST',
      autoUpload: true,
      dataType: 'json',
      add: function (event, data) {
        data.context = $('<p/>').text('Uploading...').appendTo('.status');
        data.submit();
      },
      send: function(e, data) {
        //$('.progress').fadeIn(); // Display widget progress bar
      },
      progress: function(e, data){
        var percent = Math.round((e.loaded / e.total) * 100)
        $('.bar').css('width', percent + '%') // Update progress bar percentage
      },
      fail: function(e, data) {
        console.log('fail')
        data.context.text('Upload failed.');
        $('.progress').addClass('progress-danger');
      },
      success: function(data) {
        console.log('success')
      },
      done: function (event, data) {
        console.log(data.result.status);
        
        // Display status message when upload attempt is done
        data.context.text(data.result.status);

        // When upload is done, fade out progress bar and reset to 0
        $('.progress').fadeOut(300, function() {
          $('.bar').css('width', 0)
        })
      },
    })
  })
})
