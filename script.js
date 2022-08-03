let   date = new Date(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();
        

const captionString = `Food prices ≠ ${day}.${++month}.${year}`.replace(`≠`, `for`);

const   apple = `🍎`,
        applePrice = 10,
        appleCount = 3,
        appleSalePercent = 7,

        orange = `🍊`,
        orangePrice = 12,
        orangeCount = 2,
        orangeSalePercent = 3,
        
        kiwi = `🥝`,
        kiwiPrice = 15,
        kiwiCount = 10,
        kiwiCountryPercent = 10;

let applePercent = applePrice * appleCount - (applePrice * appleCount) / 100 * appleSalePercent;
let orangePercent = orangePrice * orangeCount - (orangePrice * orangeCount) / 100 * orangeSalePercent;
let kiwiPercentPlus = (kiwiPrice / kiwiCount + (kiwiPrice * kiwiCount) / 100 * kiwiCountryPercent) * kiwiCount;

let sumFruts = applePercent + orangePercent + kiwiPercentPlus;

const valet = `UA`;

console.log(`
    ${captionString}

    Final price for ${appleCount} ${apple} = ${applePercent.toFixed()} ${valet},
    Final price for ${orangeCount} ${orange} = ${orangePercent.toFixed()} ${valet},
    Final price for ${kiwiCount} ${kiwi} = ${kiwiPercentPlus.toFixed()} ${valet},
   
    Final price for all products = ${sumFruts.toFixed()} ${valet}.
`);