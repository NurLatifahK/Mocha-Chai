import { expect } from "chai";
import HiitungVolumeBola from "./rumus.js";

describe('Testing rumus bola', function(){
    // Positive
    it('Hitung volume bola dengan parameter valid', function(){
        //const volume = Rumus.HitungVolume(30)
        const r = 30
        const result = HiitungVolumeBola(r)

        expect(result).to.equal(113097.33552923254)
    })

    // Negative
    it('Hitung volume bola dengan jari jari kosong', function(){
        const r = null
        const hasil = HiitungVolumeBola(r)

        expect(hasil).to.equal('Jari jari tidak boleh kosong')
    })

    it('Hitung volume bola dengan jari jari string', function(){
        //const volume = Rumus.HitungVolume('Tiga Puluh')
        const r = 'Tiga Puluh'
        const hasil = HiitungVolumeBola(r)

        expect(hasil).to.equal('Jari jari harus bertipe data angka')
    })
})
