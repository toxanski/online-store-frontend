// вставка пробелов и знака рубля
export function convertPriceRu(price: number): string {
    return price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        .concat(' ₽');
}