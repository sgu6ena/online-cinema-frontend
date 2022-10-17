import { createAsyncThunk } from '@reduxjs/toolkit'

import { PortalService } from '../../api/portal.service'


export const getHistory = createAsyncThunk<any, { page:string }>(
	'/getHistory',
	async ({ page }, thinkApi) => {
		try {
			const response = await PortalService.getHistory(page)
			return response
		} catch (error) {

		}
	})