class Weapon {
  constructor(damage, reloadSpeed, fireRate, magazineSize) {
    this.damage = damage;
    this.reloadSpeed = reloadSpeed;
    this.fireRate = fireRate;
    this.magazineSize = magazineSize;

    this.bulletLeftInMagazine = magazineSize;
  }
  get timerPerShot() {
    return 1 / this.fireRate;
  }

  fire(startTime = 0) {
    if (this.bulletLeftInMagazine < 1) {
      throw new error('Not enough bullets in the magazine!');

      let whenCanFireAgain = startTime + this.timerPerShot;

      --this.bulletLeftInMagazine;

      return new WeaponShot(startTime, whenCanFireAgain, this.damage);
    }
  }
}
