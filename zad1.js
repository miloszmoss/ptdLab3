const fs = require('fs');
const Base = require('./Base');

class Zad1 extends Base {
  constructor() {
    super();
    this.index = [];
    this.dataZa = [];
    this.dataZp = [];
    this.zad2ZaIndex = [];
    this.zad2ZaData = [];
    this.zad2ZpIndex = [];
    this.zad2ZpData = [];
    this.zad3Za = [];
    this.zad3Zp = [];
    this.zad3ZaIntegral = [];
    this.zad3ZpIntegral = [];
    this.zad4Za = [];
    this.zad4Zp = [];
  }
  gen(Z, data) {
    for (let j = 0; j < this.bits.length; j++) {
      Z(j, data);
    }
  }
  getIndex() {
    const max = this.Tb * this.bits.length;
    for (let i = 0; i < max; i++) {
      this.index.push(i);
    }
  }
  integral(array, newArray) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (i % 100 === 0) {
        sum = 0;
      }
      sum += (1 / array.length) * array[i];
      newArray.push(sum);
    }
  }
  init() {
    this.getIndex();
    this.gen(this.Za, this.dataZa);
    this.gen(this.Zp, this.dataZp);

    const zad2ZaK = this.dataZa.length;
    const zad2ZpK = this.dataZp.length;

    this.X(zad2ZaK, this.dataZa, this.zad2ZaIndex, this.zad2ZaData);
    this.X(zad2ZpK, this.dataZp, this.zad2ZpIndex, this.zad2ZpData);

    // zad 3
    this.zad3Za = this.dataZa.map(
      (item, i) => item * (this.A2 * Math.sin(2 * Math.PI * this.fn * i))
    );
    this.zad3Zp = this.dataZp.map(
      (item, i) => item * Math.sin(2 * Math.PI * this.fn * i)
    );
    // inegral
    this.integral(this.zad3Za, this.zad3ZaIntegral);
    this.integral(this.zad3Zp, this.zad3ZpIntegral);
    // zad 4
    this.zad4Za = this.zad3ZaIntegral.map(item => (item > 0.3 ? 1 : 0));
    this.zad4Zp = this.zad3ZpIntegral.map(item => (item > 0.075 ? 1 : 0));
    //
    const { index, imgOpts } = this;
    // zad1 Za
    const { dataZa } = this;
    const traceZad1Za = this.trace(index, dataZa);
    const figZad1Za = this.figure(traceZad1Za);
    this.printPNG(figZad1Za, imgOpts, 'charts/zad1Za.png');
    // zad1 Zp
    const { dataZp } = this;
    const traceZad1Zp = this.trace(index, dataZp);
    const figZad1Zp = this.figure(traceZad1Zp);
    this.printPNG(figZad1Zp, imgOpts, 'charts/zad1Zp.png');
    // zad2 Za
    const { zad2ZaData } = this;
    const trace2Za = this.trace(index, zad2ZaData);
    const fig2Za = this.figure(trace2Za);
    this.printPNG(fig2Za, imgOpts, 'charts/zad2Za.png');
    // zad2 Zp
    const { zad2ZpData } = this;
    const trace2Zp = this.trace(index, zad2ZpData);
    const fig2Zp = this.figure(trace2Zp);
    this.printPNG(fig2Zp, imgOpts, 'charts/zad2Zp.png');
    // zad3 Za
    const { zad3Za } = this;
    const trace3Za = this.trace(index, zad3Za);
    const fig3Za = this.figure(trace3Za);
    this.printPNG(fig3Za, imgOpts, 'charts/zad3Za.png');
    // zad3 Zp
    const { zad3Zp } = this;
    const trace3Zp = this.trace(index, zad3Zp);
    const fig3Zp = this.figure(trace3Zp);
    this.printPNG(fig3Zp, imgOpts, 'charts/zad3Zp.png');
    // zad3 ZaIntegral
    const { zad3ZaIntegral } = this;
    const trace3ZaIntegral = this.trace(index, zad3ZaIntegral);
    const fig3ZaIntegral = this.figure(trace3ZaIntegral);
    this.printPNG(fig3ZaIntegral, imgOpts, 'charts/zad3ZaIntegral.png');
    // zad3 ZpIntegral
    const { zad3ZpIntegral } = this;
    const trace3ZpIntegral = this.trace(index, zad3ZpIntegral);
    const fig3ZpIntegral = this.figure(trace3ZpIntegral);
    this.printPNG(fig3ZpIntegral, imgOpts, 'charts/zad3ZpIntegral.png');
    // zad4 Za
    const { zad4Za } = this;
    const trace4Za = this.trace(index, zad4Za);
    const fig4Za = this.figure(trace4Za);
    this.printPNG(fig4Za, imgOpts, 'charts/zad4Za.png');
    // zad4 Zp
    const { zad4Zp } = this;
    const trace4Zp = this.trace(index, zad4Zp);
    const fig4Zp = this.figure(trace4Zp);
    this.printPNG(fig4Zp, imgOpts, 'charts/zad4Zp.png');
  }
}

const zad1 = new Zad1();
zad1.init();
