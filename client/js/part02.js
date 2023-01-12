const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// TODO 여기서는 index로 뽑아온거니깐 0 1 2 3 4 , data -1 을 사용
// $(".navigation > li").click(function (e) {
//   // 자체적으로 li 를 배열을 만들고
//   e.preventDefault(); // 기본동작을 막아주는것
//   let index = $(this).index(); // this = li

//   $(".navigation > li").removeClass("is-active");

//   $(this).addClass("is-active");

//   // -1 을 해주지 않은 이유는 자체적으로 li 배열을 돌리서이다.
//   $(".visual img").attr({
//     src: `./assets/part01/${data[index].src}`,
//     alt: data[index].alt,
//   });
//   //   $(".visual img").attr("src", `./assets/part01/${data[index].src}`);
// });

// TODO 밑에껀 data-index 를 뽑아온거니깐 1 2 3 4 , data-1 을 쓰지 않음
// ? 부모한테 event 를 걸었음
// on 이라는 매서드는 addevent
$(".navigation").on("click", "li", function (e) {
  e.preventDefault();

  let index = $(this).attr("data-index");

  $(".navigation > li").removeClass("is-active");
  $(this).addClass("is-active");

  $(".visual img").attr({
    src: `./assets/part01/${data[index - 1].src}`,
    alt: data[index - 1].alt,
  });
});
