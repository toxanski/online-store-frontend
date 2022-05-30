/* (param: 5, ['отзыв', 'отзыва', 'отзывов']) // 5 отзывов */
export function declinationOfNum(num: number, titles: [string, string, string]): string {
    // if num 0 => variant 2, num 1 => variant 0, num 2 => 1...
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[((num % 100) > 4 && (num % 100) < 20) ? 2 : cases[(num % 10 < 5) ? num : 5]];
}