import $ from "jquery";
const Pricing = {
  settings: {
    target: ".b-Pricing__faq-questions-item-question",
    question: "#question1",
    answer: "#answer1",
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings, this.afterInit.bind(this));
    }
  },
  afterInit() {
    this.bindEvents();
  },
  catchDOM(settings, callback) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      question: target.find(settings.question),
      answer: target.find(settings.answer),
    };
    callback();
  },
  bindEvents() {
    $(document).ready(function() {
      $(".b-Pricing__buttons-button").click(function() {
        $(".b-Pricing__price-right-item-middle-currency-number").each(function() {
          let currentPrice = parseFloat($(this).text().slice(1));
          if (currentPrice >= 230) {
						$(this).removeClass("active");
						$(".b-Pricing__buttons-button").removeClass("active");
            return;
          }
          let newPrice = (currentPrice + 225).toFixed(0);
          $(this).text("$" + newPrice);
					$(".b-Pricing__price-right-item-middle-currency-number").removeClass("active");
					$(this).addClass("active");
					$(".b-Pricing__buttons-button").addClass("active");
					$(".b-Pricing__buttons-button--white").removeClass("active");

        });
      });

      $(".b-Pricing__buttons-button--white").click(function() {
        $(".b-Pricing__price-right-item-middle-currency-number").each(function() {
          let currentPrice = parseFloat($(this).text().slice(1));
          if (currentPrice <= 230) {
						$(this).removeClass("active");
            $(".b-Pricing__buttons-button--white").removeClass("active");
            return;
          }
          let newPrice = (currentPrice - 225).toFixed(0);
          $(this).text("$" + newPrice);
					$(".b-Pricing__price-right-item-middle-currency-number").removeClass("active");
          $(this).addClass("active");
          $(".b-Pricing__buttons-button--white").addClass("active");
          $(".b-Pricing__buttons-button").removeClass("active");
        });
      });
    });
  },
};
export default Pricing;
