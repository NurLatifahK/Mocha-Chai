import { expect } from "chai";
import Rumus from "./rumus.js";

let RumusBola
describe('Testing rumus bola', function(){
    // Positive
    it('Hitung volume bola dengan parameter valid', function(){
        const volume = Rumus.HitungVolume(30)

        expect(volume).to.equal(113.040)
    })

    // Negative
    it('Hitung volume bola dengan jari jari kosong', function(){
        const volume = {}

        expect(volume).to.equal('jari jari tidak boleh kosong')
    })

    it('Hitung volume bola dengan jari jari string', function(){
        const volume = Rumus.HitungVolume('Tiga Puluh')

        expect(volume).to.equal('jari jari tidak boleh bertipe data string')
    })
})