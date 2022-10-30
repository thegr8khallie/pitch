'reach 0.1';

export const main = Reach.App(() => {
  const Pitch = Participant('Pitch', {
    getSale: Fun([], Object({
      nftId: Token,
      price: UInt,
      beneficiary: Address
    })),
    saleReady: Fun([], Null),
  });
  const User = Participant('User', {
    showOutcome: Fun([], Null),
    deductPIT: Fun([], Null)
  });
  init();

  Pitch.only(() => {
    const {nftId, price, beneficiary} = declassify(interact.getSale());
  });
  Pitch.publish(nftId, price, beneficiary);
  const amt = 1;
  commit();
  Pitch.pay([[amt, nftId]]);
  Pitch.interact.saleReady();
  transfer(amt, nftId).to(beneficiary);
  User.interact.showOutcome(); 
  User.interact.deductPIT();
  commit();
  exit();
})