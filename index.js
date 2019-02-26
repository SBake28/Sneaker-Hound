let totalPageNum;
let nextPageNum;
let currentPageNum;
let name;

$(document).ready(function() {

  $('.goToSniffOut').click(function() {
    $('.goToSniffOut').addClass('selectedNav');
    $('.goToUpcoming').removeClass('selectedNav');
    $('#landing').addClass('hidden');
    $('#loader').hide();
    $('#upcomingReleases').addClass('hidden');
    $('#sneakerPage').addClass('hidden');
    $('#resultsPage').addClass('hidden');
    $('#sneakerSelection').removeClass('hidden');
    $('#results').empty();
    $('.nextPage').addClass('hidden');
    $('.prevPage').addClass('hidden');
    $('header').removeClass('hidden');
    $('#colorwayInput').val("");
    $('html, body').scrollTop(0);
    postSneakers(jordanSelection);
  });

  $('.goToUpcoming').click(function() {
    $('.goToUpcoming').addClass('selectedNav');
    $('.goToSniffOut').removeClass('selectedNav');
    $('#landing').addClass('hidden');
    $('#sneakerPage').addClass('hidden');
    $('#resultsPage').addClass('hidden');
    $('#sneakerSelection').addClass('hidden');
    $('header').removeClass('hidden');
    $('#loader').hide();
    $('html, body').scrollTop(0);
    getRequest();
    $('#upcomingReleases').removeClass('hidden');
  });

});

$('.nextPage').click(function() {
  nextPageNum = currentPageNum + 1;
  $('html, body').scrollTop(0);
  buildEbayUrl();
});

$('.prevPage').click(function() {
  nextPageNum = currentPageNum - 1;
  $('html, body').scrollTop(0);
  buildEbayUrl();
});

$('#headerLogo').click(function() {
  $('.goToUpcoming').removeClass('selectedNav');
  $('.goToSniffOut').removeClass('selectedNav');
  $('#landing').removeClass('hidden');
  $('#sneakerPage').addClass('hidden');
  $('#resultsPage').addClass('hidden');
  $('#sneakerSelection').addClass('hidden');
  $('header').addClass('hidden');
  $('#loader').hide();
  $('html, body').scrollTop(0);
  $('#upcomingReleases').addClass('hidden');
});

