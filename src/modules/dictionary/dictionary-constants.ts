export const DICTIONARY_NAMESPACE = "@@DICTIONARY_NAMESPACE";

export const SET_DICTIONARIES = "SET_DICTIONARIES";
export const SET_ERROR_FETCH_DICTIONARIES = "SET_ERROR_FETCH_DICTIONARIES";

/**
 * Список всех словарей
 */
export enum EDictionaryName {
    Artifacts = 'artifacts',
    Creatures = 'creatures',
    Heroes = 'heroes',
    Perks = 'perks',
    Races = 'races',
    Skills = 'skills',
    Spells = 'spells',
}

export const NOT_FOUND_DICTIONARY_VALUE = 'Запись не найдена в справочнике';
export const ERROR_FETCH_DICTIONARY = 'Ошибка при загрузке справочника';
