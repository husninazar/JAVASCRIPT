// Input data

const namaPegawai = "nama_kalian";
const jabatan = "manager";
const gajiPokok = 10000000;
const isMenikah = true;

// Hitung tunjangan jabatan
const tunjanganJabatan = 0.1 * gajiPokok;

// Hitung tunjangan keluarga jika pegawai sudah menikah
let tunjanganKeluarga = 0;
if (isMenikah) {
  tunjanganKeluarga = 0.1 * gajiPokok;
}

// Hitung BPJS
const bpjs = 0.1 * gajiPokok;

// Hitung total penghasilan
const totalPenghasilan = gajiPokok + tunjanganJabatan + tunjanganKeluarga + bpjs;

// Cetak data pegawai dan rincian gaji
console.log(`Nama Pegawai: ${namaPegawai}`);
console.log(`Jabatan: ${jabatan}`);
console.log(`Gaji Pokok: Rp. ${gajiPokok}`);
console.log(`Tunjangan Jabatan: Rp. ${tunjanganJabatan}`);
console.log(`Tunjangan Keluarga: Rp. ${tunjanganKeluarga}`);
console.log(`BPJS: Rp. ${bpjs}`);
console.log(`Total Penghasilan: Rp. ${totalPenghasilan}`);
