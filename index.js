// bài 1
document.getElementById('btnDanhGia').onclick = function(){
    let diemChuan = +document.getElementById('diemChuan').value; 
    let diem1 = +document.getElementById('diem1').value; 
    let diem2 = +document.getElementById('diem2').value; 
    let diem3 = +document.getElementById('diem3').value; 
    let uuTien = document.getElementById('uuTien').value
    let khuVuc = document.getElementById('khuVuc').value; 
    let ketQua = '';
    let diemUuTien = 0;
    let diem3Mon = diem1 + diem2 + diem3;
    let diemTongKet =0;
    if(diem1 == 0 && diem2==0 && diem3 == 0){
        ketQua = 'Rớt';
    }else{
        if(khuVuc = 'KVA'){
            diemUuTien +=2;
        }else if(khuVuc = 'KVB'){
            diemUuTien +=1;
        }else if(khuVuc = 'KVC'){
            diemUuTien +=0.5;
        }
        if(uuTien = 'uuTien1'){
            diemUuTien +=2.5;
        }
        else if(uuTien = 'uuTien2'){
            diemUuTien +=1.5;
        }
        else if(uuTien = 'uuTien3'){
            diemUuTien +=1;
        }
    }
    diemTongKet = diem3Mon + diemUuTien;
    if(diemTongKet >= diemChuan){
        ketQua = 'Đậu'
    }
    else{
        ketQua = 'Rớt'
    }
    document.getElementById('ket-qua-danh-gia').innerHTML = `thí sinh ${ketQua} kết quả đạt được là ${diemTongKet}`
}

// bài 2
document.getElementById('tienDien').onclick = function(){
    let name = document.getElementById('name').value;
    let soKw = +document.getElementById('soKW').value;
    
    let tongTien = 0;
    if(soKw <=50){
        tongTien = soKw *500;
    }else if(soKw >50 && soKw <100){
        tongTien = 50 * 500 + (soKw-50) * 650;
    }else if(soKw >=100 && soKw <=200){
        tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    }else if(soKw > 200 && soKw <=350){
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 150) * 1100;
    }else{
        tongTien = 50 * 500 + 50 * 650 + 100 * 850 + 150 *1100 + (soKw -350) * 1300;
    }
    document.getElementById('billDien').innerHTML = `${name} tiêu thụ điện lả ${soKw} số tiền là ${tongTien}`;
}

// bài 3 

document.getElementById('thueNop').onclick = function(){
    let hoTen = document.getElementById('hoTen').value;
    let thuNhap = +document.getElementById('thuNhap').value;
    let soNguoi = +document.getElementById('soNguoi').value;
    let chiuThue = thuNhap - 4000000 - soNguoi * 1600000;
  
    // Determine tax rate based on taxable income
    let taxRate = 0;
    if (chiuThue <= 60000000) {
      taxRate = 5;
    } else if (chiuThue <= 120000000) {
      taxRate = 10;
    } else if (chiuThue <= 210000000) {
      taxRate = 15;
    } else if (chiuThue <= 384000000) {
      taxRate = 20;
    } else if (chiuThue <= 624000000) {
      taxRate = 25;
    } else if (chiuThue <= 960000000) {
      taxRate = 30;
    } else {
      taxRate = 35;
    }
    let tienThue = chiuThue * taxRate / 100;
    document.getElementById('ket-qua-thue').innerHTML = `${hoTen} thu nhập năm ${thuNhap.toLocaleString()} thuế phải chịu là ${tienThue.toLocaleString()}`
}


// bài 4 
document.getElementById('customerType').onchange =function() {
    var customerType = document.getElementById('customerType').value;
    var connectionsGroup = document.getElementById('connectionsGroup');
    if (customerType === 'doanhNghiep') {
        connectionsGroup.classList.remove('hidden');
    } else {
        connectionsGroup.classList.add('hidden');
    }
}

document.getElementById('bntHoaDon').onclick = function() {
    var customerType = document.getElementById('customerType').value;
    var connections = +document.getElementById('connections').value;
    var premiumChannels = +document.getElementById('premiumChannels').value;
    var totalBill = 0;

    if (customerType === 'nhaDan') {
        totalBill = 4.5 + 20.5 + (7.5 * premiumChannels);
    } else if (customerType === 'doanhNghiep') {
        var baseServiceFee = 75;
        if (connections > 10) {
            baseServiceFee += (connections - 10) * 5;
        }
        totalBill = 15 + baseServiceFee + (50 * premiumChannels);
    }

    document.getElementById('totalBill').value = totalBill.toFixed(2) + ' $';
}