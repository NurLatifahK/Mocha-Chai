
function HiitungVolumeBola(r){
    // Memastikan parameter r tidak kosong
    if (r === undefined || r === null) return "Jari jari tidak boleh kosong"
    // Memastikan bahwa r adalah tipe data angka
    if (typeof r !== 'number') return "Jari jari harus bertipe data angka"

    let RumusBola = (4 / 3) * Math.PI * Math.pow(r, 3)

    return RumusBola

}
export default HiitungVolumeBola
