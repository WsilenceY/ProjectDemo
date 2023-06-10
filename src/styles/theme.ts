/*
 * @Author: wangying wangying@waytous.com
 * @Date: 2023-06-09 09:54:59
 * @LastEditors: wangying wangying@waytous.com
 * @LastEditTime: 2023-06-10 19:39:38
 * @FilePath: /ProjectDemo/src/styles/theme.ts
 * @Description: 主题设置
 */
import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

import { DARK_MODE_THEME, LIGHT_MODE_THEME } from '../utils/constants';

export const getAppTheme = (mode: typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME): Theme => {
	let theme = createTheme({
		palette: {
			mode,
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};