/* Sneaker Info */
var jordanSelection = [
  {
    name: "Air Jordan 1",
    yearReleased: "1985",
    designer: "Peter Moore",
    ogPrice: "$65",
    popularColorways: "Black/Red, Black/Royal, Black Toe, Chicago",
    image: "https://i.imgur.com/wBQlfhQ.png"
  },
  {
    name: "Air Jordan 2",
    yearReleased: "1986",
    designer: "Peter Moore",
    ogPrice: "$100",
    popularColorways: "White/Black-Red, Carmelo Anthony PE",
    image: "https://i.imgur.com/ZnTLYYZ.png"
  },
  {
    name: "Air Jordan 3",
    yearReleased: "1988",
    designer: "Tinker Hatfield",
    ogPrice: "$100",
    popularColorways: "White/Cement, Black/Cement, Fire Red, True Blue",
    image: "https://i.imgur.com/ViRmZ3e.png"
  },
  {
    name: "Air Jordan 4",
    yearReleased: "1989",
    designer: "Tinker Hatfield",
    ogPrice: "$100",
    popularColorways: "White/Cement, Black/Cement, Military Blue, Fire Red, Lightning, Thunder, UNDFTD",
    image: "https://i.imgur.com/jG8xLwm.png"
  },
  {
    name: "Air Jordan 5",
    yearReleased: "1990",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "White/Fire Red-Black, White/Black-Fire Red, Black/Metallic Silver, Grape, Laney, Raging Bull Pack",
    image: "https://i.imgur.com/69RMceQ.png"
  },
  {
    name: "Air Jordan 6",
    yearReleased: "1991",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "White/Infrared, Black/Infrared, Carmine, Olympic, Defining Moments",
    image: "https://i.imgur.com/W9Nxzfp.png"
  },
  {
    name: "Air Jordan 7",
    yearReleased: "1992",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "Hare, Bordeaux, Black/True Red, Cardinal, Olympic",
    image: "https://i.imgur.com/KmqYA9K.png"
  },
  {
    name: "Air Jordan 8",
    yearReleased: "1993",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "White/Black-True Red, Aqua, Black/True Red",
    image: "https://i.imgur.com/ZdQQkiI.png"
  },
  {
    name: "Air Jordan 9",
    yearReleased: "1993",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "White/Black-True Red, Powder Blue, Charcoal, Cool Grey",
    image: "https://i.imgur.com/YVwqser.png"
  },
  {
    name: "Air Jordan 10",
    yearReleased: "1994",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "Chicago, UNC, Steel Grey, Shadow Black",
    image: "https://i.imgur.com/xbRJOXG.png"
  },
  {
    name: "Air Jordan 11",
    yearReleased: "1995",
    designer: "Tinker Hatfield",
    ogPrice: "$125",
    popularColorways: "Concord, Playoff, Columbia, Space Jam, Cool Grey",
    image: "https://i.imgur.com/kIFM4b3.png"
  },
  {
    name: "Air Jordan 12",
    yearReleased: "1996",
    designer: "Tinker Hatfield",
    ogPrice: "$135",
    popularColorways: "Taxi, Obsidian, White/Varisty Red, Playoffs, Black/Red (Flu Game)",
    image: "https://i.imgur.com/a2agyVs.png"
  },
  {
    name: "Air Jordan 13",
    yearReleased: "1997",
    designer: "Tinker Hatfield",
    ogPrice: "$150",
    popularColorways: "White/True Red-Black, Playoff, Flint, White/Black-True Red, Black/True Red, Ray Allen PE",
    image: "https://i.imgur.com/EXtTNab.png"
  },
  {
    name: "Air Jordan 14",
    yearReleased: "1998",
    designer: "Tinker Hatfield",
    ogPrice: "$150",
    popularColorways: "White/Black-Varsity Red, Playoffs, White/Varsity Red, Last Shot",
    image: "https://i.imgur.com/NPEnNIY.png"
  },
  {
    name: "Air Jordan 15",
    yearReleased: "1999",
    designer: "Tinker Hatfield",
    ogPrice: "$150",
    popularColorways: "Black/Varsity Red, White/Red, White/Columbia Blue",
    image: "https://i.imgur.com/iYwmttm.png"
  },
  {
    name: "Air Jordan 16",
    yearReleased: "2001",
    designer: "Wilson Smith",
    ogPrice: "$160",
    popularColorways: "Black/Varsity Red, White/Royal, Ginger",
    image: "https://i.imgur.com/hEZTUA3.png"
  },
  {
    name: "Air Jordan 17",
    yearReleased: "2002",
    designer: "Wilson Smith",
    ogPrice: "$200",
    popularColorways: "White/College Blue, White/Varsity Red, White/Lightning-Black",
    image: "https://i.imgur.com/rozLGHO.png"
  },
  {
    name: "Air Jordan 18",
    yearReleased: "2003",
    designer: "Tate Kuerbis",
    ogPrice: "$175",
    popularColorways: "Black/Sport Royal, White/Varsity Red",
    image: "https://i.imgur.com/0nkGRbZ.png"
  },
  {
    name: "Air Jordan 19",
    yearReleased: "2004",
    designer: "Tate Kuerbis, Jason Mayden, Wilson Smith, Josh Heard, Suzette Henri",
    ogPrice: "$165",
    popularColorways: "White/Chrome-Flint Grey, Black/Red",
    image: "https://i.imgur.com/AbpATZb.png"
  },
  {
    name: "Air Jordan 20",
    yearReleased: "2005",
    designer: "Tinker Hatfield, Mark Smith",
    ogPrice: "$175",
    popularColorways: "Black/Stealth-Varsity Red, White/Varsity Red-Black",
    image: "https://i.imgur.com/DMDtMGo.png"
  },
  {
    name: "Air Jordan 21",
    yearReleased: "2006",
    designer: "D'Wayne Edwards",
    ogPrice: "$175",
    popularColorways: "Varsity Red/Metallic Silver-Black",
    image: "https://i.imgur.com/RyijdA8.png"
  },
  {
    name: "Air Jordan 22",
    yearReleased: "2007",
    designer: "D'Wayne Edwards",
    ogPrice: "$175",
    popularColorways: "Black/Varsity Red-Metallic Silver",
    image: "https://i.imgur.com/jWPKZor.png"
  },
  {
    name: "Air Jordan 23",
    yearReleased: "2008",
    designer: "Tinker Hatfield, Mark Smith",
    ogPrice: "$185",
    popularColorways: "White/Titanium/University Blue, White/Black-Varsity Red, Black/Varsity Red",
    image: "https://i.imgur.com/BdpKoUh.png"
  },
  {
    name: "Air Jordan 2009",
    yearReleased: "2009",
    designer: "Jason Mayden",
    ogPrice: "$190",
    popularColorways: "White/Red",
    image: "https://i.imgur.com/MMAQKql.png"
  },
  {
    name: "Air Jordan 2010",
    yearReleased: "2010",
    designer: "Tinker Hatfield, Mark Smith",
    ogPrice: "$170",
    popularColorways: "White/Black-Red, White/Red-Black",
    image: "https://i.imgur.com/tX9qNgz.png"
  },
  {
    name: "Air Jordan 2011",
    yearReleased: "2011",
    designer: "Tom Luedecke",
    ogPrice: "$175",
    popularColorways: "White/Red, White/Black, Black/Black, Year of the Rabbit",
    image: "https://i.imgur.com/DJTbNiV.png"
  },
  {
    name: "Air Jordan 2012",
    yearReleased: "2012",
    designer: "Tinker Hatfield, Tom Luedecke",
    ogPrice: "$230",
    popularColorways: "Wolf Grey",
    image: "https://i.imgur.com/52BuTqy.png"
  },
  {
    name: "Air Jordan 28",
    yearReleased: "2013",
    designer: "Tinker Hatfield, Josh Heard",
    ogPrice: "$250",
    popularColorways: "Electric Green, Carbon Fiber, Why Not",
    image: "https://i.imgur.com/3q5c1b0.png"
  },
  {
    name: "Air Jordan 29",
    yearReleased: "2014",
    designer: "Tinker Hatfield",
    ogPrice: "$225",
    popularColorways: "Year of the Goat, Pantone",
    image: "https://i.imgur.com/u8CEpkp.png"
  },
  {
    name: "Air Jordan 30",
    yearReleased: "2016",
    designer: "Tinker Hatfield, Mark Smith",
    ogPrice: "$200",
    popularColorways: "Cosmos, Black Cat",
    image: "https://i.imgur.com/toSIWxY.png"
  },
  {
    name: "Air Jordan 31",
    yearReleased: "2016",
    designer: "Tate Kuerbis",
    ogPrice: "$185",
    popularColorways: "Why Not, Space Jam",
    image: "https://i.imgur.com/fKiQGoH.png"
  }
]

