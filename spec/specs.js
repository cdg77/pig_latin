describe('pigLatinize', function() {
  it("check if the first element is a vowel and add AY at the end.", function(){
    expect(pigLatinize("apple")).to.equal("appleay");
  });

  it("check if the begins with one or more consonants, move all of the first consecutive ones to the end, and add AY after.", function(){
    expect(pigLatinize("photography")).to.equal("otographyphay");
  });
});
