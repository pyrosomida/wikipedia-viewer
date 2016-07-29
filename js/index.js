$(document).ready(function() {
  $('#search').on('click', function() {
    var searchTerm = $('#search_term').val();
    $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&redirects=resolve&search='+searchTerm+'&limit=15&callback=?', function(json) {
      var wiki = json;
      var titles = json[1];
      var summary = json[2];
      var links = json[3];
      var Entry = function () {};
      var EntryArr = [];
      
      for (var i=0; i<15; i++) {
        var temp = new Entry();
        temp.title = titles[i];
        temp.summary = summary[i];
        temp.link = links[i];
        EntryArr[i] = temp;
        }
      for (var j=0; j<EntryArr.length; j++) {
          var temp2 = EntryArr[j];
      }
      
      var html ='<br/>';
      EntryArr.forEach(function(val) {
        var keys = Object.keys(val);
        if (val[keys[0]] !== undefined) {
          html += '<a href="' + val[keys[2]] + '" target="_blank"><div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title">' + val[keys[0]] + '</h3></div><div class="panel-body">' + val[keys[1]] + '</div></div></a>';
        }
        $('#results').html(html);
        });
    });
  });
});