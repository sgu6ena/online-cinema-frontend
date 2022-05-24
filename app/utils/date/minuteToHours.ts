export const minuteToHours =(num:number)=>{
	const minutes = num%60;
	const days = Math.floor(((num-minutes)/60)/24);
	const hours = Math.floor((num-days*24*60)/60)
	return 	` ${days?' '+ days + ' дн. ':''}${hours? hours + ' ч. ':''}${minutes?minutes + ' мин.':''}`

}
