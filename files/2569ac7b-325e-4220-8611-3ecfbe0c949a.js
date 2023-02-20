        
let n = 5,consoleLog = "",x=1,invert = false;

for(var i = 0; i <= n; i ++){
    if(x > n || x === 0) break;
    consoleLog +=  i >= x ? "* " : " ";
    if(i === n){ i = 0;
        invert ? x-- : x++;
        if( x === n) invert = true;
        consoleLog += "\n"
    }
}

console.log(consoleLog)