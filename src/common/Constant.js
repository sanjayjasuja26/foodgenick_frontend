export const constants = {
  //  URLLOCAL: "http://192.168.1.57:2003/api",
  URLLOCAL:'https://foodgienic.com/api'
};

export var carouselSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, 
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, 
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, 
      }
    }
  ]
};