$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src ="icons/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src ="icons/arrow_right.png"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSLide (item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      };

      toggleSLide('.catalog-item__link');
      toggleSLide('.catalog-item__back');

      //Modal

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });

      function valideForms(form){
        $(form).validate({
          rules:{
            name: {
              required: true,
              minlength: 2
            },      
            phone: "required",
            email:{
              required:true,
              email:true
            }
          },
          messages: {
            name: {
              required: "Напишите имя",
              minlength: jQuery.validator.format("Введите не менее {0} символов!")
            },    
            phone: "Напишите номер телефона",
            email: {
              required: "Напишите адрес почты",
              email: "Неверно заполнен адрес"
            }
          }
        });
      };
      valideForms ('#consultation-form');
      valideForms ('#order form');
      valideForms ('#consultation form');

      $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
          return;
        }

        $.ajax({
          type: "POST",
          url:"mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset');
        });
        return false;
      });

      //Smooth skroll and pageup

      $(window).scroll(function() {
        if ($(this).scrollTop()>1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
      });

      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });

      new WOW().init();
  });