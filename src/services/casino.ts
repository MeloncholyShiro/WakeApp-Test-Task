import { fetchRejectRepeater } from '../utils/RejectRepeater';

/* eslint-disable @typescript-eslint/require-await */
const MAIN_URL = new URL('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io');
MAIN_URL.searchParams.set('limit', '25');

const someShit = {
    allGames: [],
    topGames: ['is_most_popular', 'true'],
    liveCasino: [
        ['categories', 'Live Casino'],
        ['liveCasinoOnly', 'true'],
    ],
    slotGames: ['categories', 'Slot'],
    roulette: ['categories', 'Roulette'],
    tableGames: ['categories', 'Scratch Games'], // Взял что угодно
    cardGames: ['categories', 'Card Games'],
} as const;

const responseDataMockForType = {
    application_name: 'European Roulette Pro',
    aspect: '1024X768',
    biggest_win: '75650.00',
    biggest_win_currency: 'EUR',
    bingo_jackpot: false,
    bingo_times: '',
    bingo_type: '',
    carousel: 0,
    daily_jackpot: false,
    decks: 0,
    double_up: false,
    external_game_id: '',
    fun_mode: true,
    game_family_group: 'Roulette',
    game_features: ['mobile', 'search'],
    game_provider: 'Green Valley Games',
    games_played: 12,
    hands: 0,
    html5: false,
    internal_game_id: 1244,
    is_appealing_to_children: false,
    is_bingo: false,
    is_classic: false,
    is_hot: false,
    is_jackpot: false,
    is_megaways: false,
    is_most_popular: false,
    is_new: false,
    item_title: 'EuropeanRoulettePro',
    jackpot: {
        amount: 0,
    },
    jackpot_amount: '0.00',
    live_dealer: false,
    max_bet: '1500',
    max_coin_per_line: 0,
    max_win: '52500',
    min_bet: '1',
    ojo_pick: false,
    paylines: 0,
    preels: 0,
    quick_spin: true,
    rank: 15,
    rating: {
        rating: '3.76',
        ratingCount: 38,
        ratingSum: 143,
    },
    ratingValue: '3.76',
    rtp_max: '97.30',
    rtp_min: '97.30',
    seats: 0,
    seo_provider: false,
    slingo_pick: false,
    slots_features: [],
    slots_symbols: [],
    slots_themes: [''],
    special_bets: true,
    statistics: true,
    studio: 'GVG',
    volatility: '',
} as never;

export type TCategoryNames = keyof typeof someShit;

export const FetchCategoryByName = async (categoryName: TCategoryNames): Promise<typeof responseDataMockForType[]> => {
    if (!someShit[categoryName]) throw new Error('Unexpected Category Name');

    const MAIN_URL_COPY = new URL(MAIN_URL.href);

    const prepareQueryParametersToAppend = someShit[categoryName].flat(1);

    for (let index = 0; index < prepareQueryParametersToAppend.length; index += 2) {
        MAIN_URL_COPY.searchParams.append(
            prepareQueryParametersToAppend[index],
            prepareQueryParametersToAppend[index + 1],
        );
    }

    const response = await fetchRejectRepeater(MAIN_URL_COPY.href)();

    return response.json() as Promise<typeof responseDataMockForType[]>;
};
