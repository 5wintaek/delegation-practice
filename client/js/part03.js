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

const swiper = new Swiper(".swiper", {
  autoplay: true,
  loop: true,
  parallax:true,
  speed: 2000,
  pagination: {
    el: ".pagination",
    clickable: true,
    bulletClass: "bullet", // bullet 이라고 클래스를 바꾼것
    bulletActiveClass: "is-active", // active 클래스를 바꾼것
    // 불렛 커스텀 , 안에 이미지를 넣는것 !
    renderBullet: function (index, className) {
      return /* html */ `
      <span class="${className}">
      <img src="./assets/part01/${data[index].src}" alt="${data[index].alt}" />
    </span>
      `;
    },
  },
});
