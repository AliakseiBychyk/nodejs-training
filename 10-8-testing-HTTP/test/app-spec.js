const request = require('supertest')
const { expect } = require('chai');
const cheerio = require('cheerio')
const rewire = require('rewire');
const app = rewire('../app');

describe("Dictionary App", function () {

    it("Loads the home page", function (done) {
        request(app).get('/').expect(200).end((err, res) => {
            const $ = cheerio.load(res.text)
            const pageHeading = $('body>h1:first-child').text()
            expect(pageHeading).to.equal('Skier Dictionary')
            done()
        })
    });

    describe("Dictionary API", function () {

        beforeEach(function () {

          this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api", function (done) {
            request(app)
                .get('/dictionary-api')
                .expect(200)
                .end((err, res) => {
                    const terms = JSON.parse(res.text)
                    expect(terms).to.deep.equal(this.defs)
                    done()
                })
        });

        it("POSTS dictionary-api", function (done) {
            request(app)
                .post('/dictionary-api')
                .send({ "term": "Three", "defined": "Term Three Defined" })
                .expect(200)
                .end(done)
        });

        it("DELETES dictionary-api", function (done) {
            request(app)
                .delete('/dictionary-api/One')
                .expect(200)
                .end(done)
        });

    });

});