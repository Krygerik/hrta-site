import {EComparisonNames, EPlayerColor, EPlayerStartedBonus} from "../../common/constants";
import {ERacesIds} from "../../modules/dictionary/dictionary-types";

/**
 * Тип количества побед/поражений в одном МА
 */
export type TWinRateRecord = {
    // Количество проигранных игр
    lose: number;
    // Количество выигранных игр
    win: number;
}

/**
 * Тип винрейта одной расы со всеми остальными
 */
export type TRaceWinRate = Record<ERacesIds, TWinRateRecord>;

/**
 * Тип винрейта всех рас со всеми
 */
export type TAllWinRateRecord = Record<ERacesIds, TRaceWinRate>;

export const SET_LOADING_STATISTICS_STATUS = 'SET_LOADING_STATISTICS_STATUS';
export const SET_ALL_RACES_WIN_RATE = 'SET_ALL_RACES_WIN_RATE';
export const SET_ERROR_FETCH_ALL_RACE_WIN_RATE = 'SET_ERROR_FETCH_ALL_RACE_WIN_RATE';

export type TSetLoadingStatisticsStatusAction = {
    data: undefined;
    type: typeof SET_LOADING_STATISTICS_STATUS;
}

export type TSetAllRacesWinRateAction = {
    data: TAllWinRateRecord;
    type: typeof SET_ALL_RACES_WIN_RATE;
}

export type TSetErrorFetchAllRaceWinRaceAction = {
    data: undefined;
    type: typeof SET_ERROR_FETCH_ALL_RACE_WIN_RATE;
}

export type TStatisticsPageState = {
    allRacesWinRate?: TAllWinRateRecord;
    errorFetch: boolean;
    isFetchingRacesWinRate: boolean;
}

export type TStatisticsPageActions = TSetAllRacesWinRateAction
    | TSetErrorFetchAllRaceWinRaceAction
    | TSetLoadingStatisticsStatusAction;

export const STATISTICS_PAGE_NAMESPACE = '@@STATISTICS_PAGE_NAMESPACE';


/**
 * Перечисление полей фильтров
 */
export enum EFiltersName {
    Color = 'color',
    Hero = 'hero',
    Level = 'level',
    Mentoring = 'mentoring',
    Race = 'race',
    StartBonus = 'start_bonus',
    UserId = 'user_id',
}

/**
 * Тип одного фильтра формы
 */
export type TSingleStatisticsFilter = {
    name: EFiltersName;
    operator?: EComparisonNames;
    value?: EPlayerColor | ERacesIds | string;
};

/**
 * Тип формы фильтров статистики
 */
export type TFilterStatisticsFormValues = {
    filters: TSingleStatisticsFilter[]
};

/**
 * Тип фильтра в запросе статистик по расам
 */
export type TFetchStatisticsRequestFilter = {
    // ID цвета игрока
    color?: EPlayerColor;
    // ID героя
    hero?: string;
    // ID фракции
    race?: ERacesIds;
    // Уровень героя
    level?: number;
    // ID игрока
    user_id?: string;
    // Стартовый бонус игрока
    start_bonus?: EPlayerStartedBonus;
    // Количество ментора
    mentoring?: Record<EComparisonNames, number>;
}