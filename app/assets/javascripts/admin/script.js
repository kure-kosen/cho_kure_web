$(function() {
  $('textarea[class~="pasteable"]').inlineattachment({
    uploadUrl: '/admin/articles/upload_image',
    extraHeaders: { 'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content') }
  });
});
