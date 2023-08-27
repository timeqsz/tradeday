const specialdays = [
    "2023-01-01",
    "2023-01-02",
    "2023-01-23",
    "2023-01-24",
    "2023-01-25",
    "2023-01-26",
    "2023-01-27",
    "2023-04-05",
    "2023-05-01",
    "2023-05-02",
    "2023-05-03",
    "2023-06-22",
    "2023-06-23",
    "2023-09-29",
    "2023-10-02",
    "2023-10-03",
    "2023-10-04",
    "2023-10-05",
    "2023-10-06",
]


export function isspacialday(datestr:string){
    if(specialdays.indexOf(datestr) > -1){
        return true
    }
    return false
}