$(document).ready(function() {

  $(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 1200) {
    // hide all the extra text initially
    $('.hide').hide();

    // click on either link to show text
    $('.readmore').click(showOnClick);
    $('.learnmore').click(learnMoreText);

    // click to hide readmore
    $('.readless').click(hideOnClick);

    // show readmore
    function showOnClick(event) {
      event.preventDefault();
      $('.readmore').hide();
      $('#show-this-on-click').slideDown();
      $('.readless').show();
    }

    // hide readless
    function hideOnClick(event) {
      event.preventDefault();
      $('.readless').hide ();
      $('#show-this-on-click').slideUp();
      $('.readmore').show();
    }
    // show learnmore
    function learnMoreText(event) {
      event.preventDefault();
      $('#learnmoretext').slideDown();
      $('.learnmore').hide();
    }
    }
    });

  $('#sold').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    mobileFirst: true,
    vertical: false,
    arrows: true,
    variableWidth: false,

    responsive: [{
      breakpoint: 1024,
      settings: {
        vertical: false,
        dots: false,
        arrows: true
      }
    }, {
      breakpoint: 600,
      settings: {
        vertical: false,
        dots: false,
        arrows: false
      }
    }, {
        breakpoint: 300,
        settings: {
          vertical: true,
          dots: true,
          arrows: false
      }
    }]
  });

  var term;
  var apr;
  var amt;
  var mPmt;

  window.onload = function() {
    document.getElementById("sbt").onclick = getValues;
  };

  //use toFixed(2) to set the precision of the mPayment. Use it on an int.
  function getValues()
  {
    term = document.getElementById("trm").value;
    apr = document.getElementById("apr").value;
    amt = document.getElementById("amt").value;
    apr /= 1200;
    term *= 12;
    mPmt = calculatePayment();
    document.getElementById("pmt").value = "$" + mPmt.toFixed(2);
  };

  function calculatePayment()
  {
  	var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
  	return payment;
  }

});