/* Sneaker Selection Page */

function postSneakers(items) {

  let html = "";

  $.each(items, function (i, item) {
    let name = jordanSelection[i].name;
    let pic = jordanSelection[i].image;
    html += '<div class = "shoeContainer center">';
    html += '<img src="' + pic + '"class="shoePic center" alt="' + name + '">';
    html += '<h4>' + name + '<h4>';
    html += '</div>';
    $('#jordans').html(html);
  });

  handleSneakerClick();

}

function handleSneakerClick() {

  $('.shoeContainer').click(function () {
    $('html, body').scrollTop(0);
    let i = $(this).index();
    $('#sneakerSelection').addClass('hidden');
    $('#sneakerPage').removeClass('hidden');
    let html = "";
    name = jordanSelection[i].name;
    let year = jordanSelection[i].yearReleased;
    let price = jordanSelection[i].ogPrice;
    let colorways = jordanSelection[i].popularColorways;
    let pic = jordanSelection[i].image;
    let designer = jordanSelection[i].designer;
    $('#sneakerPagePic').find('img').attr('src', pic);
    html += '<h2>' + name + '<h2>';
    html += '<h4>Originally Released:  ' + year + '</h4>';
    html += '<h4>Original Retail Price:  ' + price + '</h4>';
    html += '<h4>Designed By:  ' + designer + '</h4>';
    html += '<h4>Popular Colorways:  ' + colorways + '</h4>';
    $('#sneakerInfo').html(html);
    nextPageNum = 1;
    buildSizeSelect();
    submitShoe();
  });

} //End handleSneakerClick() function

