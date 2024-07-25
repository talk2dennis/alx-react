import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('getFullYear to check if it returns the right year', () => {
    test('test getFullYear returns the current year', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    test('tests getFooterCopy returns the right string when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    test('tests getLatestNotification returns the right string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});