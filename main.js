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
        else if (delta < 7 && delta >= 1) time = delta + 'day(s) ago';
        else time = this.date.toLocaleTimeString();
        let result = "<div><h3>" + this.header + "</h3><p>" + time + "</p><p>" + this.text + "</p><p>" + this.tegs.join(' ') + "</p/></div>";
        return result;
    };
};
let someNews = new News('Lorem ipsum dolor sit amet consectetur, adipisicing elit.', ' Quis obcaecati esse sed est, amet culpa maiores aliquam iusto sint laboriosam magnam incidunt laborum autem quia vel cupiditate. Dolore, quidem ipsam.', ['#lorem', '#news', '#today'], '2023-04-13');

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
        return result
    };
    addNews(header, text, tegs = [], date) {
        let someNews2 = new News(header, text, tegs, date);
        this.news.push(someNews2);
        return someNews2;
    };
    deleteNews(header) {
        for (let temp of this.news) {
            let index = this.news.indexOf(temp);
            if (this.news[index].header == header) {
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
                if (tempT == teg) {
                    newsList.push(tempN);
                    break;
                };
            };
        };
        let time = '';
        let today = new Date();
        let result = '';
        for (let temp of newsList()) {
            result += temp.print();
        }
        return result;
    };
};
let newsLine = new NewsLine([someNews]);
