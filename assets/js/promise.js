function nonton(tiketHabis) {
	return new Promise(function (resolve, reject) {
		if (tiketHabis) {
			reject("Tidak Jadi Nonton");
		}
		setTimeout(function () {
			resolve("Jadi Nonton");
		}, 1000);
	});

	console.log("a"); // tidak bisa dijalankan, karena diberhentikan dengan return.
}

console.log("Ayo Nonton");
nonton(true)
	.then(function (res) {
		console.log(res);
	})
	.catch(function (err) {
		console.log(err);
	});

console.log("Nonton Deadpool");
console.log(res);
