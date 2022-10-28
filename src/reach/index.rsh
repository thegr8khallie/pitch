'reach 0.1';

export const main = Reach.App(() => {
  //User
  const User = Participant('User', {
    nftId: Token,
    wallet: Address,
  });
  //Pitch
  const Pitch = Participant('Pitch', {
    getBuyRequest: Fun([Token, Address], Bytes(64))
  });
  
  init();

  User.only(() => {
    const nftId = declassify(interact.nftId);
    const wallet = declassify(interact.wallet);
  });
  
  User.publish(nftId, wallet);
  commit();

  Pitch.only(() => {
    const nftSent = declassify(interact.getBuyRequest(nftId, wallet))
  })
  const amt = 1;
  Pitch.pay([[amt, nftId]]);
  transfer(amt, nftId).to(User);
  commit();
  Pitch.publish(nftSent)
  commit();
  exit();
//
})