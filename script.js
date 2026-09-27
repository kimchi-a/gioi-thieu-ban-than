// ===============================
// XEM MẪU CV
// ===============================
function xemCV(tenCV) {

    const modal = document.getElementById("cvModal");
    const modalTitle = document.getElementById("modalTitle");

    if (modal && modalTitle) {
        modalTitle.textContent = tenCV;
        modal.style.display = "block";
    }
}


// ===============================
// ĐÓNG MẪU CV
// ===============================
function dongCV() {

    const modal = document.getElementById("cvModal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ===============================
// CHỌN MẪU CV
// ===============================
function chonMauCV() {

    alert("Bạn đã chọn mẫu CV này!");

    dongCV();
}


// ===============================
// LỌC MẪU CV
// ===============================
function locCV(loai) {

    const cards = document.querySelectorAll(".cv-card");

    cards.forEach(function(card) {

        if (
            loai === "all" ||
            card.getAttribute("data-type") === loai
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ===============================
// TÌM KIẾM MẪU CV
// ===============================
function timCV() {

    const input = document.getElementById("search");

    if (!input) {
        return;
    }

    const keyword = input.value.toLowerCase();

    const cards = document.querySelectorAll(".cv-card");

    cards.forEach(function(card) {

        const name = card
            .getAttribute("data-name")
            .toLowerCase();

        if (name.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


// ===============================
// TẠO CV
// ===============================
function taoCV(event) {

    event.preventDefault();

    const hoTen = document.getElementById("hoTen");
    const email = document.getElementById("email");
    const sdt = document.getElementById("sdt");
    const ngaySinh = document.getElementById("ngaySinh");
    const diaChi = document.getElementById("diaChi");
    const mucTieu = document.getElementById("mucTieu");
    const hocVan = document.getElementById("hocVan");

    const hoTenError = document.getElementById("hoTenError");
    const emailError = document.getElementById("emailError");
    const sdtError = document.getElementById("sdtError");
    const ngaySinhError = document.getElementById("ngaySinhError");
    const diaChiError = document.getElementById("diaChiError");
    const mucTieuError = document.getElementById("mucTieuError");
    const hocVanError = document.getElementById("hocVanError");

    const cvSuccess = document.getElementById("cvSuccess");


    // Xóa thông báo cũ
    hoTenError.textContent = "";
    emailError.textContent = "";
    sdtError.textContent = "";
    ngaySinhError.textContent = "";
    diaChiError.textContent = "";
    mucTieuError.textContent = "";
    hocVanError.textContent = "";
    cvSuccess.textContent = "";


    let isValid = true;


    // KIỂM TRA HỌ TÊN
    const ten = hoTen.value.trim();

    if (ten === "") {

        hoTenError.textContent =
            "Họ tên không được để trống.";

        isValid = false;

    } else if (ten.length < 5 || ten.length > 50) {

        hoTenError.textContent =
            "Họ tên phải có từ 5 đến 50 ký tự.";

        isValid = false;
    }


    // KIỂM TRA EMAIL
    const emailValue = email.value.trim();

    if (emailValue === "") {

        emailError.textContent =
            "Email không được để trống.";

        isValid = false;

    } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        .test(emailValue)
    ) {

        emailError.textContent =
            "Email không đúng định dạng.";

        isValid = false;
    }


    // KIỂM TRA SỐ ĐIỆN THOẠI
    const sdtValue = sdt.value.trim();

    if (sdtValue === "") {

        sdtError.textContent =
            "Số điện thoại không được để trống.";

        isValid = false;

    } else if (!/^0\d{9}$/.test(sdtValue)) {

        sdtError.textContent =
            "Số điện thoại phải gồm đúng 10 số và bắt đầu bằng 0.";

        isValid = false;
    }


    // KIỂM TRA NGÀY SINH
    if (ngaySinh.value === "") {

        ngaySinhError.textContent =
            "Ngày sinh không được để trống.";

        isValid = false;
    }


    // KIỂM TRA ĐỊA CHỈ
    if (diaChi.value.trim() === "") {

        diaChiError.textContent =
            "Địa chỉ không được để trống.";

        isValid = false;
    }


    // KIỂM TRA MỤC TIÊU
    if (mucTieu.value.trim() === "") {

        mucTieuError.textContent =
            "Mục tiêu nghề nghiệp không được để trống.";

        isValid = false;
    }


    // KIỂM TRA HỌC VẤN
    if (hocVan.value.trim() === "") {

        hocVanError.textContent =
            "Học vấn không được để trống.";

        isValid = false;
    }


    // NẾU TẤT CẢ ĐỀU ĐÚNG
    if (isValid) {

        cvSuccess.textContent =
            "Tạo CV thành công!";
    }
}


// ===============================
// GỬI LIÊN HỆ
// ===============================
function guiLienHe(event) {

    event.preventDefault();

    const ten = document.getElementById("lienHeTen");
    const email = document.getElementById("lienHeEmail");
    const noiDung = document.getElementById("noiDung");
    const bao = document.getElementById("lienHeBao");

    bao.textContent = "";

    let isValid = true;


    // KIỂM TRA HỌ TÊN
    const tenValue = ten.value.trim();

    if (tenValue === "") {

        alert("Họ và tên không được để trống.");

        isValid = false;

    } else if (tenValue.length < 5 || tenValue.length > 50) {

        alert("Họ tên phải có từ 5 đến 50 ký tự.");

        isValid = false;
    }


    // KIỂM TRA EMAIL
    const emailValue = email.value.trim();

    if (emailValue === "") {

        alert("Email không được để trống.");

        isValid = false;

    } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        .test(emailValue)
    ) {

        alert("Email không đúng định dạng.");

        isValid = false;
    }


    // KIỂM TRA NỘI DUNG
    if (noiDung.value.trim() === "") {

        alert("Nội dung không được để trống.");

        isValid = false;
    }


    // GỬI THÀNH CÔNG
    if (isValid) {

        bao.textContent =
            "Gửi liên hệ thành công!";
    }
}


// ===============================
// CLICK RA NGOÀI ĐỂ ĐÓNG MODAL
// ===============================
window.onclick = function(event) {

    const modal = document.getElementById("cvModal");

    if (modal && event.target === modal) {

        modal.style.display = "none";
    }
};