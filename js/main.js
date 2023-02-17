const posts = 25;
const comments = [
    'Загалом все непогано. Але не всі.',
    'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
    'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
    'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
    'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
];

const descriptions = [
    'перший опис під фото',
    'другий опис під фото',
    'третій опис під фото',
    'четвертий опис під фото',
    'п`ятий опис під фото',
];

const names = [
    'Олександр',
    'Петро',
    'Олена',
    'Олег',
    'Вікторія',
];

function getRandomNum(min,max){ 
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
};

function getPost(id) {
    return {
        id: id,
        url:  './photos/' + getRandomNum(1,25) + '.jpg',
        descr: descriptions[getRandomNum(1, descriptions.length)],
        likes: getRandomNum(15,200),
    }
}

function getComments(id){
    return{
        id: id,
        avatar: `img/${getRandomNum(1,6)}.svg`,
        message: comments[getRandomNum(1, comments.length)],
        name: names[getRandomNum(1, names.length)],
    }
}

console.log(getPost(2));
console.log(getComments(4));