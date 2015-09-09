describe('pigLatinize', function() {
  it("check if the first element is a vowel and add AY at the end.", function(){
    expect(pigLatinize("apple")).to.equal("appleay");
  });

  it("check if the begins with one consonants moves the first consonant to the end adds AY after.", function(){
    expect(pigLatinize("potography")).to.equal("otographypay");
  });

  it("check if the begins with one or more consonants, move all of the first consecutive ones to the end, and add AY after.", function(){
    expect(pigLatinize("photography")).to.equal("otographyphay");
  });
});

describe('isConsonant', function() {
  it("check if the letter is a consonant", function(){
    expect(isConsonant("photography")).to.equal(true)
  });
});
