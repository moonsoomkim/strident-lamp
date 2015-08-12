// Original
 
if (a != 'link') {
setTimeout(jQuery('a').bind("mousedown", function(e) {
  var linkName=jQuery(this).attr('name');
  var linkId='';
  var linkPos='';
  if(linkName)
  {
    linkId=linkName.split('&lid=')[1].split('&')[0];
    linkPos=linkName.split('&lid=')[1].split('&lpos=')[1];
    utag.link({
link_id : linkId,
        link_pos : linkPos
});
  }
 return;
  })
 ,500)  
  }
 
// Indented 
 
if (a != 'link') {
  setTimeout(jQuery('a')
    .bind("mousedown", 
      function(e) {
        var linkName=jQuery(this).attr('name');
        var linkId='';
        var linkPos='';
        if(linkName) {
          linkId=linkName.split('&lid=')[1].split('&')[0];
          linkPos=linkName.split('&lid=')[1].split('&lpos=')[1];
          utag.link({
            link_id : linkId,
            link_pos : linkPos
          });
        }
        return;
      }
    ),
  500)
}
 
 
// Revised
 
var jqueryBindMousedown = function() {
  jQuery('a')
    .on("mousedown", 
      function(e) {
        var linkName=jQuery(this).attr('name');
        var linkId='';
        var linkPos='';
        if(linkName) {
          linkId=linkName.split('&lid=')[1].split('&')[0];
          linkPos=linkName.split('&lid=')[1].split('&lpos=')[1];
          utag.link({
            link_id : linkId,
            link_pos : linkPos
          });
        }
        return;
      }
    )
}
 
if (a != 'link') {
  setTimeout(jqueryBindMousedown,500)
}