function buildSizeSelect() {
  
  $('#genderSelect').change(function () {
    let val = $(this).val();
    if (val == "US Shoe Size (Men's)") {
      let sizeHTML = "";
      sizeHTML += "<option value='5'>5</option>";
      sizeHTML += "<option value='5.5'>5.5</option>";
      sizeHTML += "<option value='6'>6</option>";
      sizeHTML += "<option value='6.5'>6.5</option>";
      sizeHTML += "<option value='7'>7</option>";
      sizeHTML += "<option value='7.5'>7.5</option>";
      sizeHTML += "<option value='8'>8</option>";
      sizeHTML += "<option value='8.5'>8.5</option>";
      sizeHTML += "<option value='9'>9</option>";
      sizeHTML += "<option value='9.5'>9.5</option>";
      sizeHTML += "<option value='10'>10</option>";
      sizeHTML += "<option value='10.5'>10.5</option>";
      sizeHTML += "<option value='11'>11</option>";
      sizeHTML += "<option value='11.5'>11.5</option>";
      sizeHTML += "<option value='12'>12</option>";
      sizeHTML += "<option value='12.5'>12.5</option>";
      sizeHTML += "<option value='13'>13</option>";
      sizeHTML += "<option value='14.5'>14.5</option>";
      sizeHTML += "<option value='15'>15</option>";
      sizeHTML += "<option value='15.5'>15.5</option>";
      sizeHTML += "<option value='16'>16</option>";
      sizeHTML += "<option value='16.5'>16.5</option>";
      sizeHTML += "<option value='17'>17</option>";
      sizeHTML += "<option value='17.5'>17.5</option>";
      sizeHTML += "<option value='18'>18</option>";
      $('#sizeSelect').html(sizeHTML);
    } else {
      let sizeHTML = "";
      sizeHTML += "<option value='3'>3</option>";
      sizeHTML += "<option value='3.5'>3.5</option>";
      sizeHTML += "<option value='4'>4</option>";
      sizeHTML += "<option value='4.5'>4.5</option>";
      sizeHTML += "<option value='5'>5</option>";
      sizeHTML += "<option value='5.5'>5.5</option>";
      sizeHTML += "<option value='6'>6</option>";
      sizeHTML += "<option value='6.5'>6.5</option>";
      sizeHTML += "<option value='7'>7</option>";
      sizeHTML += "<option value='7.5'>7.5</option>";
      sizeHTML += "<option value='8'>8</option>";
      sizeHTML += "<option value='8.5'>8.5</option>";
      sizeHTML += "<option value='9'>9</option>";
      sizeHTML += "<option value='9.5'>9.5</option>";
      sizeHTML += "<option value='10'>10</option>";
      sizeHTML += "<option value='10.5'>10.5</option>";
      sizeHTML += "<option value='11'>11</option>";
      sizeHTML += "<option value='11.5'>11.5</option>";
      sizeHTML += "<option value='12'>12</option>";
      sizeHTML += "<option value='12.5'>12.5</option>";
      sizeHTML += "<option value='13'>13</option>";
      $('#sizeSelect').html(sizeHTML);
    }
  });

} //End buildSizeSelect() function

/* Nike API */
function getRequest() {

  const nikeUrl = 'https://api.nike.com/commerce/productfeed/products/v1.5/snkrs/threads?';
  var params = {
    "country": "US",
    "locale": "en_US",
    "channel": "snkrs",
    "limit": 50,
    "upcoming": true
  };

  //Submit request
  $.getJSON(nikeUrl, params, function (data) {
    let results = data.threads;
    postUpcomingShoes(results)
  });

} //End getRequest() function

function postUpcomingShoes(items) {

  let html = "";

  $.each(items, function (i, item) {
    let shoeName = item.name;
    let styleCode = item.product.style+"-"+item.product.colorCode;
    let image = item.product.imageUrl;
    let price = item.product.price.fullRetailPrice;
    let longReleaseDate = new Date(item.product.startSellDate);
    let releaseDate = longReleaseDate.toLocaleDateString('en-US');
    let productLink = item.seoSlug;
    let title = item.title;
    html += '<a href="https://www.nike.com/launch/t/' + productLink + '" target="_blank">';
    html += '<div class = "releaseCard">';
    html += '<h3>' + releaseDate + '</h3>';
    html += '<div class = "releaseImg">';
    html += '<img src="' + image + '"></div>';
    html += '<h4>' + shoeName + '</h4>';
    html += '<p>' + title + '</p>';
    html += '<p>' + styleCode + '</p>';
    html += '<p>$' + price + '</p>';
    html += '</div>';
    html += '</a>';
    $('#releases').html(html);
  });

} // End postUpcomingShoes() function

/* eBay API */

function submitShoe() {

  $('#searchDetails').submit(function (e) {
    e.preventDefault();
    $('#sneakerPage').addClass('hidden');
    $('#landing').addClass('hidden');
    $('#resultsPage').removeClass('hidden');
    buildEbayUrl();
  });

}

