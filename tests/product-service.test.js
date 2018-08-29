// tests/product_service.test.js
var chai = require('chai')
var expect = chai.expect
var productService = require('../src/services/product-service')

describe('Product Service', function () {

    it('Should call HTTP Endpoint',async function () {
        let weight = await productService.getProductWeight('13')
        expect(weight).to.equal(15.5)
    })
})