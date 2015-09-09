describe('pigLatinize', function() {
  it("check if the first element is a vowel and add AY at the end.", function(){
    expect(pigLatinize("apple")).to.equal("appleay");
  });

  it("check if the begins with one or more consonants, move the first consecutive one to the end and add AY after it.", function(){
    expect(pigLatinize("photography")).to.equal("otographyphay");
  });
});
