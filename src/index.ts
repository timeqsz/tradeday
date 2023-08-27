import {isspacialday} from './specialday'

type TimeValue = number | string | Date;

export function isTradeday(date : TimeValue): boolean | string {
    const startyear = 2023;
    let formatteddate = new Date(date);
    console.log(formatteddate)
    let year = formatteddate.getFullYear();
    let curryear = new Date().getFullYear();
    if(year < startyear){return "2023年以前的日期暂不支持"}
    if(year > curryear){return "这个日期还不清楚放假安排呢"}
    if (formatteddate.getDay() == 0 || formatteddate.getDay() == 6) {
        return false
    }
    let month = formatteddate.getMonth() + 1;
    let day = formatteddate.getDate();
    let datestr = String(year) + "-" + String(month).padStart(2,'0') + "-" + String(day).padStart(2,'0');
    console.log( String(day).padStart(2,'0'));
    console.log(datestr);
    if(isspacialday(datestr)){return false}
    return true;
}