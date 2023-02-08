import $ from "jquery";
const FAQ = {
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
    $(".b-Pricing__faq-questions-item-question").on("click", function() {
      $(this).toggleClass("active");
    });

    $(document).ready(function() {
      $("#question1").click(function() {
        $("#answer1").slideToggle(500);
      });
      $("#question2").click(function() {
        $("#answer2").slideToggle(500);
      });
      $("#question3").click(function() {
        $("#answer3").slideToggle(500);
      });
    });
  },
};
export default FAQ;
