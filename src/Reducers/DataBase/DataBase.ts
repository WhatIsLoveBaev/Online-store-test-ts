/* Смартфон */
import phone from './imgExamples/phone.jpg'
import monitor from './imgExamples/monitor.jpg'
import tablet from './imgExamples/tablet.jpg'
import cameras from './imgExamples/camera.jpg'
import keyboard from './imgExamples/keyboard.jpg'

export const imagesForMobile: any = [phone, monitor, tablet, cameras, keyboard]

export interface DataBaseType { [index: string]: DBStateElementType } 

export interface DBStateElementType {
  examplesList: Array<examplesListType>,
  examplesForContent: examplesForContent,
  productListArray: Array<productListArrayType>,
  saleGroup: string,
  productMakersList: Array<string>,
  idGroup: string,
  engGroupName: string
}

interface examplesForContent {
  img?: any
}
interface examplesListType {
  example: string,
  exampleMake: string,
  id: string
}
export interface productListArrayType {
  name: string,
  make: string,
  shortDescription: Array<string>,
  description: Array<any>,
  price: string,
  img: string,
  id: string,
  sale: string,
  groupEng: string
}
export const defaultProductList = {
  name: '',
  make: '',
  shortDescription: [''],
  description: [],
  price: '',
  img: '',
  id: '',
  sale: '',
  groupEng: ''
}


