const quiz = [
  {
    question:'2014年箱根駅伝の優勝校は？',
    answer:[
      '山梨学院大学',
      '東洋大学',
      '駒沢大学',
      '早稲田大学'
    ],
    correct:'東洋大学'
  },
  {
    question:'2002年箱根駅伝の優勝校は？',
    answer:[
      '山梨学院大学',
      '東洋大学',
      '駒沢大学',
      '早稲田大学'
    ],
    correct:'駒沢大学'
  },{
    question:'1995年箱根駅伝の優勝校は？',
    answer:[
      '山梨学院大学',
      '東洋大学',
      '駒沢大学',
      '早稲田大学'
    ],
    correct:'山梨学院大学'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setUpQuiz = () => {
  console.log(document.getElementById('js-question').textContent = quiz[quizIndex].question);
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
}
setUpQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }
  // 正解したらつぎの問題へ
  quizIndex++;

  if(quizIndex < quizLength){
    setUpQuiz();
  }else{
    window.alert('終了!あなたの正解数は'+ score + '/' + quizLength + 'です！');
  }
}

let handleIndex = 0;
while(handleIndex < buttonLength){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
