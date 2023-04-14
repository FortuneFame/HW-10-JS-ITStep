// --------------------------------- Task-1 ---------------------------------

class PrintMachine {
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    };
    print(text) {
        let result = "<h2 style = \"font-size:" + this.fontSize + "; font-family:" + this.fontFamily + ";color:" + this.color + "\">" + text + "</h2>";
        return result;
    };
};
let loremIpsum = new PrintMachine('20px', 'grey', '\'Montserrat\',sans-serif');
result1.innerHTML += loremIpsum.print("Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, iure repellendus error voluptas ad debitis quibusdam.Libero earum, unde architecto laboriosam cumque vitae quod odio cum ipsa necessitatibus! Eos, libero")

// --------------------------------- Task-2 ---------------------------------

class News {
    constructor(header, text, tegs = [], date) {
        this.header = header;
        this.text = text;
        this.tegs = tegs;
        this.date = new Date(date);
    };
    print() {
        let time = '';
        let today = new Date();
        let delta = Math.floor((today - this.date) / (24 * 60 * 60 * 1000));
        if (delta < 1) time = 'Today';
        else if (delta < 7 && delta >= 1) time = delta + ' day(s) ago';
        else time = this.date.toLocaleTimeString();
        let result = "<div class = \"news\"><h3>" + this.header + "</h3><p class = \"day\">" + time + "</p><p class = \"newsText\">" + this.text + "</p><p class =\"tegs\">" + this.tegs + "</p/></div>";
        return result;
    };
};
let someNews = new News('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Quis obcaecati esse sed est, amet culpa maiores aliquam iusto sint laboriosam magnam incidunt laborum autem quia vel cupiditate. Dolore, quidem ipsam.', ['#lorem', '#dolore', '#today'], '2023-04-14');

result2.innerHTML += someNews.print();

// --------------------------------- Task-1 ---------------------------------

class NewsLine {
    constructor(news = []) {
        this.news = news;
    };
    showAmount() {
        return this.news.length;
    };
    print() {
        let time = '';
        let today = new Date();
        let result = '';
        for (let temp of this.news) {
            result += temp.print();
        };
        return result;
    };
    addNews(header, text, tegs = [], date) {
        let someNews2 = new News(header, text, tegs, date);
        this.news.push(someNews2);
        return someNews2;
    };
    deleteNews(header) {
        for (let temp of this.news) {
            let index = this.news.indexOf(temp);
            if (this.news[index].header === header) {
                this.news.splice(index, 1);
            };
        };
    };
    sortNews() {
        function compareDate(a, b) {
            if (a.date < b.date) return 1;
            else if (b.date < a.date) return -1;
            else return 0;
        };
        this.news.sort(compareDate);
        let time = '';
        let today = new Date();
        let result = '';
        for (let temp of this.news) {
            result += temp.print();
        };
        return result;
    };
    findNews(teg) {
        let newsList = [];
        
        for (let tempN of this.news) {
            for (let tempT of tempN.tegs) {
                if (tempT === teg) {
                    newsList.push(tempN);
                    break;
                };
            };
        }
                let time = '';
                let today = new Date();
                let result = '';
                for (let temp of newsList) {
                    result += temp.print();
                }
                return result;
            };
    };
let newsLine = new NewsLine([someNews]);

newsLine.addNews('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'Maxime quia adipisci repellat eius iure fuga inventore mollitia consectetur doloribus tempore architecto amet quisquam quo, facilis iusto ab perspiciatis tempora deleniti?', ['#doloribus', '#facilis', '#news'], '2023-04-10');
newsLine.addNews('Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Felis eget velit aliquet sagittis id consectetur purus', ['#perspiciatis', '#lorem', '#dolor'], '2023-04-13');

result3.innerHTML += '<div class = \"block\">' + newsLine.print() + '</div>';
result3.innerHTML += '<p class = \"res\">Всего' + ' ' + newsLine.showAmount() + ' ' + 'новости </p>';
result3.innerHTML += '<hr align="center" width="90%" color="#212121">'

newsLine.deleteNews('Lorem ipsum dolor sit amet consectetur adipisicing elit.')

result3.innerHTML += '<div class = \"block\">' + newsLine.print() + '</div>';
result3.innerHTML += '<p class = \"res\">После удаления осталось' + ' ' + newsLine.showAmount() + ' ' + 'новости </p>';
result3.innerHTML += '<hr align="center" width="90%" color="#212121">'

newsLine.addNews('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Dicta temporibus nemo praesentium, et, vel distinctio repudiandae tempore unde quae illum excepturi eligendi. Quasi numquam aliquid tempora iusto nulla necessitatibus quas.', ['#doloribus', '#facilis', '#news'], '2023-04-09');
newsLine.addNews('Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus.', ['#incididunt', '#labore', '#news'], '2023-04-11')

result3.innerHTML += '<h3>Сортировка по дате</h3>' + '<div class = \"blockAfterSort\">' + newsLine.sortNews() + '</div>';
result3.innerHTML += '<p class = \"res\">Итого' + ' ' + newsLine.showAmount() + ' ' + 'новости </p>';
result3.innerHTML += '<hr align="center" width="90%" color="#212121">'

result3.innerHTML += '<h3>Поиск по тегу</h3>' + '<div class = \"blockAfterSort\">' + newsLine.findNews('#doloribus') + '</div>';
result3.innerHTML += '<hr align="center" width="90%" color="#212121">'


