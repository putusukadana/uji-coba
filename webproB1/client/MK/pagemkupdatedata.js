
function updatedata(){
    let kode = document.getElementById("txkodemk").value;
    let nama = document.getElementById("txnamamk").value;
    let sms = document.getElementById("txsms").value;

    let dta = "kode="+kode+"&nama="+nama+"&smstr="+sms;
    const gh = new XMLHttpRequest();
    gh.open("post","http://localhost/webproB1/server/MK/dtmkupdate.php");
    gh.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    gh.send(dta);
    // console.log(dta);

    gh.onload = function(){
        const dta = JSON .parse(this.responseText);
        
        if(dta["sukses"]){
            document.getElementById("pesan").style.display="block";
        }
        setTimeout(()=>{
            window.location.href="http://localhost/webproB1/client/MK/index.php?p=matakuliah";
        },1500);
    };
}
