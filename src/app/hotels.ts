import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export interface IWeather {
    title: string;
    icon: string;
    water: number;
    temperature: number;
}

interface ISocial {
    title: string;
    img: string;
    followers: number;
    following: number;
}

export enum hotelType {
    Hotel = 0,
    Fishing = 1,
    Tours = 2,
    Weather = 3
}

export interface IHotel {
    img: string;
    address: string;
    phone: number;
    weather: IWeather;
    socialInfo: ISocial;
    type: hotelType;
}


const hotels: IHotel[] = [
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Island Maldives',
        'phone': 919850723,
        'weather': {
            'title': 'Luis',
            'icon': 'assets/images/res.jpg',
            'water': 10,
            'temperature': 43
        },
        'socialInfo': {
            'title': 'Nina',
            'img': 'assets/images/b1.jpg',
            'followers': 4835,
            'following': 157
        },
        'type': 0
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Sanctuary Olonana',
        'phone': 826587808,
        'weather': {
            'title': 'Glenda',
            'icon': 'assets/images/res.jpg',
            'water': 11,
            'temperature': 44
        },
        'socialInfo': {
            'title': 'Beth',
            'img': 'assets/images/b1.jpg',
            'followers': 5887,
            'following': 1442
        },
        'type': 1
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Montenegro',
        'phone': 76215742,
        'weather': {
            'title': 'Maria',
            'icon': 'assets/images/res.jpg',
            'water': 15,
            'temperature': 12
        },
        'socialInfo': {
            'title': 'Melanie',
            'img': 'assets/images/b1.jpg',
            'followers': 2703,
            'following': 4750
        },
        'type': 2
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Nicaragua',
        'phone': 104795900,
        'weather': {
            'title': 'Gilbert',
            'icon': 'assets/images/res.jpg',
            'water': 7,
            'temperature': 42
        },
        'socialInfo': {
            'title': 'Vicki',
            'img': 'assets/images/b1.jpg',
            'followers': 9778,
            'following': 5834
        },
        'type': 3
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'South Africa',
        'phone': 420179871,
        'weather': {
            'title': 'Louis',
            'icon': 'assets/images/res.jpg',
            'water': 7,
            'temperature': 43
        },
        'socialInfo': {
            'title': 'Jenny',
            'img': 'assets/images/b1.jpg',
            'followers': 5844,
            'following': 174
        },
        'type': 1
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'China',
        'phone': 723814706,
        'weather': {
            'title': 'Lynn',
            'icon': 'assets/images/res.jpg',
            'water': 2,
            'temperature': 47
        },
        'socialInfo': {
            'title': 'Marvin',
            'img': 'assets/images/b1.jpg',
            'followers': 9946,
            'following': 4594
        },
        'type': 1
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'St. Lucia',
        'phone': 605741111,
        'weather': {
            'title': 'Katharine',
            'icon': 'assets/images/res.jpg',
            'water': 7,
            'temperature': 29
        },
        'socialInfo': {
            'title': 'Emily',
            'img': 'assets/images/b1.jpg',
            'followers': 2714,
            'following': 715
        },
        'type': 2
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Puerto Rico',
        'phone': 303162173,
        'weather': {
            'title': 'Neal',
            'icon': 'assets/images/res.jpg',
            'water': 1,
            'temperature': 17
        },
        'socialInfo': {
            'title': 'Marguerite',
            'img': 'assets/images/b1.jpg',
            'followers': 4544,
            'following': 7249
        },
        'type': 2
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Thailand',
        'phone': 308339194,
        'weather': {
            'title': 'Lynda',
            'icon': 'assets/images/res.jpg',
            'water': 12,
            'temperature': 48
        },
        'socialInfo': {
            'title': 'Suzanne',
            'img': 'assets/images/b1.jpg',
            'followers': 5875,
            'following': 7055
        },
        'type': 3
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'The United Arab Emirates',
        'phone': 34907929,
        'weather': {
            'title': 'Don',
            'icon': 'assets/images/res.jpg',
            'water': 15,
            'temperature': 23
        },
        'socialInfo': {
            'title': 'Dorothy',
            'img': 'assets/images/b1.jpg',
            'followers': 5426,
            'following': 7362
        },
        'type': 0
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'French Polynesia',
        'phone': 89968691,
        'weather': {
            'title': 'Todd',
            'icon': 'assets/images/res.jpg',
            'water': 9,
            'temperature': 22
        },
        'socialInfo': {
            'title': 'Leroy',
            'img': 'assets/images/b1.jpg',
            'followers': 8932,
            'following': 565
        },
        'type': 3
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Philippines',
        'phone': 977674272,
        'weather': {
            'title': 'Mary',
            'icon': 'assets/images/res.jpg',
            'water': 18,
            'temperature': 47
        },
        'socialInfo': {
            'title': 'Russell',
            'img': 'assets/images/b1.jpg',
            'followers': 5571,
            'following': 3672
        },
        'type': 2
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Hermitage Bay, Antigua',
        'phone': 650073582,
        'weather': {
            'title': 'Ashley',
            'icon': 'assets/images/res.jpg',
            'water': 3,
            'temperature': 25
        },
        'socialInfo': {
            'title': 'Hayman Island',
            'img': 'assets/images/b1.jpg',
            'followers': 810,
            'following': 331
        },
        'type': 2
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'New York, USA',
        'phone': 434996187,
        'weather': {
            'title': 'Evelyn',
            'icon': 'assets/images/res.jpg',
            'water': 12,
            'temperature': 23
        },
        'socialInfo': {
            'title': 'Kathy',
            'img': 'assets/images/b1.jpg',
            'followers': 5887,
            'following': 8567
        },
        'type': 0
    },
    {
        'img': 'assets/images/b1.jpg',
        'address': 'Italy',
        'phone': 982195486,
        'weather': {
            'title': 'Sheryl',
            'icon': 'assets/images/res.jpg',
            'water': 17,
            'temperature': 36
        },
        'socialInfo': {
            'title': 'Julian',
            'img': 'assets/images/b1.jpg',
            'followers': 1070,
            'following': 2190
        },
        'type': 0
    },
];

export const hotels$: Observable<IHotel[]> = of(hotels).pipe(delay(1000));
