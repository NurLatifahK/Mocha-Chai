
class Rumus {
    HitungVolume(r) {
        // Memastikan parameter r tidak kosong
        if (r === undefined || r === null) {
            throw('jari jari tidak boleh kosong');
        }
        // Memastikan bahwa r adalah tipe data angka
        if (typeof r !== 'number') {
            throw('jari jari harus bertipe data angka');
        }

        // Hitung rumus volume bola
        return ((4 / 3) * Math.PI * Math.pow(r, 3));
    }
}

export default Rumus;
