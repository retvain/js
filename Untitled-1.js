function testCycle(a, b) {
    while ((a!=0) && (b!=0)); {
        if (a==b)  break;
        else if (a>b) {
         a=a%b;
         }
        else {
         b=b%a;   
         }
        }
    return (a+b);
}

document.body.innerHTML = <h1> hi from js.</h1>