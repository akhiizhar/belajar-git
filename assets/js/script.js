// DOM (DOCUMENT 0BJECT MODEL)
const tipedriverEl = document.getElementById("tipedriver");
const tanggalEl = document.getElementById("tanggal");
const jamEl = document.getElementById("jam");
const penumpangEl = document.getElementById("penumpang");
const cariEl = document.getElementById("cari");
const carResult = document.getElementById("searchResult");

const inputData = {
	tipedriver: "",
	tanggal: "",
	waktu: "",
	jumlahPenumpang: "",
};

// trigger
cariEl.addEventListener("click", function (e) {
	inputData.tipedriver = tipedriverEl.value;
	inputData.tanggal = tanggalEl.value;
	inputData.waktu = jamEl.value;
	inputData.jumlahPenumpang = penumpangEl.value;
	// console.log(inputData);
	getData(inputData);
});

// link file yang bisa mengambil, update, delete dari internet = fetch
// async fungsinya untuk nunggu,
async function getData(inputData) {
	let itemHTML = "";
	const getCars = await fetch(
		"https://api-car-rental.binaracademy.org/customer/car"
	);
	const result = await getCars.json();
	const data = Binar.populateCars(result);

	const filteredData = data.filter(function (e) {
		return e.typeDriver === inputData.tipedriver;
	});
	console.log(filteredData);
	// Tampilan untuk mengetahui udah bisa terfilter atau belum.

	filteredData.forEach((car) => {
		itemHTML += `
            <div class="col-4">
            <img class="img-fluid" src="${car.image}" />
            <h3>${car.name}</h3>
            </div>
        `;
	});
	carResult.innerHTML = itemHTML; // jika itemnya puntuk manggilnya sudah dibuatkan varibael, maka buat langsung, jika tidak ada variabelnya maka gunakan doc.getelementbyid
}

// 	carResult.innerHTML = "";
// 	for (let i = 0; i < filteredData.length; i++) {
// 		const car = filteredData[i];
// 		// console.log(car);
// 		carResult.innerHTML += `<div class="col-12 col-md-6 col-lg-4 my-4 ">
// 						<div class="card">
// 							<img
// 								src="${car.image}"
// 								class="card-img-top"
// 								alt="image"
// 								height="200px"
// 								width="200%" />
// 							<div class="card-body">
//                             <p class="card-text">
//                             ${car.name} <span
//                             </p>
//                             <h5 class="card-title">${new Intl.NumberFormat(
// 															"id-ID",
// 															{ style: "currency", currency: "IDR" }
// 														).format(car.price)} / Hari</h5>
//                             <p style="overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${
// 															car.description
// 														}</p>
//                                 <p class="card-text">
//                                 <img src="assets/img/user.svg"/> ${
// 																	car.capacity
// 																}
// 								</p>
//                                 <p class="card-text">
//                                 <img src="assets/img/setting.svg"/>
//                                     ${car.category}
// 								</p>
//                                 <p class="card-text">
//                                 <img src="assets/img/tahun.svg"/>
//                                     ${car.tahun}
// 								</p>
// 								<a href="#" class="btn btn-success py-auto w-100 d-flex align-items-center justify-content-center" style="min-height: 48px;">Pilih Mobil</a>
// 							</div>
// 						</div>
// 					</div>`;
// 	}
// }
