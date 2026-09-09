// datetime-local represents local wall time. Do not use toISOString() here: it shifts values to UTC.
const pad=value=>String(value).padStart(2,'0');
export const toDateTimeLocal=value=>{if(!value)return '';const d=new Date(value);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`};
export const formatFollowUp=value=>{if(!value)return 'Not scheduled';const d=new Date(value), today=new Date();const start=x=>new Date(x.getFullYear(),x.getMonth(),x.getDate()).getTime();const day=(start(d)-start(today))/86400000;const time=d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});if(day===0)return `Today, ${time}`;if(day===1)return `Tomorrow, ${time}`;if(day===-1)return `Yesterday, ${time}`;return `${d.toLocaleDateString([],{month:'short',day:'numeric'})}, ${time}`};
export const isToday=value=>value&&new Date(value).toDateString()===new Date().toDateString();
