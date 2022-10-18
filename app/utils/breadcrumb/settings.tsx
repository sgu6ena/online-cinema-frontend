import { getSettingsUrl } from '../../config/url.config'
import { LINKS } from '../../config/links'

export const getSettingsBread = (title?:string, link?:string) =>{
	if(!title)
	return [{
		title:"Настройки", to:LINKS.SETTINGS
	}]
	else
		return [{
			title:"Настройки", to:LINKS.SETTINGS
		},
			{
				title, to:link
			},
		]
}