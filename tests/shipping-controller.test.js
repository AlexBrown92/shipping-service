//Declare Variables
var chai = require ('chai')
var expect = chai.expect
var ShippingController = require('../src/controllers/shipping-controller')

// File tests/shipping-controller.test.js
describe('Shipping Controller', function() {
    var shippingCtrl = new ShippingController()

    it('Should calculate correct shipping ', async function(){
        let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard'})
        expect(shipping).to.equal(0.5)
    })
})