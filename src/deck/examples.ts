export const decks: {
    data: {
        name: string;
        termLang: string;
        defLang: string;
        id?: number;
    };
    cards: {
        term: string;
        def: string;
        id?: number;
    }[];
}[] = [

    {
        data: {
            name: '',
            termLang: '',
            defLang: '',
        },
        cards: [],
    },
    {
        data: {
            name: 'Deck without cards',
            termLang: 'English',
            defLang: 'French',
        },
        cards: [],
    },
    {
        data: {
            name: 'Science Quiz',
            termLang: 'English',
            defLang: 'French',
        },
        cards: [
            { term: 'Physics', def: 'Physique' },
            { term: 'Chemistry', def: 'Chimie' },
            { term: 'Biology', def: 'Biologie' },
        ],
    },
    {
        data: {
            name: 'Animal Names',
            termLang: 'English',
            defLang: 'German',
        },
        cards: [
            { term: 'Dog', def: 'Hund' },
            { term: 'Cat', def: 'Katze' },
            { term: 'Bird', def: 'Vogel' },
            { term: 'Elephant', def: 'Elefant' },
        ],
    },
    {
        data: {
            name: 'Mathematics Basics',
            termLang: 'English',
            defLang: 'Spanish',
        },
        cards: [
            { term: 'Addition', def: 'Suma' },
            { term: 'Subtraction', def: 'Resta' },
            { term: 'Multiplication', def: 'Multiplicación' },
            { term: 'Division', def: 'División' },
            { term: 'Geometry', def: 'Geometría' },
        ],
    },
    {
        data: {
            name: 'Fruits and Colors',
            termLang: 'English',
            defLang: 'Italian',
        },
        cards: [
            { term: 'Apple', def: 'Mela' },
            { term: 'Banana', def: 'Banana' },
            { term: 'Orange', def: 'Arancia' },
            { term: 'Grapes', def: 'Uva' },
            { term: 'Red', def: 'Rosso' },
            { term: 'Yellow', def: 'Giallo' },
            { term: 'Orange (Color)', def: 'Arancione' },
        ],
    },
]