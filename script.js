const yearOptions = [
    { value: '2014', label: '2014'},
    { value: '2013', label: '2013'},
    { value: '2012', label: '2012'},
    { value: '2011', label: '2011'},
    { value: '2010', label: '2010'},
    { value: '2009', label: '2009'},
    { value: '2008', label: '2008'},
    { value: '2007', label: '2007'},
    { value: '2006', label: '2006'},
    { value: '2005', label: '2005'},
    { value: '2004', label: '2004'},
    { value: '2003', label: '2003'},
    { value: '2002', label: '2002'},
    { value: '2001', label: '2001'},
    { value: '2000', label: '2000'},
    { value: '1999', label: '1999'},
    { value: '1998', label: '1998'},
    { value: '1997', label: '1997'},
    { value: '1996', label: '1996'},
    { value: '1995', label: '1995'},
    { value: '1994', label: '1994'},
    { value: '1993', label: '1993'},
    { value: '1992', label: '1992'},
    { value: '1991', label: '1991'},
    { value: '1990', label: '1990'},
    { value: '1989', label: '1989'},
    { value: '1988', label: '1988'},
    { value: '1987', label: '1987'},
    { value: '1986', label: '1986'},
    { value: '1985', label: '1985'},
    { value: '1984', label: '1984'},
    { value: '1983', label: '1983'},
    { value: '1982', label: '1982'},
    { value: '1981', label: '1981'},
    { value: '1980', label: '1980'},
    { value: '1989', label: '1979'},
    { value: '1988', label: '1978'},
    { value: '1987', label: '1977'},
    { value: '1986', label: '1976'},
    { value: '1985', label: '1975'},
    { value: '1984', label: '1974'},
    { value: '1983', label: '1973'},
    { value: '1982', label: '1972'},
    { value: '1981', label: '1971'},
    { value: '1980', label: '1970'},
  ]; 
  const monthOptions = [
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
  const day30 = [
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
    { value: '30', label: '30'}
  ]
  const day29 = [
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
    { value: '29', label: '29'}
  ]
  const day28 = [
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
    { value: '28', label: '28'}
  ]
    for(let x=0;x<yearOptions.length;x++){
        $("#myYear").append(`<option value=${yearOptions[x].value}>${yearOptions[x].label}</option>`);
    } 
    for(let x=0;x<monthOptions.length;x++){
        $("#myMonth").append(`<option value=${monthOptions[x].value}>${monthOptions[x].label}</option>`);
    } 
    for(let x=0;x<day31.length;x++){
        $("#myDate").append(`<option value=${day31[x].value}>${day31[x].label}</option>`);
    } 

// 年齡計算
$('#btnSend').on('click', function(){
    var birthYear = document.getElementById('myYear').value;
    var birthMonth = document.getElementById('myMonth').value;
    var birthDate = document.getElementById('myDate').value;
    let myBirth = birthYear + '-' +  birthMonth + '-' + birthDate
    age(myBirth)
    // console.log(birthYear, '-', birthMonth , '-', birthDate)
})
function age(x){
    var birth = x;
    birth = Date.parse(birth.replace('/-/g', "/"));
    if (birth) {
        var year = 1000 * 60 * 60 * 24 * 365;
        var now = new Date();
        var birthday = new Date(birth);
        var age = parseInt((now - birthday) / year);
    }
    console.log((now - birthday) / year);
    document.getElementById('myAge').innerHTML = age;
    if(age < 18){
        alert('您未滿18歲喔！')
    }
}