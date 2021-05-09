var sundayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var mondayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var tuesdayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var wednesdayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var thursdayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var fridayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];
var saturdayTime = ['4:00','4:20','4:40','5:00','5:20','5:40','6:00','8:00','8:20','8:40','9:00','9:20','9:40','10:00','10:20','10:40','11:00'];

var select = document.getElementById('time');
var timeRem = document.getElementsByTagName('option');




 $(document).ready(function () {
    $("#day").change(function () {  
        var selectedDay = $(this).val();
        if (selectedDay == "Thursday 13/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = thursdayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                console.log(data);
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = thursdayTime[i];
                    opt.innerHTML = thursdayTime[i];
                    if(!alreadySelectedArray.includes(thursdayTime[i])){
                        select.appendChild(opt);
                    }
                }
            });
        } else if (selectedDay == "Friday 14/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = fridayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = fridayTime[i];
                    opt.innerHTML = fridayTime[i];
                    if(!alreadySelectedArray.includes(fridayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        } else if (selectedDay == "Saturday 15/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = saturdayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = saturdayTime[i];
                    opt.innerHTML = saturdayTime[i];
                    if(!alreadySelectedArray.includes(saturdayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        } else if (selectedDay == "Sunday 9/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = sundayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = sundayTime[i];
                    opt.innerHTML = sundayTime[i];
                    if(!alreadySelectedArray.includes(sundayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        } else if (selectedDay == "Monday 10/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = mondayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = mondayTime[i];
                    opt.innerHTML = mondayTime[i];
                    if(!alreadySelectedArray.includes(mondayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        } else if (selectedDay == "Tuesday 11/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = tuesdayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = tuesdayTime[i];
                    opt.innerHTML = tuesdayTime[i];
                    if(!alreadySelectedArray.includes(tuesdayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        } else if (selectedDay == "Wednesday 12/5") {
            $.get(`done?day=${selectedDay}`, function(data, status){
                let len = wednesdayTime.length;
                var alreadySelectedArray = [];
                $("#time").html("");
                $.each(data,function(key,val){
                    alreadySelectedArray.push(val.time);
                });
                
                for (var i = 0 ; i < len ; i++){
                    var opt = document.createElement('option');
                    opt.value = wednesdayTime[i];
                    opt.innerHTML = wednesdayTime[i];
                    if(!alreadySelectedArray.includes(wednesdayTime[i])){
                        select.appendChild(opt);
                    }
                }
              });
        }
    });
}); 


