// select option
const monthOptions = [
    { value: '01', label: '01', day: 31},
    { value: '02', label: '02', day: 28},
    { value: '03', label: '03', day: 31},
    { value: '04', label: '04', day: 30},
    { value: '05', label: '05', day: 31},
    { value: '06', label: '06', day: 30},
    { value: '07', label: '07', day: 31},
    { value: '08', label: '08', day: 31},
    { value: '09', label: '09', day: 30},
    { value: '10', label: '10', day: 31},
    { value: '11', label: '11', day: 30},
    { value: '12', label: '12', day: 31},
]; 
const day31 = [
    { value: '01', label: '01'},
    { value: '02', label: '02'},
    { value: '03', label: '03'},
    { value: '04', label: '04'},
    { value: '05', label: '05'},
    { value: '06', label: '06'},
    { value: '07', label: '07'},
    { value: '08', label: '08'},
    { value: '09', label: '09'},
    { value: '10', label: '10'},
    { value: '11', label: '11'},
    { value: '12', label: '12'},
    { value: '13', label: '13'},
    { value: '14', label: '14'},
    { value: '15', label: '15'},
    { value: '16', label: '16'},
    { value: '17', label: '17'},
    { value: '18', label: '18'},
    { value: '19', label: '19'},
    { value: '20', label: '20'},
    { value: '21', label: '21'},
    { value: '22', label: '22'},
    { value: '23', label: '23'},
    { value: '24', label: '24'},
    { value: '25', label: '25'},
    { value: '26', label: '26'},
    { value: '27', label: '27'},
    { value: '28', label: '28'},
    { value: '29', label: '29'},
    { value: '30', label: '30'},
    { value: '31', label: '31'}
]
// 年份修改
  function changeYear() {
    $("#myMonth").val('01'); // 月份 = 01
    $("#myDate").html('');
    for(let x=0;x<31;x++){
		  $("#myDate").append(`<option value=${day31[x].value}>${day31[x].label}</option>`);
    }
    $("#myDate").val('01');  // 日期 = 01
  }
  // 月份修正時，就要更日期天數
  function changeDay(){
    let thisMonth = $("#myMonth").val();
    let thisDay = 31;
    
    // 先找到正確的當月天數
    for(let x=0;x<monthOptions.length;x++){
      if (monthOptions[x].value === thisMonth){
        thisDay = monthOptions[x].day;
      }
    } 
    $("#myDate").val('01');  // 日期 = 01
    // 2月份還得判斷平年、閏年
    if (thisMonth === '02'){
      let num = parseInt($('#myYear').val()); // 年份 整數
      // alert('年份 ' + num);
      // alert((num%4===0&&num%100!==0||num%400===0)?(num+"年是閏年"):(num+"年不是閏年"));
      if ((num%4===0&&num%100!==0||num%400===0)){
        thisDay +=1;  // 這是閏年 天數 + 1
      }
    }
    // alert('change month ' + thisMonth + " day " + thisDay);
    $("#myDate").html('');
    for(let x=0;x<thisDay;x++){
			$("#myDate").append(`<option value=${day31[x].value}>${day31[x].label}</option>`);
    } 
	}
	// 年份寫入
	const yeraStart = '1920';
	const yearEnd = '2020';

	for(let x=yearEnd;x>yeraStart;x--){
		$("#myYear").append(`<option value=${x}>${x}</option>`);
	} 
	for(let x=0;x<monthOptions.length;x++){
		$("#myMonth").append(`<option value=${monthOptions[x].value}>${monthOptions[x].label}</option>`);
	} 
	for(let x=0;x<day31.length;x++){
		$("#myDate").append(`<option value=${day31[x].value}>${day31[x].label}</option>`);
	} 
	$('#btnSend').on('click', function(){
		// 計算年齡
		var now = new Date();
		var nowYear = now.getFullYear();
		var nowMonth = now.getMonth()+1;
		var nowDay = now.getDate();
    var birthYear = parseInt($('#myYear').val());
    var birthMonth = parseInt($('#myMonth').val());
		var birthDate = parseInt($('#myDate').val());
		var yearDiff = nowYear - birthYear;
		var myAge = nowYear - birthYear;
		if(yearDiff < 18){
			$('#myAge').html(myAge);
			alert('您還未滿18歲唷！');
      return false ;
		}
		if(yearDiff === 18 && nowMonth < birthMonth){
			myAge = myAge - 1
			$('#myAge').html(myAge);
      alert('您還未滿18歲唷！');
      return false ;
    }
    if(yearDiff === 18 && nowMonth === birthMonth && nowDay < birthDate){
			myAge = myAge - 1
			$('#myAge').html(myAge);
      alert('您還未滿18歲唷！');
      return false ;
		}
		// alert('您現在' + myAge + '歲')
		$('#myAge').html(myAge);
		alert('您已18歲了');
})