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

// 네비게이션에게 이벤트를 건다
// 핸들러를 연결한다
// 이벤트 객체에서 타겟을 찾는다.

const navigation = getNode(".navigation");
const visualImage = getNode(".visual img"); // 비쥬얼 안에 있는 이미지 가져옴
// const list = getNodes(".navigation > li");

// console.log(navigation);

function makeArray(arrayLike) {
  return Array.from(arrayLike);
}

// 내가 선택한 li 에게 is-active 클래스 넣어주기
// 내가 선택하지 않은(모든 li) li에게 is-active 클래스 제거하기

function handler(e) {
  let target = e.target.closest("li"); // 가장 가까운 li 를 찾는거
  if (!target) return;
  let list = makeArray(navigation.children);
  let index = attr(target, "data-index");

  if (!target) return;

  // Array.from(list)
  // let arr = [...list]
  // Array.prototype.slice.call(list)

  // item -> [li,li,li,li]
  list.forEach((item) => removeClass(item, "is-active"));

  attr(visualImage, "src", `./assets/part01/visual${index}.jpg`);
  attr(visualImage, "alt", data[index - 1].alt);
  // visualImage.src = `./assets/part01/visual${index}.jpg`
  // -1 한 부분은 index에서 받아온 data-index가 1부터 시작하고, 배열은 0부터 시작하니까

  // console.log(index);

  addClass(target, "is-active");
}
navigation.addEventListener("click", handler);
