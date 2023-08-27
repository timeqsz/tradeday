import {describe, expect, test} from '@jest/globals';
import { isTradeday } from '../src';

describe('isTradeday', () => {
    test('isTradeday', () => {
        expect(isTradeday('2023-01-01')).toBe(false);
        expect(isTradeday('2023-01-02')).toBe(false);
        expect(isTradeday('2025-01-03')).toBe("这个日期还不清楚放假安排呢");
        expect(isTradeday('2022-01-04')).toBe("2023年以前的日期暂不支持");
        expect(isTradeday('2023-01-05')).toBe(true);
        expect(isTradeday('2023-11-06')).toBe(true);
        expect(isTradeday('2023-10-05')).toBe(false);
    });
});

