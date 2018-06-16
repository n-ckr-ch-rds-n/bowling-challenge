describe("Tenpin", function() {

  it('frame sums two rolls and adds them to the score card', function() {
    var tenpin = new Tenpin();
    tenpin.frame(3,4);
    expect(tenpin.scoreCard).toEqual([7])
  })

  it('if the two rolls add up to ten spare is switched to true', function() {
    var tenpin = new Tenpin();
    tenpin.frame(6,4);
    expect(tenpin.spare).toEqual(true);
  })

  it('if the first roll is 10 strike is switched to true', function() {
    var tenpin = new Tenpin();
    tenpin.frame(10,0);
    expect(tenpin.strike).toEqual(true);
  })





});
