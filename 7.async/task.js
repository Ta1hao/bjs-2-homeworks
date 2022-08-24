class AlarmClock {
    constructor(time, id, callback, setInterval)
    {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
  addClock (time, callback, id){
        if(!id){
            const errorOut = new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
            throw errorOut;
        }
        
        try{
            if(this.alarmCollection.find(element => element.id === id)){
                console.error(`будильник с таким id = ${id} уже существует.`);
            }
            else {
                this.alarmCollection.push({time:time, id:id,callback:callback }); 
            }
        }
        catch(errorOut){
            return errorOut;
        }
    }

    removeClock(id){
        const lengtArrBeforDelete = this.alarmCollection.length;
       
        this.alarmCollection.splice(this.alarmCollection.findIndex(element => element.id === id),1)
        const lengtArrAfterDelete = this.alarmCollection.length;
        const resoltDelete = (lengtArrBeforDelete !== lengtArrAfterDelete);
        return resoltDelete;
    }

    getCurrentFormattedTime() {
       const timeHoursMinutesNow = (new Date().toTimeString()).slice(0,5);
        return  timeHoursMinutesNow;
    }

   start(time){
        const thisAlarmCollection = this.alarmCollection;
        const timeHoursMinutesNow = this.getCurrentFormattedTime();
               
        function findTime(element) {
            if(element.time == time){
                return element;   
            } 
        }

        function checkClock(element) {
            if(element.time == timeHoursMinutesNow){
                thisAlarmCollection[thisAlarmCollection.findIndex(element => element.time === time)].callback();
            }
        };

        if(this.timerId == null) {
            this.timerId = 1000;
        }

        function forEachCall(){
            thisAlarmCollection.forEach(checkClock);
        }

        this.timerId = setInterval(forEachCall, this.timerId) 
    }

    stop(){
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        function printCall(element) {
            console.log(`Будильник № ${element.id} заведен на ${element.time}`)   

        }

        console.log(`Печать всех будильников в количестве ${element.lenght}`);
        this.alarmCollection.forEach(printCall);
    }

    clearAlarms(){
        clearInterval(this.timerId);
        this.timerId = null;
        this.alarmCollection = []; 
    }
}