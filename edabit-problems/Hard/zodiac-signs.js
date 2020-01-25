// Given a string dob being a date of birth in the U.S. full format, implement a function that returns the related zodiac symbol accordingly to the table above.

const SYMBOLS = ["♈", "♉", "♊", "♋", "♌", "♍",
								 "♎", "♏", "♐", "♑", "♒", "♓"];

const zodiacSymbol = dob => {
	let date = new Date(dob)
	let arr = [date.getMonth(), date.getDate()]
    switch(arr[0]) {
     case 2:
        return (arr[1]>20) ? SYMBOLS[0]:SYMBOLS[11];
        break;
	case 3:
        return (arr[1]>20) ? SYMBOLS[1]:SYMBOLS[0];
        break;
    case 4:
        return (arr[1]>21) ? SYMBOLS[2]:SYMBOLS[1];
        break;
    case 5:
        return (arr[1]>21) ? SYMBOLS[3]:SYMBOLS[2];
        break;
    case 6:
        return (arr[1]>22) ? SYMBOLS[4]:SYMBOLS[3];
        break;
    case 7:
        return (arr[1]>22) ? SYMBOLS[5]:SYMBOLS[4];
        break;
    case 8:
        return (arr[1]>23) ? SYMBOLS[6]:SYMBOLS[5];
        break;
    case 9:
        return (arr[1]>23) ? SYMBOLS[7]:SYMBOLS[6];
        break;
    case 10:
        return (arr[1]>22) ? SYMBOLS[8]:SYMBOLS[7];
        break;
    case 11:
        return (arr[1]>21) ? SYMBOLS[9]:SYMBOLS[8];
        break;
    case 0:
        return (arr[1]>20) ? SYMBOLS[10]:SYMBOLS[9];
        break;
    case 1:
        return (arr[1]>19) ? SYMBOLS[11]:SYMBOLS[10];
        break;
    }
}
