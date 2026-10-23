const name = prompt("Как вас зовут?");
alert(`Привет, ${name}! Давайте посчитаем длительность ваших фильмов.`);
console.log(`Пользователь: ${name}`);

const films_durations = [30, 36, 90, 94, 180, 240, 182];
console.log("Массив длительностей фильмов: ", films_durations);

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function SumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
function filterByDuration(arr, threshold, direction = "more") {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (direction === "more" && arr[i] > threshold) {
            result.push(arr[i]);
        } else if (direction === "less" && arr[i] <= threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}
const longFilms = filterByDuration(films_durations, 120, "more");
const shortFilms = filterByDuration(films_durations, 40, "less");

const totalDuration = SumOfElements(films_durations);
const longSum = SumOfElements(longFilms);
const shortSum = SumOfElements(shortFilms);
const shortCount = shortFilms.length;
const maxDuration = findMax(films_durations);

alert(`Общая длительность просмотра – ${totalDuration} минут, из них ${longSum} минут – полнометражные фильмы`);

console.log(`Короткометражек (≤ 40 минут): ${shortCount}`);
console.log(`Суммарная длительность короткометражек: ${shortSum} минут`);

console.log(`Максимальная длительность: ${maxDuration} минут`);
if (maxDuration >= 180) {
    console.log("Это почти как полноценный театральный спектакль!");
}