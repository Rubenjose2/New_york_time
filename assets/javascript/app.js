var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + "q=" + searchTerm + "&page=" + numberOfResults + "&begin_date=" + startYr + "&end_date=" + endYr + "&sort=newest&api-key=a1c5f475049643e28957a815b74318b4";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});