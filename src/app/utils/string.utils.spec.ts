import { StringUtils } from "./string.utils";

describe('StringUtils', () => {

    test('should be not blank when text exist', () => {
        expect(StringUtils.isNotBlank('text')).toBeTruthy();
    });

    test('should be blank when text is null', () => {
        expect(StringUtils.isNotBlank(null)).toBeFalsy();
    });

    test('should be blank when text is undefined', () => {
        expect(StringUtils.isNotBlank(undefined)).toBeFalsy();
    });

    test('should be blank when text is empty', () => {
        expect(StringUtils.isNotBlank('')).toBeFalsy();
    });

    test('should be blank when text is empty spaces', () => {
        expect(StringUtils.isNotBlank('  ')).toBeFalsy();
    });

    test('should capitalize only first letter of each word when text is lower case', () => {
        expect(StringUtils.capitalize('name surname')).toBe('Name Surname');
    });

    test('should capitalize only first letter of each word when text is upper case', () => {
        expect(StringUtils.capitalize('nAME sURNAME')).toBe('NAME SURNAME');
    });

    test('should return null text when it is null', () => {
        expect(StringUtils.capitalize(null)).toBeNull();
    });

    test('should return undefined text when it is undefined', () => {
        expect(StringUtils.capitalize(undefined)).toBeUndefined();
    });

    test('should return same text when it is empty', () => {
        expect(StringUtils.capitalize('')).toBe('');
    });

    test('should return same text when it is empty space', () => {
        expect(StringUtils.capitalize('  ')).toBe('  ');
    });

    test('should capitalize first letter of each word when text is lower case', () => {
        expect(StringUtils.capitalizeFully('name surname')).toBe('Name Surname');
    });

    test('should capitalize first letter of each word when text is upper case', () => {
        expect(StringUtils.capitalizeFully('NAME SURNAME')).toBe('Name Surname');
    });

    test('should capitalize first letter of each word when text is upper and lower cases', () => {
        expect(StringUtils.capitalizeFully('NaMe sUrNaMe')).toBe('Name Surname');
    });

    test('should return null text when it is null', () => {
        expect(StringUtils.capitalizeFully(null)).toBeNull();
    });

    test('should return undefined text when it is undefined', () => {
        expect(StringUtils.capitalize(undefined)).toBeUndefined();
    });

    test('should return same text when it is empty', () => {
        expect(StringUtils.capitalize('')).toBe('');
    });

    test('should return same text when it is empty space', () => {
        expect(StringUtils.capitalize('  ')).toBe('  ');
    });

});