const DB: DataBaseType = {
  'Телефоны' :  {
    examplesList: [
      {
        example: 'https://spb-mobil.ru/wp-content/uploads/2018/09/iphone-xr-black-720x720.png',
        exampleMake: 'Apple',
        id: 'appleEx'
      },
      {
        example: 'https://spb-mobil.ru/wp-content/uploads/2018/05/galaxy-s9-front-720x720.png',
        exampleMake: 'Samsung',
        id: 'samsungEx'
      }
    ],
    examplesForContent: {img: phone},
    productListArray: [
      {
        name: 'Apple iPhone Xr 64GB',
        make: 'Apple',
        shortDescription: ['смартфон с iOS 12', 'поддержка двух SIM-карт (nano SIM+eSIM)', 'экран 6.1", разрешение 1792x828', 'камера 12 МП, автофокус', 'память 64 ГБ, без слота для карт памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 3 ГБ', 'вес 194 г, ШxВxТ 75.70x150.90x8.30 мм'],
        description: [],
        price: '49 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1244413/img_id6063597382562623069.jpeg/orig',
        id: 'Axr64',
        sale: '15',
        groupEng: 'phones' 
      },
      {
        name: 'Apple iPhone 7 32GB',
        make: 'Apple',
        shortDescription: ['смартфон с iOS 10', 'экран 4.7", разрешение 1334x750', 'камера 12 МП, автофокус', 'память 32 ГБ, без слота для карт памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 2 ГБ', 'аккумулятор 1960 мА⋅ч', 'вес 138 г, ШxВxТ 67.10x138.30x7.10 мм'],
        description: [],
        price: '26 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/466729/img_id5074426843449101979.jpeg/orig',
        id: 'A732',
        sale: '7',
        groupEng: 'phones' 
      },
      {
        name: 'Apple iPhone 11 64GB',
        make: 'Apple',
        shortDescription: ['смартфон с iOS 13', 'поддержка двух SIM-карт (nano SIM+eSIM)', 'экран 6.1", разрешение 1792x828', 'двойная камера 12 МП/12 МП, автофокус', 'память 64 ГБ, без слота для карт памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'вес 194 г, ШxВxТ 75.70x150.90x8.30 мм'],
        description: [],
        price: '56 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1927699/img_id5889932510977902936.jpeg/orig',
        id: 'A1164',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Apple iPhone X 64GB',
        make: 'Apple',
        shortDescription: ['смартфон с iOS 11', 'экран 5.8", разрешение 2436x1125', 'двойная камера 12 МП/12 МП, автофокус', 'память 64 ГБ, без слота для карт памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 3 ГБ', 'вес 174 г, ШxВxТ 70.90x143.60x7.70 мм'],
        description: [],
        price: '50 999',
        img: 'https://avatars.mds.yandex.net/get-mpic/200316/img_id270362589725797013.png/orig',
        id: 'Ax64',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Apple iPhone SE 32GB',
        make: 'Apple',
        shortDescription: ['смартфон с iOS 10', 'экран 4", разрешение 1136x640', 'камера 12 МП, автофокус', 'память 32 ГБ, без слота для карт памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 2 ГБ', 'аккумулятор 1624 мА⋅ч', 'вес 113 г, ШxВxТ 58.60x123.80x7.60 мм'],
        description: [],
        price: '17 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1521939/img_id5065720375753535966.jpeg/orig',
        id: 'Ase32',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Samsung Galaxy S10 8/128GB',
        make: 'Samsung',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.1", разрешение 3040x1440', 'три камеры 16 МП/12 МП/12 МП, автофокус', 'память 128 ГБ, слот для карты памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 8 ГБ', 'аккумулятор 3400 мА⋅ч', 'вес 157 г, ШxВxТ 70.40x149.90x7.80 мм'],
        description: [],
        price: '49 900',
        img: 'https://avatars.mds.yandex.net/get-mpic/1669769/img_id834434481350965181.jpeg/orig',
        id: 'Ss10',
        sale: '10',
        groupEng: 'phones' 
      },
      {
        name: 'Samsung Galaxy A40 64GB',
        make: 'Samsung',
        shortDescription: ['смартфон на платформе Android', 'поддержка двух SIM-карт', 'экран 5.9", разрешение 2340x1080', 'двойная камера 16 МП/5 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 4 ГБ', 'аккумулятор 3100 мА⋅ч', 'вес 140 г, ШxВxТ 69.20x144.40x7.90 мм'],
        description: [],
        price: '15 950',
        img: 'https://avatars.mds.yandex.net/get-mpic/1600461/img_id4502468476768489693.jpeg/orig',
        id: 'Sa40',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Samsung Galaxy Note 10 8/256GB',
        make: 'Samsung',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.3", разрешение 2280x1080', 'три камеры 12 МП/16 МП/12 МП, автофокус', 'память 256 ГБ, без слота для карт памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 8 ГБ', 'аккумулятор 3500 мА⋅ч', 'вес 168 г, ШxВxТ 71.80x151x7.90 мм'],
        description: [],
        price: '52 890',
        img: 'https://avatars.mds.yandex.net/get-mpic/1715800/img_id3519663128088714780.jpeg/orig',
        id: 'Sn10',
        sale: '30',
        groupEng: 'phones' 
      },
      {
        name: 'Samsung Galaxy S9 Plus 64GB',
        make: 'Samsung',
        shortDescription: ['смартфон с Android 8.0', 'поддержка двух SIM-карт', 'экран 6.2", разрешение 2960x1440', 'двойная камера 12 МП/12 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 6 ГБ', 'аккумулятор 3500 мА⋅ч', 'вес 189 г, ШxВxТ 73.80x158.10x8.50 мм'],
        description: [],
        price: '29 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/397397/img_id7289548544074510057.jpeg/orig',
        id: 'S9p',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Samsung Galaxy M21',
        make: 'Samsung',
        shortDescription: ['смартфон на платформе Android', 'поддержка двух SIM-карт', 'экран 6.4", разрешение 2340x1080', 'три камеры 48 МП/8 МП/5 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 4 ГБ', 'аккумулятор 6000 мА⋅ч', 'вес 188 г, ШxВxТ 75.10x159x8.90 мм'],
        description: [],
        price: '15 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1901647/img_id8566197823464743507.jpeg/orig',
        id: 'Sgm21',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Xiaomi Redmi Note 8 Pro 6/64GB',
        make: 'Xiaomi',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.53", разрешение 2340x1080', 'четыре камеры 64 МП/8 МП/2 МП/2 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 6 ГБ', 'аккумулятор 4500 мА⋅ч', 'вес 200 г, ШxВxТ 76.40x161.35x8.79 мм'],
        description: [],
        price: '17 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1582909/img_id3520966301704179595.jpeg/orig',
        id: 'Xn8p',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Xiaomi Mi 9T 6/64GB',
        make: 'Xiaomi',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.39", разрешение 2340x1080', 'три камеры 48 МП/8 МП/13 МП, автофокус', 'память 64 ГБ, без слота для карт памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 6 ГБ', 'аккумулятор 4000 мА⋅ч', 'вес 191 г, ШxВxТ 74.30x156.70x8.80 мм'],
        description: [],
        price: '27 754',
        img: 'https://avatars.mds.yandex.net/get-mpic/1886132/img_id9111063707314779258.jpeg/orig',
        id: 'X9t',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Xiaomi Mi Note 10 6/128GB',
        make: 'Xiaomi',
        shortDescription: ['смартфон на платформе Android', 'поддержка двух SIM-карт', 'экран 6.47", разрешение 2340x1080', 'пять камер 108 МП/12 МП/20 МП/5 МП, автофокус', 'память 128 ГБ, без слота для карт памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 6 ГБ', 'аккумулятор 5260 мА⋅ч', 'вес 208 г, ШxВxТ 74.20x157.80x9.67 мм'],
        description: [],
        price: '39 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1924580/img_id347356219384600702.png/orig',
        id: 'Xn10',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Xiaomi Mi A3 4/64GB Android One',
        make: 'Xiaomi',
        shortDescription: ['смартфон на платформе Android', 'поддержка двух SIM-карт', 'экран 6.09", разрешение 1560x720', 'три камеры 48 МП/8 МП/2 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth', 'объем оперативной памяти 4 ГБ', 'аккумулятор 4030 мА⋅ч', 'вес 174 г, ШxВxТ 71.85x153.48x8.48 мм'],
        description: [],
        price: '12 700',
        img: 'https://avatars.mds.yandex.net/get-mpic/1568604/img_id4352299876945858503.jpeg/orig',
        id: 'Xa3',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'Xiaomi Redmi Note 7 4/64GB',
        make: 'Xiaomi',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.3", разрешение 2340x1080', 'двойная камера 48 МП/5 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth', 'объем оперативной памяти 4 ГБ', 'аккумулятор 4000 мА⋅ч', 'вес 186 г, ШxВxТ 75.21x159.21x8.10 мм'],
        description: [],
        price: '9 095',
        img: 'https://avatars.mds.yandex.net/get-mpic/1642819/img_id6339502437993382366.jpeg/orig',
        id: 'Xn7',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'HUAWEI Nova 5T',
        make: 'Huawei',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.26", разрешение 2340x1080', 'четыре камеры 48 МП/16 МП/2 МП/2 МП, автофокус', 'память 128 ГБ, без слота для карт памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 6 ГБ', 'аккумулятор 3750 мА⋅ч', 'ШxВxТ 73.97x154.25x7.87 мм'],
        description: [],
        price: '19 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1713519/img_id1274997894041190083.jpeg/orig',
        id: 'Hn5t',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'HUAWEI P30 lite',
        make: 'Huawei',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.15", разрешение 2312x1080', 'три камеры 24 МП/8 МП/2 МП, автофокус', 'память 128 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 4 ГБ', 'аккумулятор 3340 мА⋅ч', 'вес 159 г, ШxВxТ 72.70x152.90x7.40 мм'],
        description: [],
        price: '12 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1767151/img_id9077699671935262172.jpeg/orig',
        id: 'Hp30',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'HUAWEI P30 Pro 8/256GB',
        make: 'Huawei',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.47", разрешение 2340x1080', 'четыре камеры 40 МП/20 МП/8 МП, автофокус', 'память 256 ГБ, слот для карты памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth, NFC', 'объем оперативной памяти 8 ГБ', 'аккумулятор 4200 мА⋅ч', 'вес 192 г, ШxВxТ 73.40x158x8.41 мм'],
        description: [],
        price: '45 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1602935/img_id2703560629284691572.jpeg/orig',
        id: 'Hp30p',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'HUAWEI Y6s 3/64GB',
        make: 'Huawei',
        shortDescription: ['смартфон с Android 9.0', 'поддержка двух SIM-карт', 'экран 6.09", разрешение 1560x720', 'камера 13 МП, автофокус', 'память 64 ГБ, слот для карты памяти', '3G, 4G LTE, Wi-Fi, Bluetooth', 'объем оперативной памяти 3 ГБ', 'аккумулятор 3020 мА⋅ч', 'вес 150 г, ШxВxТ 73.50x156.28x8 мм'],
        description: [],
        price: '8 290',
        img: 'https://avatars.mds.yandex.net/get-mpic/1928572/img_id7164988879216888591.jpeg/orig',
        id: 'Hy6s',
        sale: '',
        groupEng: 'phones' 
      },
      {
        name: 'HUAWEI Y7',
        make: 'Huawei',
        shortDescription: ['смартфон с Android 8.2', 'поддержка двух SIM-карт', 'экран 6.26", разрешение 1520x720', 'двойная камера 13 МП/2 МП, автофокус', 'память 32 ГБ, слот для карты памяти', '3G, 4G LTE, LTE-A, Wi-Fi, Bluetooth', 'объем оперативной памяти 3 ГБ', 'аккумулятор 4000 мА⋅ч', 'вес 168 г, ШxВxТ 76.91x158.92x8.10 мм'],
        description: [],
        price: '8 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1571888/img_id5910886578012610634.jpeg/orig',
        id: 'Hy7',
        sale: '',
        groupEng: 'phones'
      }
  
    ],
    saleGroup: 'true',
    productMakersList: ['Apple', 'Samsung', 'Xiaomi', 'Huawei'],
    idGroup: 'PhonesIdentifier',
    engGroupName: 'phones'
  },
  'Мониторы' : {
    examplesList: [
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/195452/img_id3464414613261286689.jpeg/orig',
        exampleMake: 'Lg',
        id: 'LgMonitorex123'
      },
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/200316/img_id8125285104942622969/orig',
        exampleMake: 'Samsung',
        id: 'SamMonEx141'
      }
    ],
    examplesForContent: {img: monitor},
    productListArray: [
      {
        name: 'Монитор LG 29UM69G 29"',
        make: 'Lg',
        shortDescription: ['игровой монитор c IPS матрицей', 'разрешение 2560x1080 (21:9)', 'частота обновления 75 Гц', 'время отклика 5 мс', 'контрастность 1000:1', 'яркость 250 кд/м²', 'углы обзора: по горизонтали 178°, по вертикали 178°', 'подключение: HDMI 1.4, DisplayPort 1.2, USB (видео), выход на наушники, USB Type-C', 'встроенные колонки', 'поддержка FreeSync'],
        description: [],
        price: '18 190',
        img: 'https://avatars.mds.yandex.net/get-mpic/195452/img_id3464414613261286689.jpeg/orig',
        id: 'Lg29um',
        sale: '',
        groupEng: 'monitors'
    }, 
    {
      name: 'Монитор Xiaomi Mi Display 23.8"',
      make: 'Xiaomi',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 1920x1080 (16:9)',
        'время отклика 6 мс',
        'контрастность 1000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 2.0'
      ],
      description: [],
      price: '11 990',
      img: 'https://avatars.mds.yandex.net/get-mpic/1578067/img_id3867130228799253406.jpeg/orig',
      id: 'XiaMiDisp23',
      sale: '5',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор Xiaomi Mi Surface Display 34"',
      make: 'Xiaomi',
      shortDescription: [
        'игровой монитор c *VA матрицей',
        'разрешение 3440x1440 (21:9)',
        'частота обновления 144 Гц',
        'время отклика 4 мс',
        'изогнутый экран',
        'контрастность 3000:1',
        'яркость 300 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 2.0 x2, DisplayPort 1.4, x2, выход на наушники',
        'подсветка без мерцания',
        'поддержка FreeSync'
      ],
      description: [],
      price: '33 448 ',
      img: 'https://avatars.mds.yandex.net/get-mpic/1924204/img_id123451859199598186.jpeg/orig',
      id: 'XiaMiSurfDisp34',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор Samsung C24F390FHI 23.5"',
      make: 'Samsung',
      shortDescription: [
        'тип матрицы экрана: *VA',
        'разрешение 1920x1080 (16:9)',
        'частота обновления 72 Гц',
        'время отклика 4 мс',
        'изогнутый экран',
        'контрастность 3000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI, VGA (D-Sub), выход на наушники',
        'подсветка без мерцания',
        'поддержка FreeSync'
      ],
      description: [],
      price: '8 990',
      img: 'https://avatars.mds.yandex.net/get-mpic/200316/img_id8125285104942622969/orig',
      id: 'SamC24F390FHI',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор DELL P2418D 23.8"',
      make: 'DELL',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 2560x1440 (16:9)',
        'время отклика 5 мс',
        'контрастность 1000:1',
        'яркость 300 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 1.4, DisplayPort 1.2, USB Type A x4, USB Type B'
      ],
      description: [],
      price: '19 990',
      img: 'https://avatars.mds.yandex.net/get-mpic/1365202/img_id3804453179966895742.jpeg/orig',
      id: 'DELLP2418D',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор Philips 243V7QJABF 23.8"',
      make: 'Philips',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 1920x1080 (16:9)',
        'частота обновления 76 Гц',
        'время отклика 5 мс',
        'контрастность 1000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI, DisplayPort 1.2, VGA (D-Sub), вход аудио стерео, выход на наушники',
        'подсветка без мерцания',
        'встроенные колонки'
      ],
      description: [],
      price: '7 910',
      img: 'https://avatars.mds.yandex.net/get-mpic/372220/img_id4657533276881926641.jpeg/orig',
      id: 'Philips243V7QJABF',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор Samsung S24R350FHI 24"',
      make: 'Samsung',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 1920x1080 (16:9)',
        'время отклика 5 мс',
        'контрастность 1000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 1.4, VGA (D-Sub)',
        'подсветка без мерцания'
      ],
      description: [],
      price: '9 499',
      img: 'https://avatars.mds.yandex.net/get-mpic/1545401/img_id2891457935128919538.jpeg/orig',
      id: 'SamsungS24R350FHI',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор AOC C24G1 24"',
      make: 'AOC',
      shortDescription: [
        'игровой монитор c *VA матрицей',
        'разрешение 1920x1080 (16:9)',
        'частота обновления 146 Гц',
        'время отклика 4 мс',
        'изогнутый экран',
        'контрастность 3000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 1.4 x2, DisplayPort 1.2, VGA (D-Sub), выход на наушники',
        'подсветка без мерцания',
        'поддержка FreeSync'
      ],
      description: [],
      price: '15 370',
      img: 'https://avatars.mds.yandex.net/get-mpic/1365202/img_id2437569108243060550.jpeg/orig',
      id: 'AOCC24G1',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор Samsung C24RG50FQI 23.5"',
      make: 'Samsung',
      shortDescription: [
        'игровой монитор c *VA матрицей',
        'разрешение 1920x1080 (16:9)',
        'частота обновления 144 Гц',
        'время отклика 4 мс',
        'изогнутый экран',
        'контрастность 3000:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 1.4 x2, DisplayPort 1.2, выход на наушники',
        'подсветка без мерцания',
        'поддержка FreeSync'
      ],
      description: [],
      price: '13 990',
      img: 'https://avatars.mds.yandex.net/get-mpic/1673800/img_id385230675298911156.jpeg/orig',
      id: 'SamsungC24RG50FQI',
      sale: '',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор AOC Q3279VWFD8 31.5"',
      make: 'AOC',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 2560x1440 (16:9)',
        'частота обновления 75 Гц',
        'время отклика 5 мс',
        'контрастность 1200:1',
        'яркость 250 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: DVI-D (HDCP), HDMI 1.4, DisplayPort 1.2, VGA (D-Sub), выход на наушники',
        'подсветка без мерцания',
        'поддержка FreeSync'
      ],
      description: [],
      price: '16 208',
      img: 'https://avatars.mds.yandex.net/get-mpic/372220/img_id2870199088718206143.jpeg/orig',
      id: 'AOCQ3279VWFD8',
      sale: '5',
      groupEng: 'monitors'
    },
    {
      name: 'Монитор LG 27UL500 27"',
      make: 'LG',
      shortDescription: [
        'тип матрицы экрана: IPS',
        'разрешение 3840x2160 (16:9)',
        'частота обновления 61 Гц',
        'время отклика 5 мс',
        'контрастность 1000:1',
        'яркость 300 кд/м²',
        'углы обзора: по горизонтали 178°, по вертикали 178°',
        'подключение: HDMI 2.0 x2, DisplayPort 1.4, выход на наушники',
        'поддержка FreeSync'
      ],
      description: [],
      price: '25 299',
      img: 'https://avatars.mds.yandex.net/get-mpic/1909520/img_id8460293479836931446.jpeg/orig',
      id: 'LG27UL500',
      sale: '',
      groupEng: 'monitors'
    }
    ],
    saleGroup: 'true',
    productMakersList: ['Lg', 'Xiaomi', 'Samsung', 'Dell', 'Philips', 'AOC'],
    idGroup: 'MonitorsIdentifier',
    engGroupName: 'monitors'
  },
  'Планшеты': {
    examplesList: [
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1888674/img_id8451971435629694247.jpeg/orig',
        exampleMake: 'Apple',
        id: 'AppTabEx571'
      },
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1884605/img_id9144187026135302861.jpeg/orig',
        exampleMake: 'Samsung',
        id: 'SamTabEx805'
      }
    ],
    examplesForContent: {img: tablet},
    productListArray: [
      {
        name: 'Планшет Samsung Galaxy Tab A 10.1 SM-T515 32Gb',
        make: 'Samsung',
        shortDescription: 
        [
          'планшет 10.1", 1920x1200',
          'встроенная память 32 ГБ, слот microSDXC, до 512 ГБ',
          'Android 9.0, ОЗУ 2 ГБ, процессор Samsung Exynos 7904',
          'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
          'размеры 149.4x245.2x7.5 мм, вес 470 г',
          'тыловая камера 8 Мпикс',
          'фронтальная камера 5 Мпикс',
          'акселерометр'
        ],
        description: [],
        price: '19 950',
        img: 'https://avatars.mds.yandex.net/get-mpic/1865278/img_id2402617051273319549.jpeg/orig',
        id: 'GalaxyTabA10.1',
        sale: '',
        groupEng: 'tablets'
      },
    {
      name: 'Планшет Apple iPad (2019) 32Gb Wi-Fi',
      make: 'Apple',
      shortDescription: 
      [
        'планшет 10.2", 2160x1620, TFT IPS',
        'встроенная память 32 ГБ, без слота для карт памяти',
        'iOS, процессор Apple A10',
        'Wi-Fi, Bluetooth',
        'размеры 174.1x250.6x7.5 мм, вес 483 г',
        'тыловая камера 8 Мпикс',
        'фронтальная камера 1.2 Мпикс',
        'время работы 10 ч',
        'акселерометр, гироскоп'
      ],
      description: [],
      price: '28 950',
      img: 'https://avatars.mds.yandex.net/get-mpic/1888674/img_id8451971435629694247.jpeg/orig',
      id: 'iPad201932Gb',
      sale: '',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет HUAWEI MediaPad M5 Lite 8 32Gb LTE',
      make: 'HUAWEI',
      shortDescription: 
      [
        'планшет 8", 1920x1200, TFT IPS',
        'встроенная память 32 ГБ, слот microSDXC, до 512 ГБ',
        'Android 9.0, ОЗУ 3 ГБ, процессор HiSilicon Kirin 710 2200 МГц',
        'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
        'размеры 122.2x204.2x8.2 мм, вес 310 г',
        'тыловая камера 13 Мпикс',
        'фронтальная камера 8 Мпикс',
        'акселерометр'
      ],
      description: [],
      price: '15 369',
      img: 'https://avatars.mds.yandex.net/get-mpic/1657306/img_id7259429452583666038.jpeg/orig',
      id: 'HUAWEIMediaPadM5',
      sale: '5',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет Lenovo Tab M10 Plus TB-X606F 128Gb',
      make: 'Lenovo',
      shortDescription: 
      [
        'планшет 10.3", 1920x1200, TFT IPS',
        'встроенная память 128 ГБ, слот microSDXC, до 256 ГБ',
        'Android 9.0, ОЗУ 4 ГБ, процессор 2300 МГц',
        'Wi-Fi, Bluetooth, GPS',
        'размеры 153.3x244.2x8.1 мм, вес 460 г',
        'тыловая камера 8 Мпикс',
        'фронтальная камера 5 Мпикс',
        'акселерометр'
      ],
      description: [],
      price: '17 490',
      img: 'https://avatars.mds.yandex.net/get-mpic/1733932/img_id8435900069949510801.jpeg/orig',
      id: 'LenovoTB-X606F',
      sale: '10',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет Samsung Galaxy Tab A 8.0 SM-T295 32Gb',
      make: 'Samsung',
      shortDescription: 
      [
        'планшет 8", 1280x800',
        'встроенная память 32 ГБ, слот microSDXC, до 512 ГБ',
        'Android 9.0, ОЗУ 2 ГБ, процессор Qualcomm Snapdragon 429 2000 МГц',
        'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
        'размеры 124.4x210x8 мм, вес 347 г',
        'тыловая камера 8 Мпикс',
        'фронтальная камера 2 Мпикс',
        'акселерометр'
      ],
      description: [],
      price: '12 999',
      img: 'https://avatars.mds.yandex.net/get-mpic/1884605/img_id9144187026135302861.jpeg/orig',
      id: 'TabA8.0SM-T295',
      sale: '',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет Samsung Galaxy Tab S5e 10.5 SM-T725 64Gb',
      make: 'Samsung',
      shortDescription: 
      [
        'планшет 10.5", 2560x1600, Super AMOLED',
        'встроенная память 64 ГБ, слот microSDXC, до 512 ГБ',
        'Android 9.0, ОЗУ 4 ГБ, процессор Qualcomm Snapdragon 670',
        'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
        'размеры 160x245x5.5 мм, вес 400 г',
        'тыловая камера 13 Мпикс',
        'фронтальная камера 8 Мпикс',
        'акселерометр, гироскоп'
      ],
      description: [],
      price: '39 950',
      img: 'https://avatars.mds.yandex.net/get-mpic/1767151/img_id6968726503477710938.jpeg/orig',
      id: 'TabS5e10.5',
      sale: '10',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет HUAWEI Mediapad T3 8.0 16Gb LTE',
      make: 'HUAWEI',
      shortDescription: 
      [
        'планшет 8", 1280x800, TFT IPS',
        'встроенная память 16 ГБ, слот microSDXC, до 128 ГБ',
        'Android 7.0, ОЗУ 2 ГБ, процессор Qualcomm Snapdragon 425 1400 МГц',
        'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
        'размеры 124.7x211x8 мм, вес 350 г',
        'тыловая камера 5 Мпикс',
        'фронтальная камера 2 Мпикс',
        'акселерометр'
      ],
      description: [],
      price: '8 990',
      img: 'https://avatars.mds.yandex.net/get-mpic/1244413/img_id1321839397336585382.jpeg/orig',
      id: 'HUAWEIMediapadT3',
      sale: '',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет Samsung Galaxy Tab S6 10.5 SM-T865 128Gb',
      make: 'Samsung',
      shortDescription: 
      [
        'планшет 10.5", 2560x1600, Super AMOLED',
        'встроенная память 128 ГБ, слот microSDXC, до 1024 ГБ',
        'Android 9.0, ОЗУ 6 ГБ, процессор Qualcomm Snapdragon SDM855 2800 МГц',
        'Wi-Fi, Bluetooth, 3G, 4G LTE, GPS',
        'размеры 159.5x244.5x5.7 мм, вес 420 г',
        'тыловая камера 13 Мпикс',
        'фронтальная камера 8 Мпикс',
        'время работы (музыка) 105 ч',
        'время работы (видео) 15 ч',
        'акселерометр, гироскоп'
      ],
      description: [],
      price: '64 490',
      img: 'https://avatars.mds.yandex.net/get-mpic/1864685/img_id8238964283762410881.jpeg/orig',
      id: 'GalaxyTabS610.5',
      sale: '13',
      groupEng: 'tablets'
    },
    {
      name: 'Планшет Apple iPad Air (2019) 64Gb Wi-Fi',
      make: 'Apple',
      shortDescription: 
      [
        'планшет 10.5", 2224x1668, TFT IPS',
        'встроенная память 64 ГБ, без слота для карт памяти',
        'iOS, процессор Apple A12 Bionic',
        'Wi-Fi, Bluetooth',
        'размеры 174.1x250.6x6.1 мм, вес 456 г',
        'тыловая камера 8 Мпикс',
        'фронтальная камера 7 Мпикс',
        'время работы 10 ч',
        'акселерометр, гироскоп'
      ],
      description: [],
      price: '42 989',
      img: 'https://avatars.mds.yandex.net/get-mpic/1866068/img_id7070434538046308385.jpeg/orig',
      id: 'iPadAir201964Gb',
      sale: '',
      groupEng: 'tablets'
    },
    ],
    saleGroup: 'true',
    productMakersList: ['Apple', 'Samsung', 'Huawei', 'Lenovo'],
    idGroup: 'TabletsIdentifier',
    engGroupName: 'tablets'
  },
  'Фотоаппараты': {
    examplesList: [
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1620389/img_id2778854553620484191.jpeg/orig',
        exampleMake: 'Canon',
        id: 'CanCamEx7651'
      },
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1565610/img_id695816936998027222.jpeg/orig',
        exampleMake: 'Nikon',
        id: 'NikCamEx1987'
      }
    ],
    examplesForContent: {img: cameras},
    productListArray: [
      {
        name: 'Фотоаппарат Canon EOS M50 Kit',
        make: 'Canon',
        shortDescription: 
        [
          'фотокамера с поддержкой сменных объективов',
          'байонет Canon EF-M',
          'матрица 25.8 МП (APS-C)',
          'выдержка: 0.00 - 30 с',
          'чувствительность 100 - 3200 ISO , AutoISO',
          'съемка видео 4K',
          'поворотный сенсорный экран 3"',
          'карты памяти SDHC, Secure Digital, SDXC',
          'интерфейсы Wi-Fi, USB, Bluetooth, HDMI, NFC, микрофонный вход',
          'вес без элементов питания и объектива 387 г',
          '116х59х88 мм'
        ],
        description: [],
        price: '44 990',
        img: 'https://avatars.mds.yandex.net/get-mpic/1620389/img_id2778854553620484191.jpeg/orig',
        id: 'CanonEOSM50',
        sale: '',
        groupEng: 'cameras'
      },
      {
        name: 'Фотоаппарат Sony Alpha ILCE-6400 Kit',
        make: 'Sony',
        shortDescription: 
        [
          'фотокамера с поддержкой сменных объективов',
          'байонет Sony E',
          'матрица 25 МП (APS-C)',
          'выдержка: 0.00 - 30 с',
          'чувствительность 100 - 32000 ISO , AutoISO',
          'съемка видео 4K',
          'поворотный сенсорный экран 2.95" , влагозащищенный корпус',
          'карты памяти Memory Stick Duo, SDHC, microSDXC, Secure Digital, Memory Stick, Memory Stick PRO-HG Duo, microSD, SDXC, Memory Stick Pro Duo, microSDHC',
          'интерфейсы Wi-Fi, USB, аудио, Bluetooth, HDMI, NFC, микрофонный вход, разъем для пульта ДУ',
          'вес с элементами питания без объектива 403 г',
          '120х50х67 мм'        
        ],
        description: [],
        price: '82 900',
        img: 'https://avatars.mds.yandex.net/get-mpic/1571888/img_id2589833065184675889.jpeg/orig',
        id: 'AlphaILCE-6400',
        sale: '10',
        groupEng: 'cameras'
      },
      {
        name: 'Фотоаппарат Olympus OM-D E-M10 Mark III Kit',
        make: 'Olympus',
        shortDescription: 
        [
          'фотокамера с поддержкой сменных объективов',
          'байонет Micro 4/3',
          'матрица 17.2 МП (17.3 x 13.0 мм)',
          'выдержка: 0.00 - 60 с',
          'чувствительность 100 - 3200 ISO , AutoISO',
          'съемка видео 4K , стабилизатор изображения',
          'поворотный сенсорный экран 3"',
          'карты памяти SDHC, Secure Digital, SDXC',
          'интерфейсы Wi-Fi, USB, HDMI',
          'вес с элементами питания без объектива 410 г',
          '122х50х84 мм'
        ],
        description: [],
        price: '42 147',
        img: 'https://avatars.mds.yandex.net/get-mpic/1565610/img_id8636012116127935536.png/orig',
        id: 'OlympusOM-DE-M10',
        sale: '',
        groupEng: 'cameras'
      },
      {
        name: 'Фотоаппарат Canon EOS 250D Kit',
        make: 'Canon',
        shortDescription: 
        [
          'любительская зеркальная фотокамера',
          'байонет Canon EF',
          'матрица 25.8 МП (APS-C)',
          'выдержка: 0.00 - 30 с',
          'чувствительность 100 - 25600 ISO , AutoISO',
          'съемка видео 4K',
          'поворотный сенсорный экран 3"',
          'карты памяти SDHC, Secure Digital, SDXC',
          'интерфейсы Wi-Fi, видео, USB, Bluetooth, HDMI, NFC, микрофонный вход, разъем для пульта ДУ',
          'вес с элементами питания без объектива 451 г',
          '122х70х93 мм'
        ],
        description: [],
        price: '34 490',
        img: 'https://avatars.mds.yandex.net/get-mpic/1865652/img_id6380332280429810819.jpeg/orig',
        id: 'CanonEOS250D',
        sale: '',
        groupEng: 'cameras'
      },
      {
        name: 'Фотоаппарат Nikon D5600 Kit',
        make: 'Nikon',
        shortDescription: 
        [
          'любительская зеркальная фотокамера',
          'матрица 24.78 МП (APS-C)',
          'максимальная выдержка: 30 с',
          'чувствительность 100 - 3200 ISO , AutoISO',
          'съемка видео',
          'поворотный сенсорный экран 3.2"',
          'карты памяти SDHC, Secure Digital, SDXC',
          'интерфейсы Wi-Fi, USB, Bluetooth, HDMI, NFC, микрофонный вход',
          'вес без элементов питания и объектива 420 г',
          '124х70х97 мм'
        ],
        description: [],
        price: '39 900',
        img: 'https://avatars.mds.yandex.net/get-mpic/1565610/img_id695816936998027222.jpeg/orig',
        id: 'NikonD5600',
        sale: '10',
        groupEng: 'cameras'
      },
      {
        name: 'Фотоаппарат Nikon D3500 Kit',
        make: 'Nikon',
        shortDescription: 
        [
          'любительская зеркальная фотокамера',
          'байонет Nikon F',
          'матрица 24.78 МП (APS-C)',
          'выдержка: 0.00 - 30 с',
          'чувствительность 100 - 3200 ISO , AutoISO',
          'съемка видео Full HD',
          'экран 3"',
          'карты памяти SDHC, Secure Digital, SDXC',
          'интерфейсы USB, Bluetooth, HDMI',
          'вес без элементов питания и объектива 365 г',
          '124х70х97 мм'
        ],
        description: [],
        price: '47 489',
        img: 'https://avatars.mds.yandex.net/get-mpic/1246680/img_id3035050041215186803.png/orig',
        id: 'NikonD3500',
        sale: '',
        groupEng: 'cameras'
      }
    ],
    saleGroup: 'true',
    productMakersList: ['Canon', 'Sony', 'Olympus', 'Nikon'],
    idGroup: 'СamerasIdentifier',
    engGroupName: 'cameras'
  },
  'Смарт часы': {
    examplesList: [
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1382936/img_id2655333609054020963.jpeg/orig',
        exampleMake: 'Samsung',
        id: 'SamWatchEx81274'
      },
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/175985/img_id3066917608427719213.jpeg/orig',
        exampleMake: 'Apple',
        id: 'AppWatchEx175'
      }
    ],
    examplesForContent: {},
    productListArray:[
      {
        name: 'Браслет Xiaomi Mi Band 4',
        make: 'Xiaomi',
        shortDescription: 
        [
          'фитнес-браслет',
          'влагозащищенный',
          'сенсорный AMOLED-экран, 0.95"',
          'уведомление о входящем звонке',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности',
          'устойчивое к царапинам стекло',
          'вес: 22.1 г'          
        ],
        description: [],
        price: '2 430',
        img: 'https://avatars.mds.yandex.net/get-mpic/1681399/img_id8867112713093477946.jpeg/orig',
        id: 'MiBand4',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Браслет HONOR Band 5',
        make: 'HONOR',
        shortDescription: 
        [
          'фитнес-браслет',
          'влагозащищенный',
          'сенсорный AMOLED-экран, 0.95", 120x240',
          'уведомление о входящем звонке',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности, уровня кислорода',
          'вес: 22.7 г',
        ],
        description: [],
        price: '2 490',
        img: 'https://avatars.mds.yandex.net/get-mpic/2009321/img_id6284625317396508857.png/orig',
        id: 'HONORBand5',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Часы Amazfit GTS',
        make: 'Amazfit',
        shortDescription: 
        [
          'влагозащищенные',
          'сенсорный AMOLED-экран, 1.65", 348x442',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности',
          'устойчивое к царапинам стекло',
          'вес: 24.8 г'
        ],
        description: [],
        price: '9 190',
        img: 'https://avatars.mds.yandex.net/get-mpic/1642819/img_id9044768319161726839.jpeg/orig',
        id: 'AmazfitGTS',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Часы Samsung Galaxy Watch (46 mm)',
        make: 'Samsung',
        shortDescription: 
        [
          'влагозащищенные',
          'материал корпуса: нерж. сталь',
          'сенсорный Super AMOLED-экран, 1.3", 360x360',
          'звонки с помощью телефона или планшета',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности',
          'устойчивое к царапинам стекло',
          'вес: 63 г'
        ],
        description: [],
        price: '26 500',
        img: 'https://avatars.mds.yandex.net/get-mpic/1382936/img_id2655333609054020963.jpeg/orig',
        id: 'GalaxyWatch46 mm',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Часы Apple Watch Series 3 38mm Aluminum Case with Sport Band',
        make: 'Apple',
        shortDescription: 
        [
          'противоударные, влагозащищенные',
          'материал корпуса: алюминий',
          'сенсорный OLED-экран, 1.5", 272x340',
          'звонки с помощью телефона или планшета',
          'совместимость с iOS',
          'мониторинг сна, калорий, физ. активности',
          'сапфировое стекло',
          'вес: 26.7 г',
        ],
        description: [],
        price: '15 499',
        img: 'https://avatars.mds.yandex.net/get-mpic/175985/img_id3066917608427719213.jpeg/orig',
        id: 'AppleWatchSeries338mm',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Часы Samsung Galaxy Watch Active2 алюминий 40 мм',
        make: 'Samsung',
        shortDescription: 
        [
          'влагозащищенные',
          'материал корпуса: алюминий',
          'сенсорный Super AMOLED-экран, 1.2", 360x360',
          'звонки с помощью телефона или планшета',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности',
          'устойчивое к царапинам стекло',
          'вес: 26 г'
        ],
        description: [],
        price: '19 900',
        img: 'https://avatars.mds.yandex.net/get-mpic/1865885/img_id3577016922106468360.jpeg/orig',
        id: 'GalaxyWatchActive2',
        sale: '',
        groupEng: 'smart_watch'
      },
      {
        name: 'Часы HUAWEI Watch GT 2 Sport 46 mm',
        make: 'HUAWEI',
        shortDescription: 
        [
          'влагозащищенные',
          'сенсорный AMOLED-экран, 1.39", 454x454',
          'звонки с помощью телефона или планшета',
          'совместимость с Android, iOS',
          'мониторинг сна, калорий, физ. активности',
          'вес: 41 г'
        ],
        description: [],
        price: '12 600',
        img: 'https://avatars.mds.yandex.net/get-mpic/1568604/img_id1746837922601262766.jpeg/orig',
        id: 'WatchGT2',
        sale: '',
        groupEng: 'smart_watch'
      },
    ],
    saleGroup: '',
    productMakersList: ['Apple', 'Samsung', 'Xiaomi', 'Honor', 'Amazfit', 'Huawei'],
    idGroup: 'SmartWatch',
    engGroupName: 'smart_watch'
  },
  'Клавиатуры': {
    examplesList: [
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/1860966/img_id2618850948562805660.jpeg/orig',
        exampleMake: 'OKLICK',
        id: 'OKLICKKeyEx1451'
      },
      {
        example: 'https://avatars.mds.yandex.net/get-mpic/397397/img_id1499013225093786749/orig',
        exampleMake: 'A4Tech',
        id: 'A4TechKeyEx248'
      }
    ],
    examplesForContent: {img: keyboard},
    productListArray: [
      {
        name: 'Клавиатура Logitech Corded Keyboard K280e Black USB',
        make: 'Logitech',
        shortDescription: 
        [
          'проводная клавиатура',
          'интерфейс USB',
          'для настольного компьютера',
          'классическая конструкция, мембранная',
          'клавиш: 104',
          'размеры (ШxВxГ): 459x20x183 мм',
          'вес: 934 г'
        ],
        description: [],
        price: '1 196',
        img: 'https://avatars.mds.yandex.net/get-mpic/1767151/img_id7419673329120599287.jpeg/orig',
        id: 'K280e',
        sale: '',
        groupEng: 'keyboards'
      },
      {
        name: 'Клавиатура OKLICK 969G SHOTGUN Black USB',
        make: 'OKLICK',
        shortDescription: 
        [
          'проводная клавиатура',
          'интерфейс USB',
          'для настольного компьютера, игровая',
          'классическая конструкция, механическая',
          'вес: 625 г'
        ],
        description: [],
        price: '1900',
        img: 'https://avatars.mds.yandex.net/get-mpic/1860966/img_id2618850948562805660.jpeg/orig',
        id: 'OKLICK969G',
        sale: '10',
        groupEng: 'keyboards'
      },
      {
        name: 'Клавиатура A4Tech Bloody B810R Black USB',
        make: 'A4Tech',
        shortDescription: 
        [
          'проводная клавиатура',
          'интерфейс USB',
          'для настольного компьютера, игровая',
          'классическая конструкция, механическая',
          'клавиш: 104',
          'размеры (ШxВxГ): 444x37x132 мм'
        ],
        description: [],
        price: '4 160',
        img: 'https://avatars.mds.yandex.net/get-mpic/397397/img_id1499013225093786749/orig',
        id: 'B810R',
        sale: '',
        groupEng: 'keyboards'
      },
    ],
    saleGroup: 'true',
    productMakersList: ['Logitech', 'OKLICK', 'A4Tech'],
    idGroup: 'KeyboardsIdentifier',
    engGroupName: 'keyboards'
  }
}

export default function DataBase(state: DataBaseType = DB) {
    return state
}