let b = 24;
let a = 36;


//for hcf
const findHcf = (ta, tb) => {
    let rem = tb;
    while (ta%tb != 0) {
        rem = (ta%tb);
        ta=tb;
        tb = rem;
    }
    return rem;
};

const findLcm = (a,b)=>{
    // let hcf  = findHcf(a,b)  //if hcf is not called from external
    return (a*b)/hcf  // hcf(a,b)*lcm(a*b)==a*b
}


let hcf = findHcf(a, b); //find hcf
let lcm = findLcm(a, b); //find lcm
console.log(lcm, "LCM");
console.log(hcf, "HCF");
