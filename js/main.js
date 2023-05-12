
const photosCount = 25;

const LIKES = {
    min: 15,
    max: 201,
}

const AVATAR = {
    min: 1,
    max: 7,
}

const ID = {
    min: 100,
    max: 900,
}

const COMMENT = {
    min: 1,
    max: 30,
}
 const photo = new  Array(photosCount).fill(null).map((e, index) => getPhoto(index));

function getRandomNumbers(min, max){
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function getRandomDescr(){
    const descr = ['перший опис під фото',     'другий опис під фото', 'третій опис під фото', 'четвертий опис під фото', 'п`ятий опис під фото',];
    const randDescr = getRandomNumbers(0, descr.length);
    return descr[randDescr];
}


function getPhoto(index) {
    return {
        id: +index + 1,
        url:  `photos/${index + 1}.jpg`,
        descr: getRandomDescr(),
        likes: getRandomNumbers(LIKES.min, LIKES.max) 
        
    }
}

const commentsCount = 30;
const comments = new Array(commentsCount).fill(null).map((e, index) => getComments(index));

function getRandomNames(){
    const names = ['Олександр','Петро','Олена','Олег','Вікторія'];
    const randName = getRandomNumbers(0, names.length)
    return names[randName];
};

function getRandomComments(){
    const messages = [
        'Загалом все непогано. Але не всі.',
        'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
        'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
        'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
        'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
    ];

    const randMessages = getRandomNumbers(0,messages.length);
    return messages[randMessages];
};

function getComments(index){
    return{
        id: index,
        avatar: `img/avatar-${getRandomNumbers(AVATAR.min, AVATAR.max)}.svg`,
        message: getRandomComments(),
        name: getRandomNames(),
        comment: getRandomNumbers(COMMENT.min, COMMENT.max),
    }
};


  
//Picture

const pictureTemplate = document.querySelector('#picture');
const pictureImg = pictureTemplate.content.querySelector('.picture__img');
const pictures = document.querySelector('.pictures');
const pictureComments = pictureTemplate.content.querySelector('.picture__comments');
const pictureLikes = pictureTemplate.content.querySelector('.picture__likes');



  const pictureInfo = photo.map((el, index) => getPictures(index));

  function getPictures(index){
    pictureImg.src = photo[index].url;
    pictureComments.textContent = comments[index].comment;
    pictureLikes.textContent = photo[index].likes;
    photo[index].comments = comments.filter(comment => comment.id === index);
    const clone = pictureTemplate.content.cloneNode(true);
    pictures.appendChild(clone);
  }

//bigImg

const bigPicture = document.querySelector(".big-picture");
const bigPictureImage = bigPicture.querySelector(".big-picture__img img");
const closeButton = document.querySelector(".big-picture__cancel")
const picturesContainer = document.querySelector('.pictures');

const bigPictureSocial = bigPicture.querySelector(".big-picture__social");
const bigPictureSocialDescription = bigPictureSocial.querySelector(".social__caption")
const bigPictureSocialReaction = bigPictureSocial.querySelector(".social__likes ");
const bigPictureSocialLikes = bigPictureSocialReaction.querySelector(".likes-count");
const bigPictureSocialComments = bigPictureSocial.querySelector(".social__comment-count");
const bigPictureSocialNumberofComments = bigPictureSocialComments.querySelector(".comments-count");


picturesContainer.addEventListener('click', (event) => {
    const thumbnailImages = document.querySelectorAll('.picture__img');

    thumbnailImages.forEach((image, index) => {
      image.addEventListener('click', () => {
        showBigPicture(photo[index]);
      });
    });
  });


  function showBigPicture(picture) {
    bigPicture.classList.remove('hidden');
    bigPictureImage.src = picture.url;
    bigPictureSocialLikes.textContent = picture.likes;
    bigPictureSocialNumberofComments.textContent = picture.comments.length;
  
    const commentList = bigPictureSocial.querySelector('.social__comments');
    commentList.innerHTML = '';
  
    picture.comments.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.classList.add('social__comment');
      commentItem.innerHTML = `
        <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
        <p class="social__text">${comment.message}</p>
      `;
      commentList.appendChild(commentItem);
    });
  }






 closeButton.addEventListener('click', closeBigImg)
    function closeBigImg(){
        bigPicture.classList.add('hidden');
    }


    function handleKeyDown(event) {
        if (event.key === 'Escape') {
          closeBigImg();
        }
      }
      document.addEventListener('keydown', handleKeyDown);

    

