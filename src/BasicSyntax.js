export function romanToInteger(str) {
    let result = 0;
    let right;
    let left;

    for (let i = 0; i <= str.length - 1; i++) {
        right = char_to_int(str[i]);
        left = char_to_int(str[i + 1]);

        if (right < left) {
            result -= right;
        } else {
            result += right;
        }
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
function char_to_int(chr) {
    switch (chr) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return -1;
    }
}