// Parse the response and build an HTML table to display search results */ 

function findItemsByKeywords(root) {
  
  var items = root.findItemsAdvancedResponse[0].searchResult[0].item;
  var html = [];
  totalPageNum =  root.findItemsAdvancedResponse[0].paginationOutput[0].totalPages[0];
  currentPageNum = parseInt(root.findItemsAdvancedResponse[0].paginationOutput[0].pageNumber[0]);
  totalSearchResuls = parseInt(root.findItemsAdvancedResponse[0].paginationOutput[0].totalEntries[0]);
  $('#resultsHeader').html('<h2>We sniffed out ' + totalSearchResuls + ' ' + name +'s matching your criteria!</h2>');
  html.push('<table width="95%" cellspacing="0" cellpadding="3" class="center" id="ebayTable"><tbody>');
  
  for (var i = 0; i < items.length; ++i) {
    var item     = items[i];
    var title    = item.title;
    var pic      = item.galleryURL;
    var viewitem = item.viewItemURL;
    let condition = item.condition[0].conditionDisplayName[0];
    let num  = parseInt(item.sellingStatus[0].convertedCurrentPrice[0].__value__);
    var price = num.toFixed(2)

    if (null != title && null != viewitem) {
      html.push('<tr><td>' + '<div style="display:flex;justify-content:center;align-items:center;" class="resultPic"><img src="' + pic + '"></div>' + '</td>' + 
      '<td><a href="' + viewitem + '" target="_blank">' + title + '</a></td>' + 
      '<td><p>$' + price + '</p></td>' + '<td><p> ' + condition + '</p></td></tr>');
    }

  }

  if (currentPageNum < totalPageNum) {
    $('.nextPage').removeClass('hidden');
  } else {
    $('.nextPage').addClass('hidden');
  }

  if (currentPageNum > 1) {
    $('.prevPage').removeClass('hidden');
  } else {
    $('.prevPage').addClass('hidden');
  }

  html.push('</tbody></table>');
  document.getElementById("results").innerHTML = html.join("");
  
  $('#ebayTable tr').click(function() {
    let href = $(this).find('a').attr('href');
    if(href) {
      window.open(href);
    }

  });

  $(function () {
    $('#loader').fadeOut();
  });

}  // End findItemsByKeywords() function

function buildEbayUrl() {

  $('#loader').show();
  let gender = $('#genderSelect').val();
  let condition = $('#conditionSelect').val();
  let size = $('#sizeSelect').val();
  let colorway = $('#colorwayInput').val();
  let shoe = name;
  let catID;
  
  //Determine cat by gender
  if (gender === "US Shoe Size (Men's)") {
    catID = 93427;
  } else if (gender === "US Shoe Size (Women's)") {
    catID = 3034;
  }
  
  // Construct the request
    url = "https://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsAdvanced";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=SeanBake-FindingA-PRD-b8e31710d-f4e2da45";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += '&keywords="' + shoe + '" ' + colorway;
    url += "&categoryId=" + catID;
    url += "&outputSelector=AspectHistogram"

    if (condition === "New") {
      url += "&itemFilter(0).name=Condition";
      url += "&itemFilter(0).value=New";
      url += "&aspectFilter(0).aspectName=" + gender;
      url += "&aspectFilter(0).aspectValueName=" + size;
      url += "&paginationInput.entriesPerPage=25";
      url += "&paginationInput.pageNumber="+ nextPageNum;
    } else if (condition === "Used") {
      url += "&itemFilter(0).name=Condition";
      url += "&itemFilter(0).value=Used";
      url += "&aspectFilter(0).aspectName=" + gender;
      url += "&aspectFilter(0).aspectValueName=" + size;
      url += "&paginationInput.entriesPerPage=25";
      url += "&paginationInput.pageNumber="+ nextPageNum;
    } else {
      url += "&aspectFilter(0).aspectName=" + gender;
      url += "&aspectFilter(0).aspectValueName=" + size;
      url += "&paginationInput.entriesPerPage=25";
      url += "&paginationInput.pageNumber="+ nextPageNum;
    }

  // Submit the request
  $.ajax({
    type: "get",
    url: url,
    dataType: "jsonp",
    cache: true,
    crossDomain: true,
    success: function (data) {
      findItemsByKeywords();
    }
  });

} // End buildEbayUrl() function
