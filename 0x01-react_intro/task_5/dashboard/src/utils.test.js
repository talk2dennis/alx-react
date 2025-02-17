import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils and expects the functions to return the right text', () => {
    it('getFullYear', () => {
        expect(getFullYear()).toBe(new Date().getFullYear());
    });

    it('getFooterCopy', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    it('getLatestNotification', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});