function kick() {
  let hight = Math.random() * 480;
  let left = document.querySelector(".right") ? 25 : 978;

  $(".ball").animate({ left: left, top: hight }, 2000, function () {
    $(".ball").toggleClass("right");
    if(170 < hight & hight < 313){
      alert('Гол!!!');
      $(".ball").animate({ left: 501 , top: 240 }, 200 )
    }
  });
}
